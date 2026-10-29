# C1 Dual Fusion 数据与来源

C1 包含 217 张卡：131 张正式编号卡、86 张秘密卡。197 张 Pokémon 与 20 张 Trainer
对应 144 个机制实体。名称覆盖 en/fr/es/it/de/pt-br/zh-tw/ja/ko；完整本地化规则和原生
卡图覆盖前七种语言，ja/ko 明确使用英语规则与英语图片回退。包装仅采用官方英语素材，
不宣称存在本地化包装。

## 数据契约

- `C1.source-config.json` 是集合、语言及两个 booster 的配置真源。
- `C1.reviewed-raw.json`、`C1.canonical.json`、`C1.localizations.json` 分别保存审定原始字段、
  英语机制及七语本地化。`C1.provenance.json`、`C1.review-bindings.json` 与 `ocr/` 保留逐卡来源。
- 两个卡池 Mega Mewtwo X、Pikachu 各有 113 张，共用 12 张，并集 214 张。
  C1-152、C1-183、C1-185 为奖励卡，不进入普通卡池。
- 双属性始终保留完整数组，包括 Water/Darkness 与 Psychic/Fighting；任一属性筛选均应命中。
- 七语原生卡图为 367×512，未放大低清卡图。R2 共 3042 个对象：217×7×2 个卡图、
  2×1×2 个包装/Logo。原生首页横图 1920×1080，包装约 680×1307，Logo 1000×440。
- 下游须一起更新七语 card JSON、rarity、Set/Pack 配置、entity/filter、八语 llms、静态素材。
  历史卡片及竞技统计保持原值，新统计实体只能增加空页面；QR 仅在其实际使用的映射子集变化时重生成。

## 来源

- [官方发布说明](https://pokemon.gamespress.com/Dual-type-Cards-to-Debut-in-Pokemon-TCG-Pocket-with-new-Dual-Fusion-Ex)：日期、集合事实与双属性机制；官方 press 包装及
  [官方介绍横图](https://www.pokemon.com/us/pokemon-news/pokemon-tcg-pocket-dual-fusion-expansion-coming-soon)用于 UI 素材。
- [RaenonX game master](https://ptcgp.raenonx.cc/api/data/global-master)：printing、机制、画师、稀有度、真实卡包归属；游戏字典提供七语名称及规则候选。
- [PokeOS C1 数据](https://api.pokeos.com/api/tcg/set/cards?id=599)：连续编号和七语真实卡面。其空画师、占位名称、缺失卡池不覆盖游戏真源。
- [DeckGym 固定版本](https://github.com/bcollazo/deckgym-core/blob/7aa4ef04c02844d4f0cf236cb98424ea1eaabb4b/database.json)：独立机制核对和模板参数证据，AGPL-3.0；未复制软件实现。
- PokeAPI flavor CSV 固定版本用于 C1-089/090/094 的同英语、同游戏版本繁中描述复核，见 `C1.flavor-corpus.json`。

各来源的抓取时间、文件大小、SHA-256 和许可边界见 `C1.snapshots.json`。HTTP-only 上游由
响应 hash 固定，没有虚构 Git commit 或数据授权。目录中的原始来源快照为审计旁证，
沿用各自来源的权利和许可，不因存于本仓库而重新授权为 MIT。

217 张卡逐卡七语 OCR、144 个机制代表的二次复核及 19 个不确定字段的裁决均保留。
OCR 是候选；实际 chosen 值、原生图 hash 以及繁中细字、Rika 图标、画师和标点纠正分别见
`C1.native-review.json`、`C1.conflict-resolutions.json`、`C1.name-typography-review.json`。
拒绝的上游包括实际返回韩语的 de/it 路由和不含 C1 的旧仓库版本。

## 可复现导入

先审核当前 raw；`--reviewed-cards` 将其与 canonical/七语本地化核对并绑定 hash。
导入器拒绝旧审计、越界名称、已有目标和软链接；整套文件先在同文件系统暂存，
同步写入或发布失败只清理本次创建的产物，不覆盖已有集合。

```sh
node .agents/skills/merge-pocket-card-sources/scripts/audit-pocket-localizations.mjs \
  --canonical meta/pocket-source-reviews/C1/C1.canonical.json \
  --localizations meta/pocket-source-reviews/C1/C1.localizations.json \
  --config meta/pocket-source-reviews/C1/C1.source-config.json \
  --reviewed-cards meta/pocket-source-reviews/C1/C1.reviewed-raw.json \
  --output /tmp/C1.localization-audit.json

node scripts/import-reviewed-pocket-set.mjs \
  --config meta/pocket-source-reviews/C1/C1.source-config.json \
  --cards meta/pocket-source-reviews/C1/C1.reviewed-raw.json \
  --audit /tmp/C1.localization-audit.json \
  --output /tmp/C1-rendered
```

`/tmp/C1-rendered` 必须是无既有 C1 目标的新输出位置。不得向已有集合强制覆盖。
重新审核 metadata 后重新生成 API，再刷新下游 filter 的实际响应 digest；提交后的 API commit
作为发布来源，历史基线 HEAD 只用于比较，不能声称旧 HEAD 含有新卡。

## 资产与验证入口

`C1.image-evidence.json` 绑定 1519 张原生卡图，`C1.ui-assets.json` 绑定四项原生 UI 素材。
`C1.r2-objects.json`、碰撞预检、逐对象 receipts 和公开 byte/hash/header 验证构成上传证据。
这些带时间的记录表示该次检查结果，不代替后续发布验证。

API：`pnpm validate`、`pnpm test`、九语实际编译和 C1 集合审计。
下游：`pnpm test`、`pnpm lint`、`pnpm type-check`、隔离生产构建；运行服务后执行
`node scripts/c1-set-smoke.mjs <local-base-url>`，验证集合→所选卡包→五张抽卡入口及双属性详情。
多卡包集合的主按钮先定位集合内卡包列表，不能悄悄进入全站随机池。

发布应先更新 API，再更新 tcgp；PR 和本地联调不表示已部署。旧阶段的临时 UI 截图、运行日志
和“未提交”状态报告保留在开发工作树中，不作为此 PR 的当前验证声明。
