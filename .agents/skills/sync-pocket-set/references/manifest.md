# Pocket set manifest

`discover-pocket-set.mjs` 根据一个 set ID 和固定版本的
[`shelken/ptcgp-assets`](https://github.com/shelken/ptcgp-assets) checkout
生成 manifest。它是本次导入的单一事实清单，保存在临时目录，不提交仓库。

## 状态门禁

- `needs-research`：自动发现已完成，但事实来源尚未补齐；禁止写 metadata。
- `ready`：所有研究字段都有 URL 证据，详细卡牌数据源已固定到完整 commit，可运行 importer。

不要仅修改 `status`。先完成 `research.required`，再改为 `ready`。

## 自动发现字段

```json
{
  "schemaVersion": 1,
  "status": "needs-research",
  "source": {
    "repo": "https://github.com/shelken/ptcgp-assets",
    "commit": "<40-char commit>",
    "checkout": "/tmp/...",
    "rawImagesBase": "https://raw.githubusercontent.com/.../<commit>/images"
  },
  "set": {
    "id": "B4",
    "sourceId": "B4",
    "file": "English Set Name",
    "total": 100,
    "official": null,
    "releaseDate": null,
    "names": {},
    "boosters": [
      {
        "id": "english-pack-slug",
        "sku": "B4_1",
        "names": {}
      }
    ]
  },
  "metadata": {
    "detailsFile": null,
    "detailsSetId": "B4",
    "detailsSource": {
      "repo": null,
      "commit": null,
      "license": null,
      "url": null
    },
    "zhTermsFile": "/absolute/path/scripts/tmp/pocket-zh-source-terms.json"
  },
  "images": {
    "cardLanguages": {
      "en-US": "en",
      "zh-TW": "zh-tw"
    },
    "cardSourceFormats": {
      "en-US": "png",
      "zh-TW": "png"
    },
    "packLanguages": {},
    "expectedObjects": {
      "cards": 400,
      "boosters": 18,
      "total": 418
    }
  },
  "r2": {
    "bucket": "game",
    "origin": "https://game.pokemontcgpocket.app"
  },
  "research": {
    "required": [],
    "evidence": [],
    "verifiedAt": null
  }
}
```

Promo source ID 使用 `PROMO-B`，项目 ID 使用 `P-B`；发现脚本会自动转换。

## 必须研究的字段

| 字段 | 要求 |
| --- | --- |
| `set.releaseDate` | `YYYY-MM-DD`；优先 Pokémon 官方公告或游戏内一手数据 |
| `set.official` | 正式编号数量，不含 secret cards；至少与可靠完整卡表交叉核对 |
| `metadata.detailsFile` | 本机绝对路径；内容必须覆盖 `001..total` 的英文机制数据 |
| `metadata.detailsSource.repo` | 详细卡牌数据来源仓库 URL |
| `metadata.detailsSource.commit` | 来源的完整 40 位 commit |
| `metadata.detailsSource.license` | 已核对的许可证标识 |
| `metadata.detailsSource.url` | 固定到 commit 的原始文件 URL |

详细数据源必须包含生成 `Card` 所需的英文规则文本、招式、伤害、能量、
illustrator、flavor text 等。不要拿只有名称/稀有度的索引冒充完整来源。

当前 importer 接受一个 card object 数组。每项至少使用以下兼容字段：

```text
ID, Name, Card-Type, Illustrator
Pokemon:
  Flavor-Text, Ability, Ability-Effect, Moves, Move-Energy,
  Move-Damage, Effects
Trainer:
  Description
```

`Card-Type` 的 Trainer 值可为 `Item`、`Tool`、`Supporter`、`Stadium` 等。
数组字段必须保持相同索引对应；空 Ability 可以是 `null`。若新来源字段不同，
先写一个显式、可验证的转换步骤生成该格式，不在 importer 里堆来源特判。

每个 `research.required` 字段都要有 URL 证据：

```json
{
  "field": "set.releaseDate",
  "url": "https://www.pokemon.com/...",
  "note": "Official announcement states the release date"
}
```

同一 URL 可为多个字段各写一条证据。完成后写入 UTC 时间：

```json
{
  "status": "ready",
  "research": {
    "verifiedAt": "2026-07-24T08:00:00.000Z"
  }
}
```

## 数量公式

```text
card objects = total × card image languages × 2 sizes
booster objects = boosters × pack image languages × 2 files
total objects = card objects + booster objects
```

`prepare-r2-assets.mjs`、`preflight-r2.mjs` 和 `verify-r2.mjs`
会分别验证本地输出、覆盖风险和公网结果。任何一个数量不一致都不能上传或宣称完成。
