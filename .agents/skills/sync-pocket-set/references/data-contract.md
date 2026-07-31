# Pokémon TCG Pocket 数据约定

## 路径

```text
data/Pokémon TCG Pocket/<Set Name>.ts
data/Pokémon TCG Pocket/<Set Name>/<NNN>.ts
data-asia/Pokémon TCG Pocket/<Set Name>/<NNN>.ts
```

Set 文件定义 `id`、多语言 `name`、`cardCount.official`、`boosters` 和 `releaseDate`。Card 文件通过 `set: Set` 关联集合。

## Card image

源数据保存不带尺寸和扩展名的多语言基址：

```ts
image?: Languages
```

API 输出 `image?: string`。compiler 解析顺序：

1. `card.image[requestedLanguage]`；
2. `card.image.en`；
3. TCGdex 远端图片索引；
4. `undefined`。

消费方在基址后追加 `/high.webp` 或 `/low.webp`。

R2 object key：

```text
<language>/tcgp/<set-id>/<NNN>/<size>.webp
```

Booster 图片固定为：

```text
<language>/tcgp/<set-id>/boosters/<booster-id>/logo.webp
<language>/tcgp/<set-id>/boosters/<booster-id>/artwork_front.webp
```

Set metadata 中保存 booster 图片的完整 WebP URL；Card metadata 中只保存
不含 `/high.webp`、`/low.webp` 的图片基址。

## Booster

`Set.boosters` 表示集合有哪些可开卡包：

```ts
boosters: {
    paldea: {
        name: { en: "Paldea", ... }
    }
}
```

Set API 将其编译为：

```json
{
  "id": "boo_B2a-paldea",
  "name": "Paldea"
}
```

`Card.boosters` 只用于区分多 booster set 中的掉落来源：

```ts
boosters: ["mewtwo"]
boosters: ["charizard", "mewtwo", "pikachu"]
boosters: [] // 不从该 set 的普通 booster 掉落
```

仓库既有规则：

- 单包：Mythical Island、Triumphant Light、Shining Revelry、Eevee Grove、Crimson Blaze、Fantastical Parade 等卡牌不写 `boosters`；
- 多包：Genetic Apex、Space-Time Smackdown、Celestial Guardians 等每张卡显式写 `boosters`，但不从普通包掉落的奖励卡可以为空数组。

因此 `Card.boosters === undefined` 在单包集合中表示“属于该 set 的唯一 booster”，不是数据缺失。

## 下游 gacha rarity

上游每张 Card 的 `rarity` 是 gacha 的必需数据，不只是卡片详情展示字段。用户明确
要求同步下游时，必须同时把目标 set 的全部 rarity 写入下游
`lib/config/cardRarity.additions.json`。运行时合并历史基础索引与该增量索引。

固定映射：

```text
One/Two/Three/Four Diamond -> d1/d2/d3/d4
One/Two/Three Star         -> s1/s2/s3
One/Two Shiny              -> h1/h2
Crown                      -> cr
None (Promo)               -> pr
```

`P-*` 是 set ID 命名，不是逐卡 rarity。Promo set 内也可能存在 Diamond、Star 等正常
rarity；必须逐卡使用 canonical rarity，不能按 set 前缀统一写成 `pr`。

下游全卡覆盖测试必须证明：卡片 key 与合并后的 rarity key 完全一致，且每个 value
属于上述 code 集。不能仅为当前 set 写一个 set-specific 断言，因为那无法阻止下一
个 set 再次漏配。

## 数量

- `cardCount.official`：正式编号范围，不含 secret cards；
- total：目录中实际卡牌数，包括 secret cards；
- 图片与逐卡 metadata 必须按 total 覆盖。
- 图片对象总数还要包含每个 booster、每个可用语言的 logo 与 artwork。

例如集合有 93 张正式卡和 38 张 secret cards 时：

```text
official = 93
total = 131
card files = 001..131
image bases = 131
WebP objects for 2 languages × 2 sizes = 524
```
