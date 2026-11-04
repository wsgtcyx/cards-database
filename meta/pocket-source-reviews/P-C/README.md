# PROMO-C 九语元数据复核（2026-11-04）

本批包含 P-C-001～013。真实卡包 `CP001_0010_00_000` / `vol1` 只含 002～009；001、010～013 保持 `boosters: []`。`officialCount: 0` 对应 master 的空 `baseCardsInExpansion`，与现有 Promo 系列约定一致。系列日期不是所有卡片的可获取日期。

## 来源与决策

- `master.json`：RaenonX 当前 game master；游戏卡 ID、印刷编号、结构属性、稀有度和卡包成员的来源。URL 与 SHA-256 见 `P-C.snapshots.json`。
- `pokeos-cards.json`：PokeOS set 602 的卡名和画师候选。最终文本以对应语言卡图复核。
- 英、法、西、葡、繁中、日、韩的规则候选通过已有 `../C1/{en,fr,es,pt,zh,ja,ko}.dictionary.json` 中稳定攻击/描述 ID 渲染；德、意及渲染失败处按本地化原图补齐。
- 117 张 PokeOS 原生卡图已逐图检查。`P-C.native-review.json` 绑定 URL、原文件 SHA-256、字节数和最终本地化值。能量图标转换为 API `{P}` 等 token；换行可重排。
- 001、010、011、012 的全图版图鉴说明小字不能依赖 OCR。另取得 36 张同规则普通版本原图，逐语转录页脚：B2-049、A4-147、A3b-037、B2-032。master 的完整 `play` 对象相等已断言通过，英文图鉴说明一致也已核对。每个 donor URL/原文件哈希绑定在 native review。
- 004、005 的九语图鉴说明直接按原图补齐。修正 001、010、011、012 多语旧机翻、003 德语 Psyschub、011 德/意「Süße Staffel / Dolce Staffetta」及 007/008 繁中图鉴说明。`P-C.conflict-resolutions.json` 保留候选与采用值。
- `ocr/vision-*.json` 是原图 OCR 辅助记录，不是可直接发布的文本。两个 `rejected-paddle-*` 记录保留已拒绝的幻觉结果；不得将这些候选作为正确来源。

## 审计与复现

`P-C.localization-audit.json`：13 张、9 语言，108 个规则 token 比较通过，无豁免、无问题；审计 SHA-256 绑定 `P-C.reviewed-raw.json`。

`P-C.mechanics-audit.json`：HP、类型、阶段、弱点、撤退、招式能量与伤害、特性数量、卡包成员全部与 master 比对；4 组 flavor donor 的完整 play 对象相等。

执行仓库 importer 时使用本目录 source-config、reviewed-raw、localization-audit。source-config 的 asset origin 是目标存储配置，不是上传或公网验证证明；生成器默认图地址必须由本次统一图片资产流程替换。卡图、包图与 logo 的上传及公网验证由本次发布的资产审计单独记录，不能从本目录的元数据审计推断。

本目录只证明卡片元数据与来源。活动开始日、Premium 商店可获取状态和未确认获取日不属于当前 API Card 数据结构。
