---
name: merge-pocket-card-sources
description: Build auditable Pokémon TCG Pocket card metadata by merging PokeOS, RaenonX, and other pinned upstreams, localized card images, OCR review, multi-source cross-validation, and per-conflict evidence. Use when no single source covers a set, when sources disagree, or before feeding a composite details file into sync-pocket-set.
---

# Merge Pocket Card Sources

在仓库根目录执行。目标不是“挑一个最全上游”，而是为每张卡、每个字段保存候选值、选择值和证据，再生成 `sync-pocket-set` importer 兼容的英文 details JSON。

同时读取 `$sync-pocket-set` 的
[端到端门禁](../sync-pocket-set/references/end-to-end-playbook.md)，先按其中的十张 pilot
验证新来源/schema，再扩大到全 set。

## 输入门禁

先固定所有可变来源的完整 commit、release checksum 或抓取 URL/时间。读取 [references/source-contract.md](references/source-contract.md)，准备：

- 基础索引：连续编号、英文名、稀有度和卡图；
- 两个独立机制候选源；
- 卡面 OCR/review：抽取几个代表性卡图 case，覆盖 Pokémon、Trainer、能力/招式和不同语言；
- review overlay：所有候选冲突的卡面或独立页面裁决；
- source registry：每个来源的角色、版本、许可证和固定 URL。

RaenonX 是除 PokeOS 外的可用上游，角色是 localized metadata/image candidate，不是
自动替代 canonical 详情的唯一真源：

- `https://ptcgp.raenonx.cc/api/data/global-master` 提供 cardEntryMap、结构引用和 i18n IDs；
- `https://ptcgp.raenonx.cc/{locale}/card/{cardId}` 提供页面内 `messages.Game.Master` 本地化 payload；
- `https://cdn.raenonx.cc/api/image/ptcgp?format=png&url=/images/game/card/full/{locale}/{cardId}.png` 提供 PNG 原图；
- 当前可用 overlap 为 `en/fr/es/pt/zh`，不要以英文 fallback 填充 RaenonX 缺失的 `de/it`；
- 记录抓取时间、响应 headers、body SHA-256、固定 URL 和 `https://ptcgp.raenonx.cc` 归因。
  未找到正式复制许可证时，只按明确授权、署名发布的范围使用，并在 provenance 标出限制。

PokeOS 的 set/card API 可用于核对 set ID、数量和连续编号。若它另行发布了完整的
localized card images，可在固定 source set ID、逐张 collection number join、全量下载校验和
PaddleOCR pilot 通过后作为图片源。这不代表 PokeOS 提供了本地化 metadata；若逐张本地化
名称/规则字段仍为 null，只能导入图片，不得从 OCR 反推结构化字段。

metadata 必须多源交叉验证：编号、数量、稀有度、结构和规则字段至少保留两个独立候选源；
RaenonX localized value 必须通过 card ID + collection number join 到 canonical，而不是
按数组位置合并。任何冲突都写入 review overlay，未裁决前禁止生产写入。

RaenonX 表单名只允许经过通用的缺失分隔符规范化；不得按卡号写特判。适配器保留原始
`sourceName`，cross-source audit 必须确认最终值已经规范化，未规范化的值阻断写入。

禁止批量导入明确禁止 scraper 的站点。许可证不允许复制的来源只能作为校验候选，不能标为生成内容的直接来源。

## 工作流

1. 先运行合并器生成冲突队列；允许它以退出码 2 停止。
2. 只对 `unresolvedConflicts` 做定点卡面 OCR或网页核验，把裁决写进 review overlay；RaenonX
   新来源还必须先完成十卡 localized metadata/image pilot，检查 token binding、source
   coverage 和跨源一致性；B4 还要运行
   `scripts/audit-raenonx-b4-cross-source.mjs`，确认 RaenonX 的稳定机制字段与既有
   多源审计后的 API baseline 一致。
3. 重跑直到 `passed: true`、`unresolvedConflicts: 0`、`missingFields: 0`。
4. 当固定的结构化 metadata 上游尚未发布该卡集时，从 canonical 结果和历史九语官方卡名生成 importer 兼容源；其 `unresolvedLocalizedNames` 必须人工裁决到 0。当前 `build-importer-source.mjs` 是 B4 已审定 adapter，只能作为实现样例；新 set 必须提供显式 set 配置或通用化 adapter，禁止直接改 B4 常量后复用。
5. 用输出的 `*.details.json` 作为 `sync-pocket-set` 的 `metadata.detailsFile`，并把 `*.provenance.json` 固定到 manifest。
6. 在任何 metadata/R2 写入前，再运行一次相同命令；输入 hash 或审计结果变化时停止复核。
7. R2 公网验证通过后，用 `sync-downstream-locales.mjs` 把已审定的七语卡名、实际存在的图片语言和逐卡 gacha rarity 一起写入下游；先 dry-run，再加 `--write`，并逐 locale 检查数量、连续性以及下游 rarity 全卡覆盖测试。脚本写入固定的 `cardRarity.additions.json`，不得再为新 set 新建需要手工接线的 rarity shard。Promo set 也必须按每张卡的真实 rarity 映射，只有源 rarity 为 `None/Promo` 的卡才是 `pr`。

