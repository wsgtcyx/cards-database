# Composite source contract

## Source registry

`--sources` 是一个 JSON object。每个 key 是稳定 source ID，值至少包含 `role`，并按类型提供：

```json
{
  "cardImage": {
    "role": "primary visual evidence",
    "repo": "https://github.com/example/cards",
    "commit": "40-character commit",
    "release": "https://github.com/example/cards/releases/tag/x",
    "releaseSha256": "64-character sha256",
    "license": "MIT"
  },
  "validatorA": {
    "role": "mechanics validation only; content is not copied",
    "repo": "https://github.com/example/validator",
    "commit": "40-character commit",
    "license": "AGPL-3.0"
  }
}
```

角色必须如实描述。`validation only` 不能伪装成直接 metadata 来源。

## Review overlay

```json
{
  "schemaVersion": 1,
  "setId": "B4",
  "cards": {
    "B4-001": {
      "fields": {
        "illustrator": {
          "value": "Artist Name",
          "raw": "OCR raw spelling",
          "evidence": ["paddleocr:/absolute/result.json#page=1"],
          "note": "Corrected against the repository artist corpus."
        },
        "description": {
          "value": "Exact English flavor text.",
          "raw": "OCR raw flavor text.",
          "evidence": ["paddleocr:/absolute/result.json#page=1"]
        },
        "attacks": {
          "value": [{"name":"Attack","cost":["Grass"],"damage":"30+"}],
          "evidence": ["https://example.com/fixed-card-page"],
          "note": "Damage suffix verified on card."
        }
      }
    }
  }
}
```

字段名使用 canonical 名称：`name`、`rarity`、`hp`、`types`、`stage`、`evolveFrom`、`abilities`、`attacks`、`weaknesses`、`retreat`、`illustrator`、`description`、`trainerType`、`effect`。

review 值必须带至少一个证据。纯备注不能消解冲突。

## Output invariants

- `001..total` 数量严格连续；
- 每张卡都同时存在于索引和两个候选源，除非 review 明确说明缺源并给出卡面证据；
- Pokémon 必须有 illustrator、flavor、对齐的 Ability/Effect 与 Moves/Energy/Damage/Effects；
- Trainer 必须有 trainer type、effect 和 illustrator；
- provenance 每个 canonical 字段保存 `chosen`、`status`、`candidates`，review 字段额外保存 `evidence`；
- audit 中 `passed` 只有在连续、无缺口、无 unresolved 时才为 true。
