---
name: add-pocket-translations
description: Add multilingual (fr/es/it/de/pt-br/zh-tw) localizations for new Pokemon TCG Pocket sets and card data under `data/Pokémon TCG Pocket/**`, using PokeOS or RaenonX localized candidates with provenance and cross-validation. Use when scanning for missing language keys, collecting official translations, updating `scripts/tmp/pocket-translations.json`, running the localization codemod, verifying coverage, or fixing zh-tw name/evolveFrom consistency.
---

# Add Pocket Translations

## Overview

为新集合卡片与 set 元信息补齐 fr/es/it/de/pt-br/zh-tw，多语言仅增补缺失键并保持 en 不变。

## Workflow (Batch-based)

1) 选择本次批次目录（例如 `data/Pokémon TCG Pocket/<Set Name>/**/*.ts`）。
2) 扫描缺口并生成待翻译清单；只关注缺失键，不修改已有内容。
3) 收集官方译名并更新全局映射 `scripts/tmp/pocket-translations.json`；不确定的条目标注 TODO，不要强行机翻落地。
   RaenonX 可作为 `fr/es/pt/zh` 的本地化候选源；它不覆盖本项目所需的 `de/it`，且不能替代第二个独立来源。记录抓取 URL/时间/response hash，并对卡名、招式/特性名及规则文本做逐字段交叉验证。
4) 先 dry-run 注入缺失语言，再执行写入；保持语言顺序：`en` 在前，追加 `fr/es/it/de/pt-br/zh-tw`。
5) 复扫确认缺口为 0；若仍有缺失或未命中映射，停止并补齐映射后重跑。
6) 抽查卡片与 set 元信息文件（`data/Pokémon TCG Pocket/<batch>.ts`），然后运行 lint/tsc 检查。

详细命令与约束见 `references/workflow.md`。

## zh-tw 名称修复 (可选)

当发现 `name`/`evolveFrom` 的 zh-tw 不一致或未对齐官方译名时，执行 Python 修复流程。
具体步骤见 `references/zh-tw-name-fix.md`。

## Notes

- 仅补齐缺失语言键；不要改动已有翻译或其它字段。
- 翻译映射跨批次复用；新增映射后可对已处理批次增量重跑。
- 需要联网检索官方译名时优先官方来源，避免不确定翻译进入仓库。