8. 图片与 metadata 的图文一致性优先通过 `$paddleocr-text-recognition`。若用户明确批准本机
   OCR 方案，可在 macOS 使用 Apple Vision accurate recognition 作为主识别器、Tesseract
   `deu+eng` / `ita+eng` 作为独立复核器。先抽取十张代表性 localized card cases，覆盖
   Pokémon、Trainer、能力、招式和长规则文本；通过后可以全量生成 OCR evidence。
   两个 OCR 的近似一致只代表候选可读性，不等于 metadata 已核准：能量图标、伤害数字、
   换行顺序、全图卡文字区域和相邻能力/招式文本都可能同时被误识别。原始 JSON 要固化；
   低置信度、unresolved、ambiguous、图文 mismatch 或没有独立结构化来源的字段只能进入
   review，不能自动写入生产 metadata。

   本机替代路径应尽可能再用已配置的 PaddleOCR Text Recognition API 做第三路 pilot；必须
   通过 Skill 自带的 `ocr_caller.py` 调用，持久化前删除 provider image URL、签名 query、
   token 和本机临时路径，只保留识别文本、置信度/布局块、坐标、错误和源图 SHA-256。
   PaddleOCR 在受限沙箱内出现 DNS 错误时，应使用同一个 smoke test 在获准联网的执行环境
   复核，不能把沙箱网络限制误判为模型、Token 或服务故障。

9. 联网交叉验证要把“发现工具”和“证据来源”分开记录。可组合使用 Native Search、
   AnySearch batch search、Exa search/fetch 与 Firecrawl search/scrape，但搜索摘要本身不是
   metadata 来源；必须落到可定位的官方页面、独立数据库、固定 Git commit 或卡图原文。
   对每个来源记录其真实字段覆盖，不能因为页面有多语言 UI 或本地化卡图入口，就宣称它
   提供本地化招式、能力或描述。目标产品自身及其镜像、缓存、搜索摘要一律不得反向作为
   上游证据；`pokemontcgpocket.app` 必须从搜索结果、抓取输入和 provenance 中排除。
   官方 Pokédex 可用于核验与卡面相同的 flavor/description，但不能用于推导 Pocket 专属
   招式、能力或 Trainer 效果；同一宝可梦存在多个版本描述时，必须先由英文卡文精确匹配
   版本，再采用对应语言，禁止仅按宝可梦名称取最新一条。

B4 的稳定字段交叉审计示例：

```bash
node .agents/skills/merge-pocket-card-sources/scripts/audit-raenonx-b4-cross-source.mjs \
  --base-ref <reviewed-api-commit> \
  --output meta/pocket-source-reviews/B4/raenonx.cross-source.json
```

该审计复用既有 `B4.audit.json` 的 PokeOS/index、deckGym、PokemonMeta 和定点裁决证据；
RaenonX 只接管本次新增的 `en/fr/es/pt/zh` 本地化字段和图片，不会静默覆盖已审定的稳定
机制字段。审计不通过时禁止写入生产 metadata/R2。

```bash
node .agents/skills/merge-pocket-card-sources/scripts/merge-pocket-card-sources.mjs \
  --set-id B4 \
  --total 233 \
  --index /tmp/B4.json \
  --deckgym /tmp/deckgym-database.json \
  --pokemon-meta /tmp/pokemonmeta-B4.json \
  --review /tmp/B4.review.json \
  --sources /tmp/B4.sources.json \
  --images /tmp/cards-by-set/B4 \
  --image-ref-base https://raw.githubusercontent.com/owner/repo/full-commit/path/B4 \
  --output /tmp/B4-composite
```

`--image-ref-base` 应固定到完整 commit；本地目录只用于存在性与 SHA-256 校验，持久化
canonical/provenance 时不得写入一次性 `/tmp` 路径。

自动 OCR review 与人工裁决分开保存时，用通用决策应用器生成最终 review；
`decisions.fields` 按字段、卡号保存值，证据可写在单项或
`decisions.defaults.<field>`：

```bash
node .agents/skills/merge-pocket-card-sources/scripts/persist-ocr-evidence.mjs \
  --review /tmp/B4.review.ocr.json \
  --ocr-dir /tmp/ocr-full \
  --output-review meta/pocket-source-reviews/B4/B4.review.ocr.json \
  --evidence-prefix meta/pocket-source-reviews/B4/ocr

node .agents/skills/merge-pocket-card-sources/scripts/apply-review-decisions.mjs \
  --base meta/pocket-source-reviews/B4/B4.review.ocr.json \
  --decisions meta/pocket-source-reviews/B4.decisions.json \
  --output meta/pocket-source-reviews/B4/B4.review.final.json

node .agents/skills/merge-pocket-card-sources/scripts/build-importer-source.mjs \
  --canonical /tmp/B4-composite/B4.canonical.json \
  --template-root /tmp/ptcgp-assets \
  --species-names /tmp/pokeapi-species-names.csv \
  --output /tmp/B4-importer-source

node .agents/skills/merge-pocket-card-sources/scripts/sync-downstream-locales.mjs \
  --source-root /tmp/B4-importer-source \
  --downstream ../tcgp \
  --set-id B4 \
  --set-name "Ruler of the Skies" \
  --expected-count 233 \
  --image-languages en=en,fr=fr,es=es,it=it,de=de,pt=pt-br,zh-TW=zh-tw
```

