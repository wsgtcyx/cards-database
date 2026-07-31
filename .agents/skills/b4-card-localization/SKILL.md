---
name: b4-card-localization
description: Audit, source, update, and verify every localized metadata field and card image for Pokémon TCG Pocket set B4 (Ruler of the Skies) in this cards-database fork. Use when B4 needs a reproducible refresh, upstream reevaluation, translation gap closure, image publication, or downstream locale synchronization.
---

# B4 Card Localization

在仓库根目录执行。本 skill 是 B4 的可重复运行入口；通用导入、R2 上传和下游同步仍复用 `sync-pocket-set` 与 `merge-pocket-card-sources`，不复制第二套数据模型。

## 完成定义

只有同时满足以下条件，才允许把 B4 标记为 complete：

1. `B4-001..B4-233` 连续且唯一；
2. 英文结构化 metadata 完整；
3. `fr/es/it/de/pt-br/zh-tw` 的所有实际存在字段均为经来源核验的本地化文本，不使用英文 fallback 伪装；
4. 每张卡的每个声明语言图片均真实存在、可解码且不是英文图片的重复副本；
5. 来源固定到 commit、release 或带抓取时间和 SHA-256 的快照；
6. 本地 TypeScript 校验、B4 审计、图片门禁和下游同步测试全部通过。

任一语言尚无合格上游时，保留 `translations.todo.json` / image gap report，PR 维持 Draft；禁止机器翻译后直接宣称官方本地化完成。

## 来源优先级

1. 游戏内 MemoryDatabase / 资源包的多语言导出；
2. Pokémon 官方页面或官方 CDN；
3. 固定 commit 的 `shelken/ptcgp-assets`：游戏数据导出的多语言 metadata；
4. Pokéos API / 对象存储：卡集身份与实际本地化卡图；
5. 固定 release 的 `flibustier/pokemon-tcg-pocket-database`：英文卡表、编号、rarity、pack 与图片索引；
6. TCGdex、PokemonMeta、PokeOS 页面、其他公开仓库仅作交叉验证，除非 B4 端点、许可证和字段覆盖均通过探针。

不得把本仓库部署出的 `api.pokemontcgpocket.app` 当作独立上游；它只能用于回归测试，避免循环引用。

## 1. 探测上游

```bash
node .agents/skills/b4-card-localization/scripts/probe-upstreams.mjs \
  --output meta/pocket-source-reviews/B4.upstream-probe.json
```

探针必须验证：

- Pokéos 返回 B4 set ID、official/secret 数量；
- 目标语言卡图对象是否返回有效 PNG/WebP；
- 游戏图片域名的无扩展 URL、high/low 资源是否存在；
- TCGdex B4 端点是否已上线；
- 当前 API 是否完整返回 233 个 B4 ID，以及哪些本地化字段实际缺失。

## 2. 生成审计报告

```bash
node .agents/skills/b4-card-localization/scripts/audit-b4.mjs \
  --output meta/pocket-source-reviews/B4.localization-audit.json
```

审计报告至少包含：卡数、ID 连续性、逐字段六语缺口、逐语言图片覆盖、英文 fallback、同图哈希碰撞与受影响卡片清单。

## 3. 准备候选输入

所有候选数据写入临时目录，不直接覆盖 `data/`：

```bash
WORK_ROOT=$(mktemp -d /tmp/b4-localization.XXXXXX)
node .agents/skills/b4-card-localization/scripts/fetch-candidates.mjs \
  --output "$WORK_ROOT/candidates"
```

候选输入须保留：source、固定版本、许可证、原始 URL、抓取时间、SHA-256、字段级 provenance。来源冲突进入 review，不自动以“最新”覆盖。

## 4. 写入 metadata

先复用通用合并 skill 生成候选和 provenance，再走 B4 门禁：

```bash
# 按 merge-pocket-card-sources/SKILL.md 生成/更新 B4 importer source 与翻译表
POCKET_TRANSLATION_TODO=meta/pocket-source-reviews/B4.translations.todo.json \
node .agents/skills/sync-pocket-set/scripts/import-metadata.mjs \
  --manifest meta/pocket-source-reviews/B4.manifest.json
```

只有 `todoStrings: 0` 且无 unresolved conflicts 时才允许加 `--write`。写入必须是内存构建、全量验证、一次性落盘；中途失败不得留下部分更新。

## 5. 图片处理

每个目标语言先下载到临时目录，验证 magic bytes、尺寸和哈希，再统一转 WebP 并上传已有 `game` R2 bucket。对象键沿用：

```text
<locale>/tcgp/B4/<number>/high.webp
<locale>/tcgp/B4/<number>/low.webp
```

`pt-br` 的公开路径使用既有项目约定 `pt`；metadata key 仍为 `pt-br`。不得把英文卡图复制到其他语言路径。图片上传和公网验证严格按 `sync-pocket-set/SKILL.md` 执行。

## 6. 强制验证

```bash
node .agents/skills/b4-card-localization/scripts/audit-b4.mjs \
  --fail-on-gap \
  --output meta/pocket-source-reviews/B4.localization-audit.json

git diff --check
npm run validate
node --test \
  .agents/skills/merge-pocket-card-sources/scripts/persist-ocr-evidence.test.mjs \
  .agents/skills/merge-pocket-card-sources/scripts/sync-downstream-locales.test.mjs
```

还必须人工抽查至少 `B4-001`、`B4-082`、`B4-122`、`B4-154`、`B4-176`、`B4-233`，覆盖普通 Pokémon、复杂攻击效果、Supporter、Ability 与 secret card。

## 7. 下游同步

仅在 card database 通过全量门禁后运行既有下游同步。同步必须原子化，并验证下游所有 B4 locale 文件和 rarity/gacha 索引覆盖 233 张卡。不得让下游 API 反向成为本仓库的数据来源。

## 输出

每次运行应更新：

- `meta/pocket-source-reviews/B4.sources.json`
- `meta/pocket-source-reviews/B4.upstream-probe.json`
- `meta/pocket-source-reviews/B4.localization-audit.json`
- `meta/pocket-source-reviews/B4.translations.todo.json`
- `meta/pocket-source-reviews/B4.provenance.json`（写入发生时）

最终汇报必须区分：已验证写入、仅有候选、缺失上游、图片未发布、下游未同步。