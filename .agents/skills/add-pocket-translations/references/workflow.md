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

```bash
npx tsx scripts/tmp/translate-pocket-batch.ts \
  --todo="scripts/tmp/<batch>-todo.json" \
  --out="scripts/tmp/pocket-translations.json"
```

3) 注入缺失语言（先 dry-run，后写入）

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

5) 抽查与质量

- 抽查若干卡片与 set 元信息 `data/Pokémon TCG Pocket/<batch>.ts`。
- 运行 lint/tsc（按仓库现有约定）。

6) 批次迁移

- 保留全局映射 `scripts/tmp/pocket-translations.json`，清理批次 todo/missing。
- 新增映射后，可对已处理批次增量重跑以补齐新条目。

## Hard rules

- 只新增缺失语言键；不要改动已有翻译或其它字段。
- 语言顺序固定：`en` 在前，追加 `fr/es/it/de/pt-br/zh-tw`。
- 译名必须可追溯到官方来源，避免不确定翻译进入仓库。

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
