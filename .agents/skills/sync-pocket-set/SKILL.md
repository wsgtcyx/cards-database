---
name: sync-pocket-set
description: Prepare and publish one Pokémon TCG Pocket set from only its set ID in this cards-database fork, including PokeOS and RaenonX localized metadata/image sources, auditable provenance, R2 assets, API verification, and optional tcgp downstream synchronization. Use when adding a new Pocket set end to end or repairing an incomplete set release.
---

# Sync Pocket Set

在仓库根目录执行。输入只需要 set ID；先保护工作树和现有审计产物，再把来源、metadata、
locale、图片、R2、API 和下游作为同一条 fail-closed 流水线处理。

## 路由

开始前完整读取：

- [端到端门禁](references/end-to-end-playbook.md)：阶段顺序、pilot、来源、OCR、R2、API 与审计；
- [manifest](references/manifest.md)：事实字段、配置驱动 importer 和动态对象数；
- [数据契约](references/data-contract.md)：Card/Set/booster/image/rarity 语义。

若用户要求同步 `tcgp`，还必须读取 [下游契约](references/tcgp-downstream.md)。单一来源不能覆盖
全部字段或来源冲突时调用 `$merge-pocket-card-sources`；补多语言时调用
`$add-pocket-translations`；卡图转录时遵循 `$paddleocr-text-recognition`。
修改触发描述或职责边界后，用 [路由用例](evals/trigger_cases.json) 回归近邻分流。

## 执行骨架

1. 检查 `AGENTS.md`、两个仓库的 branch/status/diff，记录既有 preflight/source registry 的
   SHA-256；未经授权不 commit、push、deploy 或覆盖 R2。
2. 用 `scripts/discover-pocket-set.mjs` 生成 manifest；固定官方 set facts、真实 release asset、
   完整 commit/HTTP metadata/body hash/license。先跑十张分层 pilot，再扩大到连续 `001..total`。
3. 用显式 `--set-config` 合并 canonical/localizations；新 set 禁止新增或改写 B4/B4a 常量和
   卡号特判，历史默认只能作为回归兼容。必须达到
   missing/unresolved/TODO/fallback 为 0，并生成 provenance、localization audit 与 final audit。
4. 动态生成图片对象和 image evidence；按 manifest 执行 prepare → collision preflight → upload
   → public byte/hash/header verify。无本次 receipt 的既有 key 不覆盖；完全相同且证据齐全才复用。
5. 运行 set audit、仓库 validate/test/diff check，并本地验证全部名称 locale、完整规则 locale、
   代表卡与 search 精确总数。生产 API 404 是部署边界，不能被下游 fallback 掩盖。
6. 若包含 `tcgp`，原子同步七语 JSON、逐卡 rarity、set/pack、entity/filter、QR mapping digest
   和静态素材；运行真实五卡抽包、全量测试/build 与桌面/移动端视觉 smoke。竞技 Deck 快照仍由
   独立自动化维护。

## 完成门禁

只有 ID 连续、所有审计通过、R2 receipts/public verify 数量精确、API/下游 key 集一致、视觉素材
清晰且实际渲染正常时才声明完成。分别报告 name/full-rule/image locale、对象数、测试、未解决项、
两个仓库最终 status，以及 commit/push/deploy 是否执行。
