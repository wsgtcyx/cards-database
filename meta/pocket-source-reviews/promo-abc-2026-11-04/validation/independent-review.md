# PROMO A/B/C API 与 R2 独立审查

本文件只保存公开 API 侧结论。下游客户端的实现审查和浏览器记录保存在下游仓库，避免在公开 API 仓库重复披露私有客户端细节。

API 原生语言图片守卫接受正确卡号路径后的16位内容版本，仍拒绝其它语言、卡号和非法后缀。关系修复允许非进化引用的真实印刷标题标点差异，仍拒绝歧义进化目标。对应图片守卫2项、关系检查3项专项测试通过。最终HTTP审计2520请求和18项SDK回归另有记录。

## R2 上传脚本审查

审查对象：`/private/tmp/promo-abc-assets-20261104/upload-versioned.mjs`、`r2-manifest.json`、`r2-preflight.json`，及其调用的 `inspectRemoteObject`。

独立本地逐项验证通过：4222 个对象，4222 个唯一 key；233 张卡 × 9 语言 × high/low = 4194 个卡图，另 28 个 pack/logo。每个文件的 byte count、SHA-256、RIFF/WEBP 标识均与 manifest 一致。每个卡图 key 的 locale/set/number/size 与字段一致，sourceSha256 与 2097 张图片身份审查绑定一致。重新计算每张卡 18 个 payload 拼接 SHA-256，均匹配其 16 位版本目录；pack/logo 的版本目录均匹配输出哈希前缀。绿色 preflight 与当前 manifest SHA-256 绑定一致。

安全与范围判断：key 正则不允许旧无版本 key、绝对路径、路径穿越或 shell 内容；spawn 使用 argv 且未开启 shell，无当前参数注入路径。非 404 或不匹配远端对象被拒绝，不会自动覆盖旧对象。PUT 前做两次检查；Wrangler 无 conditional-create，跨机器在检查和 PUT 之间的竞争窗口仍存在，脚本已明确记录此限制。404 必须由实际响应产生，不把网络错误当作不存在。

初版发现及复审状态（以下两项已由主 agent 修复，最新版只读复审关闭；行号指初版）：

1. P2，line 22，已关闭：初版 PUT 非零后盲重试。最新版每次尝试 PUT 前执行 inspectRemoteObject；已存在且 hash 匹配则 reused，不匹配则停止。不会因客户端失败重试而直接再次 PUT 已出现的对象。
2. P2，line 25/16，已关闭：初版收据直接写最终文件可能因中断留下半 JSON。最新版先写 .tmp，再 renameSync 到最终收据。上传从本次修复后启动，未依赖旧版产生的半 JSON 收据。

成功命令收据目前明确不等于公网验证；脚本最终 `publicVerificationPending: true` 是准确的。无论 checkpoint 恢复还是新上传，都必须在发布前进行全量公网内容与缓存头校验。此报告不宣称 R2 已上传或公网验证成功。

## 最终资产链复核

追加20张高清包面后，独立只读核对最终清单、两批上传收据及实际HTTP记录：4222 current key、4242累计上传key、20保留旧版本，字节数、SHA-256、批次hash逐项一致。27个真实booster九语URL均命中最终清单。20张高清原图的身份审定和尺寸一致，没有放大。低清例外对应用户明确接受的C Vol.1及B Vol.11–13。
