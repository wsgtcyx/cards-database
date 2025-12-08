---
name: add-pocket-translations
overview: 为 Pocket 所有卡片添加 fr/es/it/de/pt-br/zh-tw 官方本地化，并仅修改多语言字段
todos:
  - id: inventory-mega
    content: 扫描 Mega Rising 缺失语言键
    status: completed
  - id: translation-mega
    content: 生成翻译列表并填充映射（可机翻/搜索）
    status: completed
    dependencies:
      - inventory-mega
  - id: codemod-build
    content: 编写/更新注入脚本并 dry-run
    status: completed
    dependencies:
      - translation-mega
  - id: codemod-apply
    content: 应用脚本更新 Mega Rising 卡片
    status: completed
    dependencies:
      - codemod-build
  - id: verify-mega
    content: 复扫缺口 抽查并跑 lint
    status: completed
    dependencies:
      - codemod-apply
  - id: rollout-next
    content: 规划下一批目录与剩余译名缺口
    status: completed
    dependencies:
      - verify-mega
  - id: verify-zh-names
    content: 全量校验与修复繁体中文名称 (Name/EvolveFrom)
    status: completed
    dependencies:
      - rollout-next
---

# 计划（分批全量执行）

批次策略：

- 先行批次：`data/Pokémon TCG Pocket/Mega Rising/**/*.ts`
- 后续批次按子系列逐个推进，先完成当前批次再进入下一批。

每个批次的固定流水线：
1) 盘点与缺口定位：遍历当前批次目录下的所有卡片文件，用 AST/正则收集所有 `Languages` 对象（name、description、attacks/abilities/items/evolveFrom 等），生成清单（含文件路径与字段路径），标记缺少 fr/es/it/de/pt-br/zh-tw 的字段，保持 en 及其它内容不变。
2) 翻译来源收集：将批次英文文本去重输出待翻译列表。能确定的条目可直接人工/机翻填写；不够把握的条目使用 Cursor 内置搜索或 Exa MCP 联网检索官方 Pokémon/TCG 译名或卡面措辞（优先官方，禁止不确定的机翻直接落地）。维护映射文件（如 `scripts/tmp/pocket-translations.json`），未找到的标注 TODO。
3) 脚本注入：使用一次性 codemod（如 `scripts/add-pocket-localizations.ts`）读取映射，对批次卡片补齐缺失的 fr/es/it/de/pt-br/zh-tw，只新增缺失键，不改动已有键和其它字段，保持 `en` 领先、其它语言按固定顺序追加；支持 dry-run 与 apply。
4) 覆盖校验：注入后再次扫描批次所有 `Languages`，确认目标语言缺失为 0；输出未命中映射的英文列表，如有则阻断流程以防漏翻。
5) 抽查与质量：从批次抽查若干卡，对照来源核对译名/措辞；运行 lint/type 检查（如 `pnpm lint`/`tsc --noEmit`），必要时微调格式；记录仍缺的官方译名待补列表。
6) 迁移到下一批：清空/更新待翻译列表，仅保留尚未获取官方译名的条目，复用同一脚本对下一个子系列目录执行 1-5 步，直至覆盖 `data/Pokémon TCG Pocket/**/*.ts` 全量。

分批推进顺序（参考）：

- 批次1：Mega Rising（先行验证）
- 批次2：Genetic Apex
- 批次3：Triumphant Light
- 批次4：Wisdom of Sea and Sky
- 批次5：Space-Time Smackdown
- 批次6：Shining Revelry
- 批次7：Promos-A
- 批次8：Mythical Island
- 批次9：Extradimensional Crisis
- 批次10：Eevee Grove
- 批次11：Deluxe Pack: ex
- 批次12：Celestial Guardians
- 批次13：Secluded Springs
- 批次14：其它新增子目录

执行要点：

- 映射文件全局复用，批次间累计翻译资产，避免重复查询。
- 若发现官方差异，更新映射后可对已处理批次重跑脚本增量覆盖。
- 先 dry-run 再 apply；每批结束后再跑校验与 lint，避免一次性大面积失控。
- 执行过程中需及时更新计划与 Todo 状态，确保可追踪。
- 每批除卡片文件外，同步补齐该批 set 元信息 ts（`data/Pokémon TCG Pocket/<batch>.ts`）的 name/boosters 等多语言字段。

## 进度记录

