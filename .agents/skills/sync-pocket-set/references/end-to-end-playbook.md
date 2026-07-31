# 新卡集端到端门禁

本页记录一次新 Pokémon TCG Pocket 卡集从发现到 API、R2 和下游应用可用的稳定
完成条件。它是跨 set 规则，不保存某个 set 的卡号、来源 commit 或人工裁决值。

## 1. 来源矩阵，而不是单一上游

每个 set 至少区分以下角色，并固定 commit、release checksum 或抓取时间：

| 角色 | 可提供的数据 | 使用边界 |
| --- | --- | --- |
| Pokémon 官方公告/游戏内数据 | set 名、发布日期、official count | 集合事实真源，不代替逐卡机制数据 |
| 固定素材索引 | 连续编号、九语名称、rarity、pack、卡图 | 必须核对许可证与完整 commit |
| 两个独立机制候选源 | HP、招式、Ability、弱点、撤退、Trainer effect | 不一致时进入逐字段 conflict queue |
| 卡面/OCR | illustrator、flavor、疑难规则文本 | OCR 只是候选；纠错值和原文都留证据 |
| validation-only 来源 | 冲突复核 | 禁止复制其受限内容或绕过禁止 scraper 的条款 |

PokeOS、搜索摘要或单一社区站点不能独占整套数据。每个 canonical 字段都要能回答
“值来自哪里、为什么选它、冲突如何裁决”。

## 2. 十张 pilot 门禁

首次使用新来源、新 schema 或新转换器时，先用 10 张分层样本跑完整链路，再扩大到
全 set。样本至少覆盖首/中/末编号、Basic/进化/ex/Ability、Trainer、secret 和多种
rarity。pilot 必须验证：

- 候选字段、chosen 值和 evidence 可追溯；
- 图片 hash、格式和编号对应；
- 地区形态或 Mega 前缀只出现一次；
- importer 输出可被现有 `Card` schema 编译；
- 下游 locale、rarity 和一次五张 gacha draw 可用。

用户已明确要求直接全量，或相同来源/schema 已通过近期 pilot 时，不重复人为停顿；仍
保留同样的抽样审查和全量自动门禁。

## 3. 图片语言与 R2

- 逐语言按 `001..total` 检查完整性；只有完整语言才能进入 manifest。
- 发现其他合法来源的本地化卡图时，分别固定版本、校验 hash、转 WebP 并上传对应
  `<language>/tcgp/<set>/<number>/`，不能把英文图伪装成本地化图。
- 缺少某语言图片时显式记录 fallback 和缺口；若用户要求本地化图片，该 set 在缺口
  解决前不得宣称完整。
- 上传必须有 object manifest、碰撞预检、逐对象 receipt 和公网 high/low smoke。

## 4. metadata 与本地化

- 所有卡必须覆盖 category、rarity、illustrator；Pokémon 还需 HP、types、stage、
  attacks、weaknesses、retreat，以及适用的 Ability/flavor；Trainer 需 subtype/effect。
- `official` 不含 secret，`total` 包含 secret；文件、canonical、图片和下游数量都按
  `total` 连续。
- 名称优先游戏内九语资源；地区形态、Mega 和 `ex` 使用显式规则，并扫描重复前缀。
- 单 booster set 不逐卡重复 boosters；多 booster set 必须逐卡声明，非普通包卡可为
  `[]`。
- 所有 card ID 必须连续且与数组/文件位置逐项相等；数量正确不能替代 ID 对齐检查。
- Set booster 的 `logo` 与 `artwork_front` 必须进入同一 R2/manifest/API 真源，不能只在
  下游另存一张本地包图。
- 生成本地化内容所用的 checkout、CSV、HTML、人工映射也要固定版本和 SHA-256，并纳入
  audit input hashes。
- `todoStrings > 0` 时 importer 必须在任何 metadata 写入前失败；todo 清零后才原子落盘。

## 5. API 与语言编译

- 本仓库宣布支持的每个语言都必须实际编译目标 set，不能只检查英语。
- 如果 `data-asia/` 不存在，compiler 不得把 ja/ko/zh-cn/id/th 静默路由到空目录；
  语言目录策略必须与当前仓库布局一致并有回归测试。
- 部署后至少读取 set、首张、中间张、末张，确认 count、name、rarity、image、机制字段
  和 locale fallback。

## 6. 下游原子同步

用户明确把下游纳入范围时，一次同步必须同时覆盖：

- 七语 `locales/card/*.json` 与真实图片语言；
- set/pack 配置、单包 `isSharePack` 或多包归属；
- `cardRarity.additions.json` 与 runtime loader；
- 卡片详情 metadata、catalog filter、collection 排序和 gacha 卡池。

强制断言卡片 key 与合并 rarity key 完全相等，并实际抽出五张。不能以 locale 数量、
build 成功或某一张卡详情正常替代 gacha 验证。

替换已有 set 时，基线 commit 只能作为比较依据：目标 worktree 与基线任一字节不同就
停止；删除旧 set keys 后再原子写入，保持所有无关顶层 key 的原顺序，并禁止追加出
重复 JSON keys。Promo set 不能整体映射为 `pr`，只有 canonical rarity 为
`None/Promo` 的卡使用 `pr`。

## 7. 证据与提交卫生

- 持久化前删除 `/tmp`、用户目录、浮动 URL、cookie、Bearer token、签名 query、OCR
  临时 capability 和第三方返回的 credential 字段。
- 原始 OCR JSON 只保留复核所需文本/结构；图片签名 URL 不是证据。
- 提交前扫描 `authorization=`, `x-amz-signature`, `token=`, `Bearer ` 等形态；命中即
  停止。若秘密已经进入公开历史，删除 HEAD 不等于处置完成，必须单独评估失效/轮换
  与历史清理。
- API 与下游分别核对目标分支、staged paths、测试和远端状态；只有用户明确要求才
  commit 或 push。
- 使用仓库既定的包管理器和 lockfile；不得为方便本地运行再引入第二套依赖真源。
