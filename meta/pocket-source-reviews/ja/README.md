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

## 两阶段可重放变更

`initial.decisions.json` 包含 17,245 个字段，`initial.write.json` 为写入回执。`descriptions.decisions.json` 包含 3,380 个字段（3,376 个描述和 4 个 booster 资产地址），通过前驱 SHA-256 固定 initial 决策。回执为 `descriptions.write.json`。每条决策都绑定实体、字段、JA、原英文和原日语 CAS 值、来源文件 SHA-256 与 locator。

能量符号差异默认拒绝。27 个例外逐条绑定实际英文与原生日语的 token multiset、实体与字段，附卡面/字典依据。没有全局忽略 token 差异。部分旧英文规则缺少限制或数值，日语保留实际原生规则；本批不改写其他语言。

在原始基线工作树按顺序重放：

```sh
node scripts/apply-reviewed-pocket-localizations.mjs --decisions meta/pocket-source-reviews/ja/initial.decisions.json --write --base-ref 6f9822023054840981e5595f736616a48ee4a38c
node scripts/apply-reviewed-pocket-localizations.mjs --decisions meta/pocket-source-reviews/ja/descriptions.decisions.json --write --base-ref 6f9822023054840981e5595f736616a48ee4a38c
node scripts/audit-pocket-localization-metadata.mjs --locales ja --output meta/pocket-source-reviews/ja/metadata-audit.json
```

## 本地资产包与发布边界

`sources/prepared-assets-manifest.json` 包含 9,126 个本地 WebP 对象：4,561 张卡的 high/low 共 9,122 个，以及 B4/B4a 的日语 logo 和已验证无文字的 pack artwork 共 4 个。high 保留原生尺寸，low 使用已有 prepare-r2-assets 流程压到宽 245，不放大。四个 booster 的来源 URL、原图 SHA-256、输出 SHA-256、尺寸与视觉审查见 `booster-evidence.json`。

manifest 的 `publicationStatus` 为 `prepared-locally-not-uploaded`。源文件已写入最终 JA 对象地址，以供本地真实联调；本记录不证明 R2 已存在这些对象，也不证明生产环境已上线。R2 上传与部署必须由后续获授权发布步骤单独完成。
