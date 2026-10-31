# 韩语新卡集与字段审定

API/R2 locale 使用 `ko`；RaenonX 使用 `ko`，Centro 游戏导出使用 `ko_KR`，素材仓库可使用 `ko-KR`。以当前仓库语言配置为准，不把这些键混用。API 支持韩语不代表 tcgp 已启用；用户未要求下游时不修改 tcgp。

## 官方文本与判断

- Set/Booster 名称、卡名、进化来源、技术、特性、训练家效果和图鉴说明采用对应版本的韩语游戏内文本或真实原生卡面；优先核对[韩国官方 Pocket 页面](https://pokemonkorea.co.kr/pokemon_tcg_pocket)和官方概率表。实体卡规则、一般宝可梦图鉴、搜索摘要与机器翻译不能替代 Pocket 原文。
- RaenonX 游戏字典与 [Centro 韩语游戏导出](https://tcgpocket.centropkmn.com/ko_KR) 是可固定的候选来源；按游戏 card ID、set 编号和版本对齐，保存响应字节和 SHA-256。两个站若来自同一 renderer，不算两个独立机制证据。冲突最终回到原生卡面，不靠多数票。
- 名称、描述和规则分别逐字段核对。保留原文空格，如 `알로라 식스테일`、`로켓단의 니드킹`；不能删掉形态、地区、所有者，或凭英文名称拼出未经证实的韩语专名。`ex`、实际卡面上的 `GUARD [가드]`、机器 ID 和插画师署名可保留拉丁字符。
- `Gr:Patchim` 必须根据实际词尾收音选择 `이/가`、`을/를`、`은/는`、`과/와`；`으로/로` 另处理 `ㄹ` 例外。`ex` 按游戏读法处理，性别符号不能覆盖前一韩文词尾；未知外文发音或 `Gr:Pron` 不能猜测。人工 override 同样要核对助词，不能因其与另一个 renderer 相同而直接放行。
- 数量 `1` 也必须输出。核对能量、伤害及后缀、作用对象、时机、特殊状态和有序选项 `①/②`；不得残留 `Gr:`、`Text:`、`Num:`、`Ctrl:` 等标签。英文 canonical 本身可能有误，有实际卡面证据时按字段裁决，不能迁就错误英文修改韩语机制。
- 类别与阶段采用游戏用语，如 `포켓몬`、`트레이너스`、`특성`、`기본`、`1진화`、`2진화`；训练家类型为 `아이템`、`서포트`、`포켓몬의 도구`、`스타디움`。官方资料中的实体卡机制不能顺带套入 Pocket。
- 稀有度按官方概率表核对：`왕관`、`색이 다른1`、`색이 다른2`；不要用音译 `크라운` 或给色异等级添加普通星级标记。数字/菱形/星形沿用明确的官方等级语义，不能互换两类星级。
- `None` 的 `레어도 없음` 是未标示稀有度的说明标签；`Anomaly` 的 `특수 카드(일반 레어도 분류 외)` 也是经用户批准的说明标签，两者都不是官方等级名。API 搜索/错误提示采用自然韩语，不伪称游戏官方原文。没有可证实的官方表达时保留审查队列，提交候选和证据向用户确认。

## 可执行链路

1. 新 source config 同时在 `nameLocales`、`ruleLocales` 中声明 `ko`，`dictionaryLocales` 声明 `"ko":"ko"`；set/pack 名称逐语言显式提供，不继承旧 set 的默认事实。
2. 若使用字典规则候选：

   ```bash
   node .agents/skills/merge-pocket-card-sources/scripts/sync-raenonx-b4.mjs \
     --dictionary-only --canonical <canonical.json> --dictionary-config <source-config.json> \
     --snapshot <snapshot.json> --output <dictionary-overlay.json>
   ```

   该旧命名脚本的 `--dictionary-only` 可用于新 set；按配置获取实际 `ja/ko` 字典。字典 overlay 只提供绑定成功的规则候选，不等于完整名称、说明与来源审定。德语/意大利语另取原生来源。历史 B4 默认模式不能冒充新 set 流程。
3. 将每个字段选定值与来源绑定到 canonical/localizations/reviewed raw；运行审计，必须检查 canonical 存在的所有字段和攻击/特性数组，不接受仅有卡名的假完整语言：

   ```bash
   node .agents/skills/merge-pocket-card-sources/scripts/audit-pocket-localizations.mjs \
     --canonical <canonical.json> --localizations <localizations.json> \
     --config <source-config.json> --reviewed-cards <reviewed-raw.json> --output <localization-audit.json>
   ```

4. 新 set 使用 `scripts/import-reviewed-pocket-set.mjs`，审计绑定 raw hash 后才能导入。已有字段使用 `scripts/apply-reviewed-pocket-localizations.mjs`：先 dry-run，再带 `--write --base-ref <full-commit>`；要求 expectedEnglish、expectedCurrent、源字节哈希及逐字段 evidence。不要通过全局英文字符串映射覆盖歧义字段或绕过审定。
5. 显式运行 `node scripts/audit-pocket-localization-metadata.mjs --locales ko`。默认历史六语审计不代表韩语通过，`--allow-incomplete` 只是盘点。规则/名称/图片三种覆盖分别报告，未解决项均为 0 才通过。

## 图片、R2 与 API

- 每个编号绑定实际韩语卡图、源哈希、输出对象和 locale；重印复用原图仍要核对身份。high 保留原生尺寸，low 按现有最宽 245px 且不放大。OCR 是语言检测和候选证据，不等同于人工逐张校读；唯一规则证据来自卡图时必须复核所用字段。
- 卡集 logo、通用 symbol、各 booster logo 和实际包装正面一起核对。方形纹理不等于包装正面；英文覆盖字幕的重制图不能称韩语原生图。通用无语言素材需明确标记。
- R2 prepare → 不可变碰撞 preflight → 条件创建 → 逐对象回读核对字节/SHA-256/格式/cache headers。旧 key 不同内容保留，用内容哈希新 key 并同步 metadata URL；不因“补韩语”覆盖其他版本。
- 卡片 image 为 `/ko/tcgp/<set>/<number>` 基址；set logo/symbol 基址不带扩展名，booster 使用已核验完整 URL。动态核对对象数，不硬编码某历史卡集总量。
- 所有已启用语言实际编译。韩语详情、search/options、关系、Set/Booster 和错误响应必须联调；稳定 ID、筛选 value、canonicalName 与协议键保留。计数为 0 的已定义包仍可出现在选项中。
- 本地与生产编译内容要对齐。`updated` 受 Git 历史/浅克隆影响；同日首次发行的集合可能存在旧排序并列。单独核对这些构建元信息，不能把时间或顺序差异误判为翻译错误，也不能忽略正文、机制或图片地址的差异。
- 提 PR、合并、R2 写入和部署按当前授权分别执行；skill 本身不授予外部写入权限。