- 已完成批次：Mega Rising、Genetic Apex、Triumphant Light、Wisdom of Sea and Sky、Space-Time Smackdown、Shining Revelry、Promos-A、Mythical Island、Extradimensional Crisis、Eevee Grove、Deluxe Pack: ex、Celestial Guardians、Secluded Springs（均复扫缺口 0，待翻译 0）。
- 翻译映射累计：`scripts/tmp/pocket-translations.json`。
- 近期产物：`scripts/tmp/genetic-missing.json`、`scripts/tmp/genetic-todo.json`、`scripts/tmp/triumph-missing.json`、`scripts/tmp/triumph-todo.json`、`scripts/tmp/wisdom-missing.json`、`scripts/tmp/wisdom-todo.json`、`scripts/tmp/spacetime-missing.json`、`scripts/tmp/spacetime-todo.json`、`scripts/tmp/shining-missing.json`、`scripts/tmp/shining-todo.json`、`scripts/tmp/promos-missing.json`、`scripts/tmp/promos-todo.json`、`scripts/tmp/mythic-missing.json`、`scripts/tmp/mythic-todo.json`、`scripts/tmp/extradim-missing.json`、`scripts/tmp/extradim-todo.json`、`scripts/tmp/eevee-missing.json`、`scripts/tmp/eevee-todo.json`、`scripts/tmp/deluxe-missing.json`、`scripts/tmp/deluxe-todo.json`、`scripts/tmp/celestial-missing.json`、`scripts/tmp/celestial-todo.json`、`scripts/tmp/secluded-missing.json`、`scripts/tmp/secluded-todo.json`（当前为空或留档）。

## 批次复用方式

按批次替换 `<batch>` 目录执行：

- 扫描缺口与待翻译：  
`npx tsx scripts/tmp/scan-pocket-batch.ts --batch="data/Pokémon TCG Pocket/<batch>/**/*.ts" --out-missing="scripts/tmp/<batch>-missing.json" --out-todo="scripts/tmp/<batch>-todo.json"`
- 翻译/补全映射（可指定 todo/out）：  
`npx tsx scripts/tmp/translate-pocket-batch.ts --todo="scripts/tmp/<batch>-todo.json" --out="scripts/tmp/pocket-translations.json"`
- 注入 dry-run：  
`npx tsx scripts/add-pocket-localizations.ts --pattern="data/Pokémon TCG Pocket/<batch>/**/*.ts"`
- 注入写入：  
`npx tsx scripts/add-pocket-localizations.ts --pattern="data/Pokémon TCG Pocket/<batch>/**/*.ts" --write`
- 复扫验证：  
`npx tsx scripts/tmp/scan-pocket-batch.ts --batch="data/Pokémon TCG Pocket/<batch>/**/*.ts" --out-missing="scripts/tmp/<batch>-missing.json" --out-todo="scripts/tmp/<batch>-todo.json"`

## 下一步

- 下一个批次：`data/Pokémon TCG Pocket/Genetic Apex/**/*.ts`（如需重跑以对齐新增映射，可按需执行；否则进入下一个未处理目录）

## 繁体中文名称全量校验与修复 (Python Workflow)

针对 Traditional Chinese (`zh-tw`) 的卡片名称 (`name`) 和进化来源 (`evolveFrom`) 进行的专项全量校验与自动化修复。

### 依赖文件
必须确保以下文件在根目录：
- `en.json`: 英文官方名称列表
- `zh_tw.json`: 繁体中文官方名称列表 (与英文列表一一对应)

### 脚本说明

#### 1. `fix_all_remaining.py` (核心修复脚本)
**功能**: 
- 加载 `en.json` 和 `zh_tw.json` 构建映射表。
- 内置特殊前缀处理 (如 "Alolan" -> "阿羅拉", "Mega" -> "超級")。
- 内置特殊名称修正表 (`SPECIAL_MAP`) 处理训练家、道具及特殊宝可梦。
- 遍历 `TARGET_DIRS` 列表中的所有子目录。
- 解析 `.ts` 文件中的 `name` 和 `evolveFrom` 字段，提取英文名，匹配官方中文名。
- 若当前 `zh-tw` 值不匹配，则自动修正。

**执行方式**:
```bash
# 直接运行，自动覆盖修改文件
python3 fix_all_remaining.py
```

#### 2. `extract_names.py` (提取检查工具)
**功能**:
- 扫描指定目录 (如 `Genetic Apex`) 下的 `.ts` 文件。
- 提取 `name` 字段的所有语言版本。
- 输出为 JSON 文件 (如 `genetic_apex_names.json`) 供人工核对。

**执行方式**:
```bash
# 需按需修改脚本内的 glob 路径
python3 extract_names.py
```

#### 3. `generate_corrections.py` (生成补丁工具 - 可选)
**功能**:
- 读取提取出的 JSON 和官方列表。
- 生成待修复的 JSON 映射文件 (如 `corrections.json`)。
- 主要用于中间调试或生成人工审查清单。

**执行方式**:
```bash
python3 generate_corrections.py
```

### 最佳实践
日常维护或新增 Set 时：
1. 更新 `fix_all_remaining.py` 中的 `TARGET_DIRS` 列表，加入新目录。
2. 运行 `python3 fix_all_remaining.py` 进行全量或增量修复。
3. 检查控制台输出的 `Warning` 信息（提示未找到翻译的条目），如确实缺失，需更新代码中的 `SPECIAL_MAP` 或补充 `en.json`/`zh_tw.json`。