# tcgp 下游交付契约

仅当用户明确把 sibling `tcgp` 纳入范围时读取。目标是让一个新 set 同时进入目录、抽卡、
收藏、卡牌详情和 deck builder；竞技 Deck 快照仍由独立自动化维护。

## 1. 输入绑定

- 先确认 API 数据对应本次 cards-database HEAD，并记录 canonical 数据 SHA-256。
- 刷新脚本接受 `--api-base` 时，持久化 repository、HEAD 和规范化 cards digest；不得保存
  localhost、credential、query 或 fragment。
- 用户给出的 expected hash 必须与实际响应计算值比较；不能把参数原样写成“已验证 hash”。
- API 重复 card ID、集合数量不等于 total 或 locale key 集不一致时停止。

## 2. 必须同步的表面

- 七个 `locales/card/*.json`：`en/de/es/fr/it/pt/zh-TW`，目标 set key 集完全一致；`pt`
  可映射 R2 `pt-br`，但不得迁移其他旧 set。
- `lib/config/cardRarity.additions.json`：逐卡写真实 rarity code，合并后 key 与英语卡表完全相等。
- `lib/config/sets.ts` 与 `lib/config/packs.ts`：按现有排序加入 set、collection、pack、八语 UI 文案。
- `data/decks/card-entities.json` 与 `card-filter-index.json`：与英语卡表保持同一完整 key 集；
  filter index 绑定 cards-database repository、HEAD 与响应 digest。
- QR 只在实际使用的 entity mapping digest 变化时重生成；完整实体表新增但 QR 子集不变时，只更新
  可复算的 mapping provenance，不做无意义远端写入。

不要因新增 set 修改 `latest/history/registry/source-health/name-components` 等竞技 Deck 生命周期文件。

## 3. 静态素材质量

至少提供 home hero、set icon 和 pack image，并复用官方或已固定、可归因的一手素材。

- home hero 优先原生横向 16:9、至少 1280×720；禁止把低清竖图放大到 1920×1080。
- 转 WebP 时不放大，保留足够质量；检查文件 magic、原生尺寸、字节数和 SHA-256。
- 若官方文章图片不可下载，继续验证官方 press asset 或官方 trailer thumbnail；搜索摘要中的
  404 URL 不是有效来源。
- 用 Playwright 在实际 set route 验证至少 1440×1000 和 390×844：主体不能被裁掉，不能有
  白边/模糊放大，标题、描述、badge 和 CTA 必须可读。
- 截图写临时目录或既有测试输出目录，不把一次性截图提交进仓库。

## 4. 强制断言

1. 七语卡表各自包含恰好 total 个目标 set key，且全量 card key 集一致。
2. 英语卡表、合并 rarity、entity 和 filter index key 集完全一致。
3. 从目标 pack pool 实际抽五张，全部属于该 set，数量和第五张 rarity contract 正确。
4. set/pack/catalog/collection/card-detail/deck-builder 测试通过。
5. `pnpm test`、`pnpm type-check`、`pnpm build` 通过，构建产物包含目标 set/pack 路由。

commit/push 分仓授权：cards-database 和 tcgp 分别复核分支、HEAD、远端、staged paths 和测试；
只有用户明确要求对应仓库的 commit/push 才执行，不因一个仓库获批推送另一个。
