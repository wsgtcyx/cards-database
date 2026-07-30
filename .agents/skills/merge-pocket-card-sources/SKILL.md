---
name: merge-pocket-card-sources
description: Build auditable Pokémon TCG Pocket card metadata by merging fields from multiple upstreams, pinned card images, OCR review, and per-conflict evidence. Use when no single licensed source covers a new set, when sources disagree, or before feeding a composite details file into sync-pocket-set.
---

# Merge Pocket Card Sources

在仓库根目录执行。目标不是“挑一个最全上游”，而是为每张卡、每个字段保存候选值、选择值和证据，再生成 `sync-pocket-set` importer 兼容的英文 details JSON。

## 输入门禁

先固定所有可变来源的完整 commit、release checksum 或抓取 URL/时间。读取 [references/source-contract.md](references/source-contract.md)，准备：

- 基础索引：连续编号、英文名、稀有度和卡图；
- 两个独立机制候选源；
- 卡面 OCR/review：所有卡的 illustrator，Pokémon 的 flavor text；
- review overlay：所有候选冲突的卡面或独立页面裁决；
- source registry：每个来源的角色、版本、许可证和固定 URL。

禁止批量导入明确禁止 scraper 的站点。许可证不允许复制的来源只能作为校验候选，不能标为生成内容的直接来源。

## 工作流

1. 先运行合并器生成冲突队列；允许它以退出码 2 停止。
2. 只对 `unresolvedConflicts` 做定点卡面 OCR或网页核验，把裁决写进 review overlay。
3. 重跑直到 `passed: true`、`unresolvedConflicts: 0`、`missingFields: 0`。
4. 当固定的结构化 metadata 上游尚未发布该卡集时，用 `build-importer-source.mjs` 从 canonical 结果和历史九语官方卡名生成 importer 兼容源；其 `unresolvedLocalizedNames` 必须人工裁决到 0。
5. 用输出的 `*.details.json` 作为 `sync-pocket-set` 的 `metadata.detailsFile`，并把 `*.provenance.json` 固定到 manifest。
6. 在任何 metadata/R2 写入前，再运行一次相同命令；输入 hash 或审计结果变化时停止复核。
7. R2 公网验证通过后，用 `sync-downstream-locales.mjs` 把已审定的七语卡名和实际存在的图片语言写入下游；先 dry-run，再加 `--write`，并逐 locale 检查数量与连续性。

```bash
node .agents/skills/merge-pocket-card-sources/scripts/merge-pocket-card-sources.mjs \
  --set-id B4 \
  --total 233 \
  --index /tmp/B4.json \
  --deckgym /tmp/deckgym-database.json \
  --pokemon-meta /tmp/pokemonmeta-B4.json \
  --review /tmp/B4.review.json \
  --sources /tmp/B4.sources.json \
  --images /tmp/cards-by-set/B4 \
  --image-ref-base https://raw.githubusercontent.com/owner/repo/full-commit/path/B4 \
  --output /tmp/B4-composite
```

`--image-ref-base` 应固定到完整 commit；本地目录只用于存在性与 SHA-256 校验，持久化
canonical/provenance 时不得写入一次性 `/tmp` 路径。

自动 OCR review 与人工裁决分开保存时，用通用决策应用器生成最终 review；
`decisions.fields` 按字段、卡号保存值，证据可写在单项或
`decisions.defaults.<field>`：

```bash
node .agents/skills/merge-pocket-card-sources/scripts/persist-ocr-evidence.mjs \
  --review /tmp/B4.review.ocr.json \
  --ocr-dir /tmp/ocr-full \
  --output-review meta/pocket-source-reviews/B4/B4.review.ocr.json \
  --evidence-prefix meta/pocket-source-reviews/B4/ocr

node .agents/skills/merge-pocket-card-sources/scripts/apply-review-decisions.mjs \
  --base meta/pocket-source-reviews/B4/B4.review.ocr.json \
  --decisions meta/pocket-source-reviews/B4.decisions.json \
  --output meta/pocket-source-reviews/B4/B4.review.final.json

node .agents/skills/merge-pocket-card-sources/scripts/build-importer-source.mjs \
  --canonical /tmp/B4-composite/B4.canonical.json \
  --template-root /tmp/ptcgp-assets \
  --species-names /tmp/pokeapi-species-names.csv \
  --output /tmp/B4-importer-source

node .agents/skills/merge-pocket-card-sources/scripts/sync-downstream-locales.mjs \
  --source-root /tmp/B4-importer-source \
  --downstream ../tcgp \
  --set-id B4 \
  --set-name "Ruler of the Skies" \
  --expected-count 233 \
  --image-language en
```

`persist-ocr-evidence.mjs` 只接受位于 `--ocr-dir` 内、且确实被 review 引用的
PaddleOCR JSON；它把这些原始结果复制到持久目录并将 evidence 改写为仓库相对路径。
持久化输出中不得残留 `/tmp`、`/private/tmp` 或本机用户目录。

若本轮已确认下游工作树初始干净，但需要从 dry-run 产生的错误格式恢复后重写，显式加
`--base-ref HEAD`。脚本会从该基线读取原文本并只在根对象末尾追加新 set，避免重排
数值形态的旧 JSON key；不要在未确认目标文件无用户改动时使用该选项。

输出固定为：

- `<set>.canonical.json`：逐卡 canonical 数据；
- `<set>.details.json`：现有 importer 兼容数组；
- `<set>.provenance.json`：逐字段候选、选择、状态和证据；
- `<set>.audit.json`：连续性、缺口、冲突、诊断和输入 SHA-256。

## 裁决规则

- 名称、编号、稀有度优先固定索引；机制字段必须至少有两个候选或 review 证据。
- 两源规范化后一致可自动通过；只忽略大小写、Unicode、Pokémon 重音和末尾标点，不忽略数字、回合条件、能量、伤害后缀或卡牌对象。
- 候选不一致必须写 `review.cards.<id>.fields.<field>`；不得在脚本里添加目标 set 或卡号特判。
- OCR 原文与纠正值同时保留。illustrator 可用仓库既有 artist corpus 纠错；flavor text 只能纠正明确 OCR 错字并保留说明。
- 任一必填字段缺失、任一冲突未裁决或 ID 不连续时，输出审计但以非零退出，禁止生产写入。

## 联动约束

随后遵循 `$sync-pocket-set` 完成 metadata、翻译、WebP、R2 和验证。需要卡面识别时严格遵循 `$paddleocr-text-recognition`；它失败就停止，不换 OCR。需要六语补全时严格遵循 `$add-pocket-translations`，只写有官方依据或已审定的映射。
