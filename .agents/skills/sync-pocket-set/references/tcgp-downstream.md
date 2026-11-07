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

- 目标 `locales/card/*.json`：`en/de/es/fr/it/pt/zh-TW`，启用日语/韩语时还包括 `ja/ko`，目标 set key 集完全一致；`pt`
  可映射 R2 `pt-br`，但不得迁移其他旧 set。
- `lib/config/cardRarity.additions.json`：逐卡写真实 rarity code，合并后 key 与英语卡表完全相等。
- `lib/config/sets.ts` 与 `lib/config/packs.ts`：按现有排序加入 set、collection、pack、当前已启用语言的 UI 文案。
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

1. 目标语言卡表各自包含恰好 total 个目标 set key，且全量 card key 集一致。
2. 英语卡表、合并 rarity、entity 和 filter index key 集完全一致。
3. 从目标 pack pool 实际抽五张，全部属于该 set，数量和第五张 rarity contract 正确。
4. set/pack/catalog/collection/card-detail/deck-builder 测试通过。
5. 从 tcgp 根目录运行 `pnpm test`、`pnpm run lint`、`pnpm run type-check`、`pnpm run build`。用独立工作树构建和启动，避免覆盖正在使用的 `dist/`。
6. 用 `pnpm run start` 验证 TanStack Start 的 SSR 动态路由。按 tcgp 仓库 `.agents/skills/add-set-pack-metadata/references/project-contract.md` 的“路由验收”检查本次 set 和每个 pack；构建文件和预热列表均不能证明新 slug 实际可用。

commit/push 分仓授权：cards-database 和 tcgp 分别复核分支、HEAD、远端、staged paths 和测试；
只有用户明确要求对应仓库的 commit/push 才执行，不因一个仓库获批推送另一个。

## 5. 韩语下游契约

只有本次用户明确授权修改 `tcgp` 时执行；API 已有 `/v2/ko` 不构成下游授权。先在目标 checkout 读取 `doc/agent-guides/korean-localization.md`、语言清单和真实生成配置，不复制未合并分支或其他 agent 的 WIP。仅获文档授权时只维护契约，不写 tcgp 的代码、卡表、图片或生成数据。

- API `ko` → tcgp `ko`；九份独立卡表含 `ko`，`yue` 仍复用 `zh-TW`。与英语逐卡比较目标 set 的 key、ID、编号、数量和关联身份，不能删掉韩语缺卡制造一致。原生 `/ko/tcgp/` 图片、完整规则和名称分别验证，零英语回退；保留官方 `Pocket`、`ex` 等合法名称成分。
- Set/Booster/Card 专名从精确版本的 `name.ko`、游戏原文和卡面核实；不能把 `attacks[].name.ko` 当作顶层卡名。面向玩家的描述由模型原生写自然韩语，保留占位符 multiset、ID、URL、关联键、规则条件和数值。`ALL_SETS.name`/`pack.set` 留作英文关联键，展示用对应韩语 names。
- 全部已启用语言的 Set/Pack 文案、目录、详情、收藏、构筑器、真实五张抽包、搜索与发现同时验证 `ko`。缺译、错误图片或未部署 API 不能用英语 fallback 或构建成功掩盖。
- **Post 不提供韩语。** 不创建 `ko.mdx` 或 `/ko/post` 入口，韩语 Post hub/详情须真实 404；Set/Pack/Deck/Finder 相关文章、hreflang、sitemap、llms 与反链均排除韩语文章。缺少韩语 Post 是预期状态。TCGP 的全部 18 个 species 仍须有完整 `guides/ko.json`，这是独立玩法内容，不受 Post 豁免影响；新 set 不授权改写这些攻略或每日 Meta。
- 运行 TCGP 当前真实韩语专项测试、metadata 审计与下游检查；在隔离生产预览核对韩语 SSR/客户端、原生图片与入口。缺少实现或测试时列出路径和缺口，不跨越本次写集修复。记录 API/卡名/规则/图片与下游各自结果，分开报告本地、CI、部署及两仓发布状态。
