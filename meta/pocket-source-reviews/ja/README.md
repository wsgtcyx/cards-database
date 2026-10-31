# 日语数据来源与审定记录

这批变更新增日语字段。原有语言字段保持基线值。数据基线为 `6f9822023054840981e5595f736616a48ee4a38c`。

## 覆盖与来源

- 4,561 张卡：原生卡名、卡图、招式、特性与效果。日语来自固定游戏字典及其数值模板，不从英文翻译。
- 1,862 个进化前名称：通过游戏 evolution.prev 逐项核对，所有前置印刷版本均必须得到同一个日语角色名。
- 3,376 个已有英文描述字段：固定 PokeAPI 同物种、同游戏版本的英日引文，986 个官方日本图鉴页面和 449 个日本 Wiki 历史游戏引文交叉核对。涉及地区形态、Mega 形态与表记变体时逐段绑定。缺少可读卡面时，只允许相同物种、完全相同英文段落的已审印刷版本传播。没有按同物种任意替换描述。
- 26 个现有系列集合及已有 booster 名称：游戏 Expansion / Pack 字典。目录标识 PROMO-A、PROMO-B 保留原标识。
- 4,110 张不同原图全部为真实日语卡面，原生尺寸 367×512。完整 Vision OCR 与描述区域 OCR 的结果随来源包保存。裁切放大仅供 OCR，不作为交付图片。
- 107 个低置信度代表段人工审定，包含 SP1 的 19 张原图。三张 Mew 特殊负编号的正确绑定见 `../SP1/SP1.review-bindings.json`，不得使用旧批量下载脚本的顺序猜测。

`flavor-bindings.json` 记录逐卡所选文本、来源、匹配方式、光学相似度与人工审定原因。`all-image-manifest.json` 保留原始卡图 URL、响应字节 SHA-256 与卡号绑定。官方图鉴与 Wiki 引文保留完整页面 URL、原响应 SHA-256；抽取文本不声称等于原 HTML 字节。PokeAPI CSV 使用固定提交 `a81dfc349390e4b53fd92e579c588b1204bbb6af`，其 BSD-3-Clause 文本见 `sources/pokeapi-LICENSE.txt`。游戏原文、卡图及 logo 的权利仍属于各自权利人；来源标注不是版权许可。

部分 Mega ex 卡面不印描述，仅印「メガシンカexルール」。这些卡已有的英文 description 属于游戏图鉴补充元数据；日语选择对应的原生游戏图鉴段落，并在人工审定记录中明确说明。不得将这类字段描述为卡面逐字转录。

## 原三阶段可重放变更

完整变更为 20,633 个 JA 字段：第一阶段 17,245 个、第二阶段 3,380 个、第三阶段 8 个。第三阶段的来源与独立基线见下文。

`initial.decisions.json` 包含 17,245 个字段，`initial.write.json` 为写入回执。`descriptions.decisions.json` 包含 3,380 个字段（3,376 个描述和 4 个 booster 资产地址），通过前驱 SHA-256 固定 initial 决策。回执为 `descriptions.write.json`。每条决策都绑定实体、字段、JA、原英文和原日语 CAS 值、来源文件 SHA-256 与 locator。

能量符号差异默认拒绝。27 个例外逐条绑定实际英文与原生日语的 token multiset、实体与字段，附卡面/字典依据。没有全局忽略 token 差异。部分旧英文规则缺少限制或数值，日语保留实际原生规则；本批不改写其他语言。

在原始基线工作树按顺序重放：

```sh
node scripts/apply-reviewed-pocket-localizations.mjs --decisions meta/pocket-source-reviews/ja/initial.decisions.json --write --base-ref 6f9822023054840981e5595f736616a48ee4a38c
node scripts/apply-reviewed-pocket-localizations.mjs --decisions meta/pocket-source-reviews/ja/descriptions.decisions.json --write --base-ref 6f9822023054840981e5595f736616a48ee4a38c
node scripts/apply-reviewed-pocket-localizations.mjs --decisions meta/pocket-source-reviews/ja/set-logos.decisions.json --write --base-ref 6ac7d56b41de6c67ca4b36582bdfb1fa8682ba63
node scripts/audit-pocket-localization-metadata.mjs --locales ja --output meta/pocket-source-reviews/ja/metadata-audit.json
```

## 原始本地资产包记录（上传前）

前两阶段的固定证据 `sources/prepared-assets-manifest.json` 包含 9,126 个本地 WebP 对象：4,561 张卡的 high/low 共 9,122 个，以及 B4/B4a 的日语 logo 和已验证无文字的 pack artwork 共 4 个。第三阶段追加 4 个 logo；完整包共 9,130 个对象、364,900,922 bytes。high 保留原生尺寸，low 使用已有 prepare-r2-assets 流程压到宽 245，不放大。前四个 booster 资源的来源 URL、原图 SHA-256、输出 SHA-256、尺寸与视觉审查见 `booster-evidence.json`。

以下为上传前的历史记录；当前上传结果见本文末尾“R2实际上传证据”。当时manifest 的 `publicationStatus` 为 `prepared-locally-not-uploaded`。源文件已写入最终 JA 对象地址，以供本地真实联调；本记录不证明 R2 已存在这些对象，也不证明生产环境已上线。R2 上传与部署必须由后续获授权发布步骤单独完成。


## CI 回归修复：Set.logo

