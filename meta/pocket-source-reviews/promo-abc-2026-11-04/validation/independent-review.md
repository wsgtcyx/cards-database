# Promo A/B/C 独立审查记录

审查日期：2026-11-04。审查人：source_audit 子 agent。范围为当前两隔离工作树及临时 R2 上传脚本。除本临时报告外未修改仓库或执行上传。

## 代码审查结论

发现两处版本化图片路径回归，主 agent 已修复，独立复验通过：

- P1：tcgp `lib/getCards.client.ts:77` 原先严格比较无版本路径，导致日语 Promo 抽卡及随机卡片操作抛错。现允许正确卡片原生路径后的 16 位十六进制版本，仍拒绝错误卡号、locale、非法后缀及 query。
- P2：tcgp `scripts/sync-card-locales.mjs:481` 同样拒绝日语版本化图片，阻断正常同步。现已修复并验证。

其余所审范围未发现新阻塞：API native image 版本路径与身份守卫；关系修复脚本对非进化目标标题差异的容许、对歧义进化目标的拒绝；统一 Promo pack 的 drawCount 从配置到首页抽卡调用；单卡 CardStack、Reveal、Summary、分享布局；旧分卷 308 aliases 的语言/query/hash 保留；availability 的活动开始日、每周任务、未知日期区分；下游索引跨语言身份和图片路径。

已执行验证：

- Bun 1.3.1 `bun test server/compiler/utils/promoImages.test.ts`：2/2 通过。全局旧 Bun 1.0.6 的 rejects 用法报错属运行环境问题，不是提交代码缺陷。
- `node --test scripts/fix-pocket-card-relations.test.mjs`：3/3 通过。
- `node --test scripts/card-client-locales.test.mjs scripts/sync-card-locales.test.mjs`：18/18 通过。
- `node --experimental-strip-types --test scripts/promo-gacha.test.mjs`：7/7 通过。
- `node --test scripts/card-catalog.test.mjs scripts/deck-builder-filter-index.test.mjs scripts/gacha-share-export.test.mjs`：29/29 通过。
- 直接核验 8 个下游 card locale × 233 张，共 1864 条记录：id、localId、set、统一 pack、原生图片 URL、每卡跨 locale 共用 version、QR entity、filter index 均符合契约。

范围限制：这是当前工作树代码与本地测试审查，不代替真实浏览器动画、R2 公网图像或最终线上部署回测。

## R2 上传脚本审查

审查对象：`/private/tmp/promo-abc-assets-20261104/upload-versioned.mjs`、`r2-manifest.json`、`r2-preflight.json`，及其调用的 `inspectRemoteObject`。

独立本地逐项验证通过：4222 个对象，4222 个唯一 key；233 张卡 × 9 语言 × high/low = 4194 个卡图，另 28 个 pack/logo。每个文件的 byte count、SHA-256、RIFF/WEBP 标识均与 manifest 一致。每个卡图 key 的 locale/set/number/size 与字段一致，sourceSha256 与 2097 张图片身份审查绑定一致。重新计算每张卡 18 个 payload 拼接 SHA-256，均匹配其 16 位版本目录；pack/logo 的版本目录均匹配输出哈希前缀。绿色 preflight 与当前 manifest SHA-256 绑定一致。

安全与范围判断：key 正则不允许旧无版本 key、绝对路径、路径穿越或 shell 内容；spawn 使用 argv 且未开启 shell，无当前参数注入路径。非 404 或不匹配远端对象被拒绝，不会自动覆盖旧对象。PUT 前做两次检查；Wrangler 无 conditional-create，跨机器在检查和 PUT 之间的竞争窗口仍存在，脚本已明确记录此限制。404 必须由实际响应产生，不把网络错误当作不存在。

初版发现及复审状态（以下两项已由主 agent 修复，最新版只读复审关闭；行号指初版）：

1. P2，line 22，已关闭：初版 PUT 非零后盲重试。最新版每次尝试 PUT 前执行 inspectRemoteObject；已存在且 hash 匹配则 reused，不匹配则停止。不会因客户端失败重试而直接再次 PUT 已出现的对象。
2. P2，line 25/16，已关闭：初版收据直接写最终文件可能因中断留下半 JSON。最新版先写 .tmp，再 renameSync 到最终收据。上传从本次修复后启动，未依赖旧版产生的半 JSON 收据。

成功命令收据目前明确不等于公网验证；脚本最终 `publicVerificationPending: true` 是准确的。无论 checkpoint 恢复还是新上传，都必须在发布前进行全量公网内容与缓存头校验。此报告不宣称 R2 已上传或公网验证成功。

## Deck-name catalog 最小修复方案评价

只读检查 `scripts/fetch-deck-meta.mjs:127`：当前逐印刷卡逐字符要求 deck-name component 相同，比领域约束更强。实际意大利语 C1-100/162/180/211 为 `Mega-Dragonite-ex`，P-C-013 为 `Mega Dragonite-ex`。英文组名均为 `Mega Dragonite ex`。

赞同按英文名称聚合每个 locale 的已核印刷名称集合，要求 deck-name component 精确匹配集合中至少一个名称。不要去标点宽松匹配，也不要为通过测试修改正确原图名称。英语 component 无任何对应卡、locale 无候选、component 不属于任何本地印刷名均应失败。建议测试覆盖合法双印刷名差异、未见于任何印刷的错误组件、缺失 locale；既有 Gyarados 德语错误用例必须继续失败。该方案尚未在本审查中执行或验证实现。
