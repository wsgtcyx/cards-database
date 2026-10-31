# Pocket 韩语来源与发布证据

本批以 `22324fc35f4bb5f7c17a2de820ca9b5e8787cf17` 为基线，覆盖仓库当前 4,561 张卡、26 个卡集、58 个卡包。范围只包含 API 仓库；不导入来源站新增而仓库尚未收录的卡集或卡片。

韩语名称、进化来源、攻击、特性、训练家效果和图鉴说明使用韩语游戏文本。韩语编译、导入与审计拒绝缺失字段、未解析模板及英文回退。JSON 键、机器值、canonicalName、插画师署名、URL 和游戏原本采用的拉丁字符保留。`GUARD [가드]` 等原文标题保留游戏写法。

## 来源与裁定

- RaenonX 的卡片主数据、实际韩语页面字典和原生韩语卡面是主要依据。`sources/master.json`、`ko-messages.json`、`card-bindings.json` 和 `all-image-manifest.json` 固定卡片身份与原始字节哈希。SP1 三张特殊 Mew 使用逐张核对的游戏 ID。
- [Centro Pokémon 韩语游戏导出](https://tcgpocket.centropkmn.com/ko_KR) 提供独立交叉验证。`sources/centro-details.json.gz` 保存 4,558 张匹配卡片的原始 JSON 字符串，解压后每条 `json` 的 UTF-8 字节可按 `centro-manifest.json` 复核。额外卡片不导入。
- 10,101 个规则字段经过交叉比较。52 条差异全部在 `cross-source-adjudication.json` 裁定：49 条为韩语助词、龙属性文字与能量标记、特性简称的来源表达差异；3 条为次来源未收录的特殊 Mew。未解决项为 0。
- 图鉴说明共 3,376 条：3,373 条来自韩语游戏导出，3 条特殊 Mew 按实际韩语卡面逐张抄录；不使用英文说明或机器翻译填空。
- 原生卡面另证实三个旧英文规则绑定有误。本批仅修正韩语：B2a-063 弃置格斗能量 `{F}`；P-B-085 追加 20 伤害；P-B-086 后退能量减少 2。`sources/reviewed-rules.json` 保存逐卡证据。
- 韩语名称按真实卡面保留地区、形态、所有者之间的空格，例如 `알로라 식스테일`。`sources/rules-resolved-spaced.json` 是最终空格规范化候选；原始 `rules-resolved.json` 仍是 core 阶段的不可变证据。
- [韩国官方公告](https://pokemonkorea.co.kr/pokemon_tcg_pocket/menu492?mode=view&number=4377) 支持品牌 `포켓몬 카드 게임 Pocket` 和特殊包 `첫 파트너` 等用语；`sources/official-news-4378.html` 保存本批查阅的另一篇官方公告。韩语助词按词尾收音选择，并处理 `ㄹ` 后用 `로` 的规则；参见[国立国语院说明](https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&pageIndex=1&qna_seq=306149)。

内部稀有度 `Anomaly` 保持机器值。SP1-028～030 的显示标签 `특수 카드(일반 레어도 분류 외)` 经用户明确批准，是说明性标签，**不是官方稀有度名称**。

## 卡包与图片

用户批准补齐 A1a、A2a、A2b、A3a、A3b、B1、B1a 缺失的 9 个共享卡包定义，使总数达到 58。新增 ID 为 `mythical-island`、`triumphant-light`、`shining-revelry`、`extradimensional-crisis`、`eevee-grove`、`mega-blaziken`、`mega-gyarados`、`mega-altaria`、`crimson-blaze`。7 个卡集的 937 张卡包归属经两份来源核对；B1 的 331 张卡显式写入卡包，单包卡集沿用既有推断。名称同时保留来源提供的其他语言。搜索选项包括计数为 0 的已定义卡包。

图片共 9,290 个 WebP：4,561 张卡各有 high/low 两档（9,122 个），26 个卡集 logo、26 个通用符号，以及 58 个卡包的 logo 和实际包装正面（168 个）。高分辨率保留原生尺寸，低分辨率仅缩小；不放大、不用纹理图冒充完整包装。

- 4,110 张独立原始韩语卡面均下载并解码验证，完整 OCR 均检测到韩文且无 OCR 错误。`sources/card-image-ocr.json.gz` 保存 OCR 记录与来源哈希。这是自动语言检查，不等同于人工逐张校读全部卡面。
- 卡集与卡包 logo 来自韩语游戏资源。32 个普通包使用实际游戏 PackIcon 的既有裁切规范；23 个 Promo 包使用固定 Git 提交中的原生韩语包装；剩余 3 个 Promo-B 包为通用包装。英文 `Vol.` 人工覆盖图已排除。符号使用通用原生资源。
- `sources/pack-assets-manifest.json` 逐项固定来源、尺寸、处理方式和输出哈希。原始包装来源由 `pack-source-manifest.json`、`pack-icon-manifest.json`、`extras-source-manifest.json` 记录。
- R2 使用条件创建。28 个原路径存在不同字节的对象，因此保留旧对象并使用内容哈希新路径；`asset-paths.write.json` 记录路径变更。韩语 URL 只使用 `/ko/tcgp/`。
- `card.summary.json`、`pack.summary.json` 与对应的压缩 `receipts/verify` JSONL 证明 9,290 个对象已逐个读取 R2 和公开域名，并核对完整字节、SHA256、WebP 类型及 immutable 缓存头。`sources/card-manifest.json` 的 `publicationStatus` 表示准备时状态；实际上传状态以发布回执为准。

## 应用与验证

`names` → `core` → `structure` → `spacing` → `asset-paths` 是应用顺序。字段决策、dry-run/write 报告及文件前后哈希均保留。来源清单位于 `source-inventory.json`，原始 core 来源不覆写。

本地验证使用项目现有命令：`npm test`、根目录 TypeScript 校验、server TypeScript 校验、`bun test compiler/utils/pocketB4Regression.test.ts`、九种语言完整编译、Bruno HTTP 集合、`node scripts/audit-pocket-localization-metadata.mjs --locales ko`。`non-ko-guard.json` 对全部数据变更执行 AST 比较：韩语之外仅允许上述新增卡包定义和 B1 卡包归属变化。

完整 HTTP 验证读取全部 4,561 张韩语卡片详情及关系、26 个卡集、系列、58 个包筛选、46 页搜索、韩英机器值一致性，以及韩语 400/404。500 错误使用回归测试验证韩语错误处理，不在生产注入故障。零关联卡片允许空关联结果；所有实际返回关联的名称、分类、图片及卡集名均与韩语编译数据比对。

完成编译并启动 API 后，可运行 `node meta/pocket-source-reviews/ko/verify-http.mjs http://127.0.0.1:3000 /tmp/ko-http.json` 重做全量 HTTP 验证。验证线上时将第一个参数替换成线上 API 域名，并确保本地编译输入与部署提交一致。
