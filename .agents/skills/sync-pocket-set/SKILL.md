---
name: sync-pocket-set
description: Sync and complete a specific Pokémon TCG Pocket set in this cards-database fork. Use when importing upstream set commits, filling multilingual card data, sourcing and hosting missing card images, adding per-card image metadata, deciding booster assignments, validating a Pocket set, or publishing the resulting scoped changes.
---

# Sync Pocket Set

在仓库根目录执行。以“目标集合的数据、图片和 API 输出完整且不破坏下游”为完成标准。

## 1. 建立范围

先读取最近的 `AGENTS.md` 并执行：

```bash
git status -sb
git remote -v
```

明确并记录：

- set ID、英文名、发布日期；
- official card count 与 total card count；
- booster ID 列表；
- 需要同步的上游 commits；
- 目标语言；
- 图片来源、R2 bucket、公开域名；
- 用户是否要求 commit/push。

保护已有工作树。目标、实际修改路径、staged paths 必须一致。未经明确要求，不修改下游应用。

## 2. 同步上游

先 fetch 上游，再只查影响目标 Pocket set 的 commits：

```bash
git fetch upstream
git log --oneline --name-only HEAD..upstream/master -- \
  'data/Pokémon TCG Pocket*' 'data-asia/Pokémon TCG Pocket*'
```

逐个检查 commit diff，按依赖顺序 cherry-pick。不要 merge 整个上游，也不要把无关 set 带入。

## 3. 补齐集合与卡牌文本

保持现有 TypeScript schema、字段顺序、数值和英文原文。目标 Pocket 本地化通常包括：

```text
fr, es, it, de, pt-br, zh-tw
```

联网核对 Pokémon、Trainer、Item、Ability、Attack、Set 和 Booster 的官方专名。优先 Pokémon 官方页面或游戏内一手数据；再用高质量卡表交叉验证。区分已验证翻译与推断，不把英文占位伪装成本地化。

检查整个 set 的：

- set/booster 名称；
- card name、description、evolveFrom；
- attack/ability/item/effect；
- Trainer 和 Energy 相关字段。

若当前环境提供 `add-pocket-translations`，同时遵循该 Skill 的术语与验证规则。

## 4. 判断 boosters

读取 [references/data-contract.md](references/data-contract.md) 的 booster 约定。

- Set 级始终声明真实 booster。
- 单 booster set：卡牌不重复写 `boosters`。
- 多 booster set：每张卡按真实获取方式显式写 `boosters`；公共卡可包含多个 ID，不从普通包掉落的卡可写空数组。

不要因为 set API 返回一个 booster，就给单包集合的所有卡机械添加相同字段。若产品要求单包卡牌也显式返回 booster，应做适用于所有单包集合的统一编译策略，不做目标 set 特判。

## 5. 补齐图片

先检查 TCGdex 图片索引是否已有目标 set。缺失时联网寻找完整来源，并核对：

- 图片数等于 total card count；
- 文件编号与卡牌 local ID 一一对应；
- 可用语言；
- 来源声明与使用边界。

不要把 GitHub Raw 当生产 CDN。需要自托管时：

1. 先确认用户授权外部写入和 Cloudflare 凭据；
2. 转为 WebP，不放大源图；
3. 生成 `high.webp` 与 `low.webp`；
4. 上传到既有 `game` R2 bucket；
5. 使用不可变缓存头。

项目 R2 key：

```text
<image-lang>/tcgp/<set-id>/<card-id>/high.webp
<image-lang>/tcgp/<set-id>/<card-id>/low.webp
```

公开基址：

```text
https://game.pokemontcgpocket.app/<image-lang>/tcgp/<set-id>/<card-id>
```

推荐转换参数：

- high：保留源尺寸，WebP quality 90；
- low：宽 245px、保持比例、不放大，WebP quality 82；
- `Content-Type: image/webp`；
- `Cache-Control: public, max-age=31536000, immutable`。

上传前抽查目标 key 是否已存在，避免未知覆盖。上传后核对对象数、零字节文件、首张/边界/末张的 high/low、响应类型和尺寸。

## 6. 写入逐卡 image

将图片基址写进每张卡的源数据，不含 `/high.webp` 或 `/low.webp`：

```ts
image: {
    en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/001",
    "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/001"
},
```

使用通用 schema：

```ts
image?: Languages
```

编译器优先读取卡牌自身图片，并回退英文：

```ts
const cardPicture = card.image?.[lang] ?? card.image?.en
```

保留原 TCGdex lookup 作为没有逐卡 `image` 时的 fallback。不要在编译器中硬编码某个 set ID 或第三方 Raw URL。

## 7. 验证

先运行只读审计脚本：

```bash
node .agents/skills/sync-pocket-set/scripts/audit-pocket-set.mjs \
  --set-dir 'data/Pokémon TCG Pocket/Paldean Wonders' \
  --set-id B2a \
  --expected-count 131 \
  --name-languages en,fr,es,it,de,pt-br,zh-tw \
  --image-origin https://game.pokemontcgpocket.app \
  --image-languages en,zh-tw \
  --booster-ids paldea
```

再执行：

```bash
git diff --check
```

运行与仓库环境相符的 TypeScript 检查。若没有本仓库 `node_modules`，可使用已存在的 TypeScript 运行时做目标文件检查，但不要为了验证擅自升级依赖。

交付前对抗式检查：

- card files、图片对象和翻译覆盖数是否一致；
- card ID 是否连续且三位补零；
- image language 与 R2 key 是否一致；
- 单包/多包 booster 规则是否正确；
- API 输出是否为 base URL；
- 下游的 `/{high|low}.webp` 契约是否保持；
- 工作树是否只包含目标仓库和目标 set。

## 8. 发布

仅在用户明确要求时 commit/push。显式暂存目标文件，复核 cached diff，再推送当前约定分支。不要使用 `git add -A` 夹带用户改动。

最终报告：

- 上游 commits；
- 翻译语言和覆盖数；
- 图片来源、R2 对象数与公开 URL；
- booster 判断；
- 验证结果；
- commit 与 push 状态。

## 禁止事项

- 不自动修改下游应用；
- 不把单包集合的重复 booster 字段当作必填；
- 不把 set 特判塞进通用 compiler；
- 不覆盖未知 R2 对象；
- 不在未验证图片数量或术语时宣称完成；
- 不在未获授权时 commit、push 或写外部服务。
