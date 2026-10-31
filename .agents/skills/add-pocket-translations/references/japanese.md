# 日语本地化与交付

本页适用于 API `ja` 与 tcgp `ja`。先读取实际源码和语言配置，分别报告 name、full-rule、image 覆盖；语言键存在不能证明翻译完成。

## 事实与语言

- 集合、卡包、卡名、进化来源、ワザ、特性及规则文本使用日语游戏内文本、官方公告与可追溯真实卡面。实体卡牌的同名卡不能替代 Pocket 规则。
- PokeOS/RaenonX 是候选；按稳定卡牌 ID、集合编号和版本对齐，不按数组位置。保存实际响应、抓取时间和 SHA-256。第三方镜像同一输入不算独立机制证据。
- 规则需要两个独立候选或逐卡卡面复核。OCR 只是候选，能量、数值、伤害后缀、作用对象、回合条件和特殊状态都必须核对；未解析标签和英文占位不能进入发布数据。
- 不确定的值保留在审查队列，向用户提交候选与证据，不硬翻译。已有 `ja` 错误使用带证据的 correction 决策，不静默覆盖其他语言。

## 审计与审定写入

```bash
node scripts/audit-pocket-localization-metadata.mjs --locales ja --output /tmp/pocket-ja-audit.json
node scripts/apply-reviewed-pocket-localizations.mjs --decisions <reviewed-decisions.json>
node scripts/apply-reviewed-pocket-localizations.mjs --decisions <reviewed-decisions.json> --write --base-ref <reviewed-full-commit>
```

审计默认范围保留历史六语；日语必须显式传 `--locales ja`，或与本批次其他语言一起列出。`--allow-incomplete` 仅允许保存盘点结果，不表示通过。审定写入支持 `ja`，仍要求来源哈希、expectedEnglish、expectedCurrent 和基线绑定；先 dry-run，再原子写入和重审。

## 图片与下游

- 日语卡图使用与其他语言相同的现有生成规格：high 保留原生尺寸，low 最宽 245px，两者不放大。检查实际像素、格式、字节数和哈希，不因文件名含 high 就宣称更高清。
- 不将英文图或人工重排卡面伪装成日语原图。每张图绑定 card ID、locale、源哈希及输出对象；重印可以复用同一真实图源，但仍逐编号核对。
- tcgp 的 `ja` 对应 API/R2 `ja`；沿用稳定 card/set/pack ID、route slug、收藏与牌组存储键。同步本地卡名/图索引、详情 API 映射、目录筛选、构筑器和牌组自动更新。
- 不把程序枚举（如 Grass/Pokemon）改成日语来破坏接口；日语展示标签由前端文案负责。
- 联调必须启动本仓库编译 API，并让 tcgp 的 `TCGP_CARD_API_BASE_URL` 指向它；覆盖详情、目录 search/options 和日语检索。不能用线上 API、mock 或英文回退证明日语接通。
- 首页/工具文案、文章、canonical/hreflang、JSON-LD、内链及 sitemap 按真实已完成页面验收。未制作日语版本的文章/小游戏不生成占位 URL 或语言互链。日文关键词按日本 Pocket 用户实际搜索意图取证，不以关键词密度替代内容质量。

## 自动化边界

Deck Meta 与 Event Finder 以已发布主分支的实际语言配置为准。`ja` 尚未发布时保留当前语言集合，报告接入状态，不从未合并分支复制实现；发布后必须覆盖日语名称、策略和 SEO 输出，并执行相应语言门禁。来源缺失不能复制英文填满，自动任务不能扩大 API、R2、合并或部署授权。