CI 在后续完整数据上发现，`getSetPictures` 优先取顶层 `Set.logo`，不会使用已新增的 `booster.logo.ja`，因此缺失日语顶层值会回退英文。本次阶段三以提交 `6ac7d56b41de6c67ca4b36582bdfb1fa8682ba63` 为新基线，通过 `set-logos.decisions.json` / `set-logos.write.json` 写入 8 个 JA 字段：4 个现有 Set.logo 和 4 个原先指向英文图的 booster.logo。B4 本身没有顶层 logo 对象，保持现有结构；B4a 复用已审日语 logo 的去扩展名图片基址。

B4b、C1、SP1 新下载并实际查看原生日本扩展包 logo，保留原图于 `sources/set-logos/`。图片上的文字分别为「ハイクラスパック MEGA」「デュアルフュージョン」「はじまりのパートナー」。无放大或以 pack 卡包图冒充 logo。新增 4 个 WebP，对应增量 manifest `sources/set-logos-assets-manifest.json`；本地完整包现在为 9,130 个对象、其中 booster 资产 8 个。先前 manifest 是前两阶段的不可变证据，后续上传应合并本增量或使用本地完整包 manifest。

审计现在检查已存在的顶层 Set.logo，并拒绝其 JA 值直接复用英文地址；不存在 logo 的集合不因此报缺失。现有通用 PROMO-B 标识图不属于需要译写的扩展包日语文字。更新后 JA 审计覆盖 22,750 个对象，缺失、无效值和结构错误均为 0。默认六语审计会同时揭露 C1/SP1 顶层 logo 的 12 个既有缺失；本次不改写原有语言。

`set-logos-regression.json` 记录 Bun 1.4.4 的 12 pass / 1 fail 复现，以及修复后 Bun 1.3.0、1.4.4 均 13 pass / 0 fail。SDK logo 测试扩展到四个现有顶层 logo 的集合，共 309 个断言。四个数据文件删除 JA 叶字段后均与阶段三基线 AST 等价，原有语言保持不变。


## 全量复审与 R2 发布（2026-10-31）

本轮追加148处日语字段修正（146个规则、1个卡包名、1个系列名）。复审发现旧审计遗漏了单数数字、卡包模板和API的日语枚举展示。
本次已修复，不把原审计通过当作语义无误的证据：

- `reaudit.decisions.json` / `reaudit.write.json`：以 `480ae98de02f64219e80b44bb0ede0ea1e04a128` 为基线，CAS 修正 146 个规则字段与 PROMO-B 第13弾包名。规则共恢复 149 处明确的数字 `1`；完整差异、卡面哈希、OCR与人工复核边界见 `rules-reaudit-proof.json`。旧 `sources/rules-resolved.json` 等证据保持不变，新版绑定在 `sources/reaudit-rules.json`、`sources/reaudit-reviewed-rules.json`。
- `series-name.decisions.json` / `series-name.write.json`：系列展示名采用官方日语站使用的 `Pokémon Trading Card Game Pocket（ポケポケ）`。包名依据同一字典的原生日语描述与官方公告第86号，不保留 `Mst:` 标签。
- `meta/translations/ja.json`：类型、分类、进化阶段、特性类型、训练家分类、能量与稀有度展示使用日语。`Anomaly` 没有可证实的官方日语名称，使用明确的说明性标签「特殊カード（通常のレアリティ区分外）」，不称其为官方稀有度名称。筛选 `value`、ID、关系 `canonicalName` 保持机器契约。
- 缺日语名称/规则/图片/字典引用、未展开的任意游戏模板与已知缺数字量词均失败。新导入必须同时启用完整日语名称与规则；不静默丢卡、不复制英文占位。原生拉丁专名 `CHECK`、`GUARD`、`POWER`、`DDラリアット`、`KO`、`HP`、`ex` 保留原表记。
- 复审的来源依据是稳定卡ID、原生游戏字典与数值模板、真实卡图/OCR，低置信度人工核对。并未逐字人工阅读全部4,561张卡面；不得将自动全量校验描述为全量人工审读。

`reaudit.metadata-audit.json` 覆盖1系列、26集合、4,561卡、22,750个本地化对象，缺译、无效值和结构错误均为0。
`api-reaudit-verification.json` 记录本次真实 HTTP 全量读回与验证结果，不代表生产API已部署。

### R2 实际上传证据

本次已获授权并完成上传：`r2-publication.summary.json` 记录9,130个对象全部新上传，R2源站与公网各9,130次完整字节/SHA-256/Content-Type/immutable缓存头校验，失败0。包括9,122个卡图和8个booster/logo对象，总字节364,900,922。high保持原生367×512，low为245×342，无放大。使用原子 `If-None-Match: *` 条件写入，没有覆盖已有不同内容。

- `sources/published-assets-manifest.json.gz`：完整发布对象与来源/尺寸/哈希清单；未压缩内容SHA-256见summary中的`manifestSha256`。
- `r2-publication.preflight.json.gz`：9,130个目标的上传前碰撞检查。
- `r2-publication.receipts.jsonl.gz`：逐对象上传回执，不包含凭据。
- `r2-publication.verify.json.gz`：逐对象R2源站和公网读回证据。

这些 `.gz` 文件可用 `gzip -dc <file>` 只读检查。各压缩文件SHA-256由summary绑定。原始 prepared manifest保留上传前状态作为历史证据，不应覆盖以伪造原始记录。当前状态以本节发布证据为准。

卡图已在R2可用；API与tcgp的本轮实现仍由对应PR交付，上传图片不等于API/网站已经部署。
