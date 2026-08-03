---
name: merge-pocket-card-sources
description: Build auditable Pokémon TCG Pocket card metadata by merging PokeOS, RaenonX, and other pinned upstreams, localized card images, PaddleOCR review, multi-source cross-validation, and per-conflict evidence. Use when no single source covers a set, when sources disagree, or before feeding a composite details file into sync-pocket-set.
---

# Merge Pocket Card Sources

在仓库根目录执行。目标不是“挑一个最全上游”，而是为每张卡、每个字段保存候选值、选择值和证据，再生成 `sync-pocket-set` importer 兼容的英文 details JSON。

同时读取 `$sync-pocket-set` 的
[端到端门禁](../sync-pocket-set/references/end-to-end-playbook.md)，先按其中的十张 pilot
验证新来源/schema，再扩大到全 set。

## 输入门禁

先固定所有可变来源的完整 commit、release checksum 或抓取 URL/时间。读取 [references/source-contract.md](references/source-contract.md)，准备：

- 基础索引：连续编号、英文名、稀有度和卡图；
- 两个独立机制候选源；
- 卡面 OCR/review：抽取几个代表性卡图 case，覆盖 Pokémon、Trainer、能力/招式和不同语言；
- review overlay：所有候选冲突的卡面或独立页面裁决；
- source registry：每个来源的角色、版本、许可证和固定 URL。

RaenonX 是除 PokeOS 外的可用上游，角色是 localized metadata/image candidate，不是
自动替代 canonical 详情的唯一真源：

- `https://ptcgp.raenonx.cc/api/data/global-master` 提供 cardEntryMap、结构引用和 i18n IDs；
- `https://ptcgp.raenonx.cc/{locale}/card/{cardId}` 提供页面内 `messages.Game.Master` 本地化 payload；
- `https://cdn.raenonx.cc/api/image/ptcgp?format=png&url=/images/game/card/full/{locale}/{cardId}.png` 提供 PNG 原图；
- 当前可用 overlap 为 `en/fr/es/pt/zh`，不要以英文 fallback 填充 RaenonX 缺失的 `de/it`；
- 记录抓取时间、响应 headers、body SHA-256、固定 URL 和 `https://ptcgp.raenonx.cc` 归因。
  未找到正式复制许可证时，只按明确授权、署名发布的范围使用，并在 provenance 标出限制。

metadata 必须多源交叉验证：编号、数量、稀有度、结构和规则字段至少保留两个独立候选源；
RaenonX localized value 必须通过 card ID + collection number join 到 canonical，而不是
按数组位置合并。任何冲突都写入 review overlay，未裁决前禁止生产写入。

RaenonX 表单名只允许经过通用的缺失分隔符规范化；不得按卡号写特判。适配器保留原始
`sourceName`，cross-source audit 必须确认最终值已经规范化，未规范化的值阻断写入。

禁止批量导入明确禁止 scraper 的站点。许可证不允许复制的来源只能作为校验候选，不能标为生成内容的直接来源。

## 工作流

1. 先运行合并器生成冲突队列；允许它以退出码 2 停止。
2. 只对 `unresolvedConflicts` 做定点卡面 OCR或网页核验，把裁决写进 review overlay；RaenonX
   新来源还必须先完成十卡 localized metadata/image pilot，检查 token binding、source
   coverage 和跨源一致性；B4 还要运行
   `scripts/audit-raenonx-b4-cross-source.mjs`，确认 RaenonX 的稳定机制字段与既有
   多源审计后的 API baseline 一致。
3. 重跑直到 `passed: true`、`unresolvedConflicts: 0`、`missingFields: 0`。
4. 当固定的结构化 metadata 上游尚未发布该卡集时，从 canonical 结果和历史九语官方卡名生成 importer 兼容源；其 `unresolvedLocalizedNames` 必须人工裁决到 0。当前 `build-importer-source.mjs` 是 B4 已审定 adapter，只能作为实现样例；新 set 必须提供显式 set 配置或通用化 adapter，禁止直接改 B4 常量后复用。
5. 用输出的 `*.details.json` 作为 `sync-pocket-set` 的 `metadata.detailsFile`，并把 `*.provenance.json` 固定到 manifest。
6. 在任何 metadata/R2 写入前，再运行一次相同命令；输入 hash 或审计结果变化时停止复核。
7. R2 公网验证通过后，用 `sync-downstream-locales.mjs` 把已审定的七语卡名、实际存在的图片语言和逐卡 gacha rarity 一起写入下游；先 dry-run，再加 `--write`，并逐 locale 检查数量、连续性以及下游 rarity 全卡覆盖测试。脚本写入固定的 `cardRarity.additions.json`，不得再为新 set 新建需要手工接线的 rarity shard。Promo set 也必须按每张卡的真实 rarity 映射，只有源 rarity 为 `None/Promo` 的卡才是 `pr`。

