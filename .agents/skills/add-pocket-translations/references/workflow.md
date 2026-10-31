# Pocket Localization SOP

## Inputs and artifacts

- 批次路径：`data/Pokémon TCG Pocket/<batch>/**/*.ts`
- 主要映射：`scripts/tmp/pocket-translations.json`
- 批次输出：`scripts/tmp/<batch>-missing.json`、`scripts/tmp/<batch>-todo.json`

## Batch pipeline

1) 扫描缺口与待翻译清单

```bash
npx tsx scripts/tmp/scan-pocket-batch.ts \
  --batch="data/Pokémon TCG Pocket/<batch>/**/*.ts" \
  --out-missing="scripts/tmp/<batch>-missing.json" \
  --out-todo="scripts/tmp/<batch>-todo.json"
```

2) 收集官方译名并更新映射

- 依据 `scripts/tmp/<batch>-todo.json` 去重翻译列表。
- 优先官方来源；不确定的条目标注 TODO，不要硬落机翻。

从固定的官方页面、游戏字典或审定卡面收集候选，保存 URL、版本/时间、源字节 SHA-256 和逐字段证据。历史 `scripts/tmp/translate-pocket-batch.ts` 调用机器翻译且可能返回英文，只能用于隔离的未审定候选，不能生成官方译名或直接更新生产映射。

有 canonical/localizations 时，按本批次配置导出规则映射（不会静默丢弃 `ja/ko`）：

```bash
node .agents/skills/merge-pocket-card-sources/scripts/build-translation-map.mjs \
  --canonical <canonical.json> --localizations <localizations.json> \
  --config <source-config.json> --output <reviewed-translation-map.json>
```

3) 注入缺失语言（先 dry-run，后写入）

韩语与日语的生产字段使用 [韩语契约](korean.md) / [日语契约](japanese.md) 中的审定写入器，绑定来源哈希和前值。下面的历史映射 codemod 只适合已审定且不歧义的缺失键；它从映射中的语言推导范围，也可用 `--locales=ko` 显式收窄。任何缺映射都非零退出，`--write` 不写部分结果。它不证明来源是官方文本，也不替代逐字段审定。

```bash
npx tsx scripts/add-pocket-localizations.ts \
  --pattern="data/Pokémon TCG Pocket/<batch>/**/*.ts"
```

```bash
npx tsx scripts/add-pocket-localizations.ts \
  --pattern="data/Pokémon TCG Pocket/<batch>/**/*.ts" \
  --write
```

4) 复扫验证

- 缺口必须为 0；若仍有 missing 或 TODO，先补齐映射再重跑。

```bash
npx tsx scripts/tmp/scan-pocket-batch.ts \
  --batch="data/Pokémon TCG Pocket/<batch>/**/*.ts" \
  --out-missing="scripts/tmp/<batch>-missing.json" \
  --out-todo="scripts/tmp/<batch>-todo.json"
```

新 set 还必须对 importer/合并器产出的 canonical 与 localizations JSON 做语义审计：

```bash
node .agents/skills/merge-pocket-card-sources/scripts/audit-pocket-localizations.mjs \
  --canonical "meta/pocket-source-reviews/<set>/<set>.canonical.json" \
  --localizations "meta/pocket-source-reviews/<set>/<set>.localizations.json" \
  --config "meta/pocket-source-reviews/<set>/<set>.source-config.json" \
  --output "meta/pocket-source-reviews/<set>/<set>.localization-audit.json"
```

审计必须 `passed: true`，并覆盖英文规则 fallback、TODO/markup、mojibake、CJK 名称拉丁
fallback、括号/分隔符、规则 token multiset，以及同 canonical 名称跨 printing 的译名一致性。
真实卡面排版导致的 token 差异必须使用 `reviewedTokenExceptions` 按
`<card>.<field>.<locale>` 定点记录理由；禁止全局放宽规则。

5) 抽查与质量

- 抽查若干卡片与 set 元信息 `data/Pokémon TCG Pocket/<batch>.ts`。
- 运行 lint/tsc（按仓库现有约定）。

6) 批次迁移

- 保留全局映射 `scripts/tmp/pocket-translations.json`，清理批次 todo/missing。
- 新增映射后，可对已处理批次增量重跑以补齐新条目。

## Hard rules

- 默认只新增缺失语言键。修复已有错误必须有显式 correction scope、固定来源和 review overlay。
- 语言顺序固定：`en` 在前，追加 `fr/es/it/de/pt-br/zh-tw/ja/ko`。
- 译名必须可追溯到官方来源，避免不确定翻译进入仓库。
- name、full-rule、image 三种 locale coverage 分开验收，禁止互相代替。

## Batch order reference (optional)

- Mega Rising
- Genetic Apex
- Triumphant Light
- Wisdom of Sea and Sky
- Space-Time Smackdown
- Shining Revelry
- Promos-A
- Mythical Island
- Extradimensional Crisis
- Eevee Grove
- Deluxe Pack: ex
- Celestial Guardians
- Secluded Springs
- 其它新增子目录

日语批次必须同时遵循 [japanese.md](japanese.md)，显式执行 `audit-pocket-localization-metadata.mjs --locales ja`；不能以历史六语审计通过代替日语验收。

韩语批次必须遵循 [korean.md](korean.md)，显式执行 `--locales ko`；历史默认审计不包含韩语。