`--image-languages` 只能列出已完成全量 R2 smoke 的语言映射。确实只有英文素材时可显式
使用 `--image-language en` 作为 fallback，但若用户要求本地化图片，不得用该 fallback
宣称完成。

RaenonX 的 `fr/es/pt/zh` 卡图只有在下载、WebP 转换、R2 公网 HEAD/Content-Type 验证和
OCR 图文一致性全部通过后，才能进入 `--image-languages`；`de/it` 必须继续使用其他已审定
来源或保持现有对象，不得伪造 RaenonX 映射。

PokeOS localized image 同步使用现有的分阶段工具，先跑十卡 `--cards` pilot，再去掉限制跑全量：

```bash
POCKET_IMAGE_SYNC_RUN_ID=<date>-pokeos-<set>-<locales> \
node scripts/sync-localized-card-images.mjs <audit|download|prepare|preflight|upload|verify|apply> \
  --source pokeos-localized --set-id <set> --source-set-id <numeric-id> --locales de,it
```

`upload`/`apply` 仍必须显式加 `--write`；`apply` 只能在全量 R2 公网字节 SHA-256 验证成功后执行。

`persist-ocr-evidence.mjs` 只接受位于 `--ocr-dir` 内、且确实被抽检 review 引用的
OCR JSON；它把这些原始结果复制到持久目录并将 evidence 改写为仓库相对路径。
复制时必须删除签名 URL 的 query capability。持久化输出中不得残留 `/tmp`、
`/private/tmp`、本机用户目录、authorization、token、cookie 或 credential。

需要替换已存在的 set 时显式加 `--base-ref <reviewed-commit>`。脚本会确认每个目标文件
仍与该 commit 完全一致，删除旧 set keys 后原子写入新值，并保持所有无关顶层 key 的
原顺序；任一 worktree 漂移都会停止，不得以基线内容覆盖用户修改。重跑后还要扫描原始
JSON，确认没有重复 key。

输出固定为：

- `<set>.canonical.json`：逐卡 canonical 数据；
- `<set>.details.json`：现有 importer 兼容数组；
- `<set>.provenance.json`：逐字段候选、选择、状态和证据；
- `<set>.audit.json`：连续性、缺口、冲突、诊断和输入 SHA-256。

## 裁决规则

- 名称、编号、稀有度优先固定索引；机制字段必须至少有两个候选或 review 证据。
- 两源规范化后一致可自动通过；只忽略大小写、Unicode、Pokémon 重音和末尾标点，不忽略数字、回合条件、能量、伤害后缀或卡牌对象。
- 候选不一致必须写 `review.cards.<id>.fields.<field>`；不得在脚本里添加目标 set 或卡号特判。
- OCR 原文与纠正值同时保留。illustrator 可用仓库既有 artist corpus 纠错；flavor text 只能纠正明确 OCR 错字并保留说明。
- OCR audit 必须以卡名匹配作为身份信号；只有检测到明确的 `<NNN>/233` 或 `B4-NNN` 卡号且编号不匹配时才阻断，不能把宝可梦全国编号当作卡组编号。
- 任一必填字段缺失、任一冲突未裁决或 ID 不连续时，输出审计但以非零退出，禁止生产写入。
- RaenonX 的 source-exact 模板若出现未绑定 token、动态 token 数变化无法按 ID/ref 对齐、
  或 English oracle 与现有 canonical 语义无法对齐，必须停止；不得直接 strip 标签或回退英文。
- OCR 只用于图文一致性证据或人工 review 候选，不能绕过多源冲突裁决；即使 Apple Vision
  与 Tesseract 文本相近，也不能把 cross-engine agreement 标记为 verified；image identity/number/name mismatch
  必须阻断 metadata/R2 写入。
- canonical adapter 若根据数组位置生成卡号，必须先断言每一项 ID 都等于预期的 `<set>-NNN` 且无重复；只有数量相等不够。

## 联动约束

随后遵循 `$sync-pocket-set` 完成 metadata、翻译、WebP、R2 和验证。需要卡面识别时优先遵循
`$paddleocr-text-recognition`；只有用户明确批准时才使用上述 Apple Vision + Tesseract
替代路径，并保持同样的 fail-closed 门禁。需要六语补全时严格遵循
`$add-pocket-translations`，只写有官方依据或已审定的映射。
