# zh-tw Name/EvolveFrom 修复流程

针对 `name` 与 `evolveFrom` 的繁体中文（`zh-tw`）进行全量校验与自动修复。

## 依赖

- `en.json`：英文官方名称列表
- `zh_tw.json`：繁体中文官方名称列表（与英文一一对应）

## 核心脚本

### 1) fix_all_remaining.py

- 加载 `en.json` 与 `zh_tw.json` 构建映射。
- 内置特殊前缀处理（如 `Alolan`、`Mega`）。
- 内置特殊名称修正表 `SPECIAL_MAP`。
- 遍历 `TARGET_DIRS` 中的目录，修复 `.ts` 文件的 `name` 与 `evolveFrom`。

```bash
python3 fix_all_remaining.py
```

## 辅助脚本

### 2) extract_names.py

- 扫描指定目录并导出 name 多语言版本，用于人工核对。
- 需要在脚本内修改 glob 路径。

```bash
python3 extract_names.py
```

### 3) generate_corrections.py

- 读取提取的 JSON 与官方列表生成修复映射（用于人工审查）。

```bash
python3 generate_corrections.py
```

## 最佳实践

1) 新增集合时，先更新 `fix_all_remaining.py` 的 `TARGET_DIRS`。
2) 运行 `python3 fix_all_remaining.py` 自动修复。
3) 关注控制台 Warning；如确实缺失，更新 `SPECIAL_MAP` 或补充 `en.json`/`zh_tw.json`。
