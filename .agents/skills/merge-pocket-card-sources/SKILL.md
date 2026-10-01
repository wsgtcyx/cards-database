---
name: merge-pocket-card-sources
description: Build auditable Pokémon TCG Pocket card metadata by merging PokeOS, RaenonX, and other pinned upstreams, localized card images, OCR review, multi-source cross-validation, and per-conflict evidence. Use when no single source covers a set, when sources disagree, or before feeding a composite details file into sync-pocket-set.
---

# Merge Pocket Card Sources

在仓库根目录执行。目标是为每张卡、每个字段保存候选、选择和证据，生成
`sync-pocket-set` 可消费的 canonical/details/localizations，而不是挑一个“最全来源”。

## 必读与边界

完整读取 [source contract](references/source-contract.md) 和
[端到端门禁](../sync-pocket-set/references/end-to-end-playbook.md)。需要卡图识别时遵循
`$paddleocr-text-recognition`；需要 locale 补全时遵循 `$add-pocket-translations`。
修改触发描述或来源职责后，用 [路由用例](evals/trigger_cases.json) 回归近邻分流。

- 固定完整 commit、真实 release asset、抓取时间、HTTP metadata/body SHA-256 和许可证；搜索
  只用于发现，生产证据必须落到官方页面、固定数据库响应、commit 或卡图。
- 名称/编号/rarity 可由固定索引决定；机制字段必须有两个独立候选或逐卡 review 证据。
  数字、能量、伤害后缀、回合条件和对象语义不做模糊归一。
- PokeOS/RaenonX 按 card ID + collection number join，不按数组位置；缺少规则字段时不能用
  英文 fallback 或从 OCR 自动反推。禁止复制许可不允许的内容。

## 执行骨架

1. 用十张分层 pilot 验证来源/schema、图片 identity、token binding 和跨源一致性，再跑全量。
2. 运行 `merge-pocket-card-sources.mjs` 生成冲突队列；只通过 review overlay 裁决 unresolved，
   重跑到 `passed=true`、missing/unresolved 为 0、`001..total` 连续。
3. 若语言依赖卡图转录，必须全 set OCR + 人工复核；用 `persist-ocr-directory.mjs` 绑定
   card/locale/source hash/bytes/chosen，并清除 URL、凭据和本机临时路径。
4. importer/adapter 必须接受 `--set-config`；set ID、总数、slug、booster、locale、形态规则和
   exceptions 全在配置中；不得为新 set 新增或改写 B4/B4a 常量/卡号特判，历史默认仅作回归兼容。
5. 运行 `audit-pocket-localizations.mjs` 与 `build-localized-image-evidence.mjs`，动态核对 fallback、
   token、同名 printing、illustrator 占位、每张源图/OCR/R2 object/booster 映射。
6. metadata/R2 写入前重跑相同输入；输入 hash 变化即停止。preflight 保持不可变，另建 final
   audit 绑定 canonical、localizations、manifest、receipts/verify 和 downstream 输入 hash。

## 输出契约

固定输出 `<set>.canonical.json`、`<set>.details.json`、`<set>.provenance.json`、
`<set>.audit.json`、`<set>.localization-audit.json`、`<set>.image-evidence.json` 和
`<set>.final-audit.json`。任一缺字段、未裁决冲突、placeholder/mojibake、英文 fallback、未绑定
token、CJK 拉丁占位或 ID 不连续时，以非零退出且禁止生产写入。
