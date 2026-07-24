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

## 数量

- `cardCount.official`：正式编号范围，不含 secret cards；
- total：目录中实际卡牌数，包括 secret cards；
- 图片与逐卡 metadata 必须按 total 覆盖。

例如集合有 93 张正式卡和 38 张 secret cards 时：

```text
official = 93
total = 131
card files = 001..131
image bases = 131
WebP objects for 2 languages × 2 sizes = 524
```
