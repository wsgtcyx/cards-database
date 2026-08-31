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

release 归档来源还必须保存真实 asset 名、最终下载 URL、抓取时间、HTTP status/headers、
字节数和 body SHA-256。先枚举 release assets 再选择文件；猜测出来但返回 404 的 URL 不能
进入 registry。若同一来源的 card 数据与 set 索引在 pack、数量或名称上冲突，registry/audit
必须同时保存两份响应 hash 和明确的 adopted/rejected 裁决。

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

OCR evidence 持久化前必须绑定 `cardId`、`locale`、源图 SHA-256/字节数、原始 blocks 与
chosen value，并移除 provider URL、job ID、签名 query、token/cookie、用户目录和临时路径。

## Output invariants

- `001..total` 数量严格连续；
- 每张卡都同时存在于索引和两个候选源，除非 review 明确说明缺源并给出卡面证据；
- Pokémon 必须有 illustrator、flavor、对齐的 Ability/Effect 与 Moves/Energy/Damage/Effects；
- Trainer 必须有 trainer type、effect 和 illustrator；
- provenance 每个 canonical 字段保存 `chosen`、`status`、`candidates`，review 字段额外保存 `evidence`；
- audit 中 `passed` 只有在连续、无缺口、无 unresolved 时才为 true。
- illustrator placeholder/mojibake、TODO、英文规则 fallback、未绑定 token、同名 printing
  翻译不一致和 CJK 名称拉丁占位均视为 unresolved；
- preflight 审计不可覆写；final audit 另建文件，并记录 canonical、localizations、图片 manifest、
  R2 receipts/verify 与下游输入的 SHA-256。

## Image evidence config

`build-localized-image-evidence.mjs --config` 读取 set config 中的 `imageEvidence`。所有会随
set 改变的值都必须显式配置，不能写进脚本：

```json
{
  "setId": "B4a",
  "total": 110,
  "imageEvidence": {
    "sourceSetId": 588,
    "sourceCardUrlTemplate": "https://example.test/{sourceSetId}/{number}_{sourceLocale}.png",
    "locales": {
      "en": { "dir": "images-en", "sourceLocale": "en" },
      "pt-br": { "dir": "images-ptbr", "sourceLocale": "ptbr" }
    },
    "ocrLocales": ["en"],
    "sources": {
      "localizedImages": { "attribution": "https://example.test/", "license": "reviewed" }
    },
    "boosters": [{
      "slug": "stable-pack-slug",
      "logoRoot": "../../../temporary-assets/logos",
      "logoFilePattern": "{sourceLocale}.webp",
      "logoEvidenceUrl": "https://example.test/fixed-set-response",
      "artworkFile": "../../../temporary-assets/artwork.webp",
      "artworkEvidenceUrl": "https://example.test/fixed-artwork",
      "artworkLanguageNeutral": true
    }]
  }
}
```

路径相对 config 文件解析；生产持久化的 evidence 只保存 URL/hash/bytes/object key，不保存
这些临时本地路径。对象期望数由 cards、locales、boosters 和 OCR locales 动态计算。