8. 图片与 metadata 的图文一致性必须通过 `$paddleocr-text-recognition`：抽取几个代表性
   localized card cases，覆盖卡号/卡名、招式/特性名和可读规则文本的大致对应；不要求对全量
   卡图逐张 OCR。PaddleOCR API 失败就停止，不得换用其他 OCR 或本地视觉。原始 JSON 用
 `persist-ocr-evidence.mjs` 固化；低置信度、unresolved、ambiguous 或 OCR/metadata
   mismatch 只要记录到 review，不能拿 OCR 噪声静默改写 metadata。

B4 的稳定字段交叉审计示例：

```bash
node .agents/skills/merge-pocket-card-sources/scripts/audit-raenonx-b4-cross-source.mjs \
  --base-ref <reviewed-api-commit> \
  --output meta/pocket-source-reviews/B4/raenonx.cross-source.json
```

该审计复用既有 `B4.audit.json` 的 PokeOS/index、deckGym、PokemonMeta 和定点裁决证据；
RaenonX 只接管本次新增的 `en/fr/es/pt/zh` 本地化字段和图片，不会静默覆盖已审定的稳定
机制字段。审计不通过时禁止写入生产 metadata/R2。

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
  --image-languages en=en,fr=fr,es=es,it=it,de=de,pt=pt-br,zh-TW=zh-tw
```

`--image-languages` 只能列出已完成全量 R2 smoke 的语言映射。确实只有英文素材时可显式
使用 `--image-language en` 作为 fallback，但若用户要求本地化图片，不得用该 fallback
宣称完成。

RaenonX 的 `fr/es/pt/zh` 卡图只有在下载、WebP 转换、R2 公网 HEAD/Content-Type 验证和
OCR 图文一致性全部通过后，才能进入 `--image-languages`；`de/it` 必须继续使用其他已审定
来源或保持现有对象，不得伪造 RaenonX 映射。

`persist-ocr-evidence.mjs` 只接受位于 `--ocr-dir` 内、且确实被抽检 review 引用的
PaddleOCR JSON；它把这些原始结果复制到持久目录并将 evidence 改写为仓库相对路径。
复制时必须删除签名 URL 的 query capability。持久化输出中不得残留 `/tmp`、
`/private/tmp`、本机用户目录、authorization、token、cookie 或 credential。

需要替换已存在的 set 时显式加 `--base-ref <reviewed-commit>`。脚本会确认每个目标文件
仍与该 commit 完全一致，删除旧 set keys 后原子写入新值，并保持所有无关顶层 key 的
原顺序；任一 worktree 漂移都会停止，不得以基线内容覆盖用户修改。重跑后还要扫描原始
JSON，确认没有重复 key。

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
- OCR audit 必须以卡名匹配作为身份信号；只有检测到明确的 `<NNN>/233` 或 `B4-NNN` 卡号且编号不匹配时才阻断，不能把宝可梦全国编号当作卡组编号。
- 任一必填字段缺失、任一冲突未裁决或 ID 不连续时，输出审计但以非零退出，禁止生产写入。
- RaenonX 的 source-exact 模板若出现未绑定 token、动态 token 数变化无法按 ID/ref 对齐、
  或 English oracle 与现有 canonical 语义无法对齐，必须停止；不得直接 strip 标签或回退英文。
- OCR 只用于图文一致性证据，不能绕过多源冲突裁决；image identity/number/name mismatch
  必须阻断 metadata/R2 写入。
- canonical adapter 若根据数组位置生成卡号，必须先断言每一项 ID 都等于预期的 `<set>-NNN` 且无重复；只有数量相等不够。

## 联动约束

随后遵循 `$sync-pocket-set` 完成 metadata、翻译、WebP、R2 和验证。需要卡面识别时严格遵循 `$paddleocr-text-recognition`；它失败就停止，不换 OCR。需要六语补全时严格遵循 `$add-pocket-translations`，只写有官方依据或已审定的映射。
