---
name: sync-pocket-set
description: Prepare and publish one Pokémon TCG Pocket set from only its set ID in this cards-database fork, including PokeOS and RaenonX localized metadata/image sources, multi-source provenance, PaddleOCR image-text checks, WebP/R2 publishing, downstream indexes, and optional commit/push.
---

# Sync Pocket Set

在仓库根目录执行。用户在“同步、接入或使用本 skill”的语境里只需提供
set ID；不要再向用户索要可从来源发现的英文名、卡数、booster、语言、
图片路径、bucket 或公开域名。

开始前完整读取 [references/end-to-end-playbook.md](references/end-to-end-playbook.md)。
该 playbook 是新 set 的跨仓完成门禁；本文件负责具体命令和写入顺序。

## 默认完成标准

`$sync-pocket-set B4a` 默认表示完成整条链路：

1. 固定真实来源版本并生成 set manifest；
2. 联网核实发布日期、official count 和详细卡牌数据；
3. 新增 set 与 `001..total` 全部卡牌 metadata；
4. 补齐 `fr/es/it/de/pt-br/zh-tw`，专名使用官方译法；
5. 判断并写入真实 booster 归属；
6. 将所有可用卡图和 pack 图统一转为 WebP；
7. 上传到既有 Cloudflare R2 `game` bucket；
8. 写入逐卡 `image` 和 booster 图片 URL；
9. 运行审计、TypeScript 检查和公网验证；
10. 若用户同时要求同步下游，必须把逐卡 rarity 写入下游 gacha 增量索引，并通过全卡覆盖测试。

只读询问（例如“看看 B4 有什么”）不触发仓库或 R2 写入。commit/push 仍只在用户明确要求时执行。

默认图片公开域名是 `https://game.pokemontcgpocket.app`。默认素材索引是
[`shelken/ptcgp-assets`](https://github.com/shelken/ptcgp-assets)，但每次必须固定到
完整 commit，不使用浮动分支 URL。

### 可用上游与来源角色

除 PokeOS 外，RaenonX 也是可用的本地化数据源，但它不是默认的唯一真源：

- master/index：`https://ptcgp.raenonx.cc/api/data/global-master`；
- 页面本地化 payload：`https://ptcgp.raenonx.cc/{locale}/card/{cardId}`；
- 卡图源：`https://cdn.raenonx.cc/api/image/ptcgp?format=png&url=/images/game/card/full/{locale}/{cardId}.png`；
  下载原图后由本项目统一转换为 WebP，再上传 R2；
- 当前可复用语言为 `en/fr/es/pt/zh`；RaenonX 页面不提供本项目 B4 所需的 `de/it`，不得把英文 fallback 冒充为德/意本地化；
- 每次抓取必须保存访问时间、URL、HTTP metadata、response SHA-256 和归因
  `https://ptcgp.raenonx.cc`。RaenonX 相关仓库未发现正式复制许可证时，只能按用户已授权、署名发布的范围使用，并在 provenance 中保留该限制。

RaenonX 可以提供 localized card names、attack/ability/trainer text 和 localized card
images；英文规则字段、编号、稀有度和完整 schema 仍须与至少一个独立结构化来源交叉核对。

## 1. 范围与工作树

先读取最近的 `AGENTS.md`，然后：

```bash
git status -sb
git remote -v
```

保护用户现有改动。目标 set、实际修改路径和 staged paths 必须一致。不得自动修改下游应用。

如果配置了上游，先只读检查目标 set 是否已有可复用提交：

```bash
git fetch upstream
git log --oneline --name-only HEAD..upstream/master -- \
  'data/Pokémon TCG Pocket*' 'data-asia/Pokémon TCG Pocket*'
```

逐个检查 diff。只 cherry-pick 目标 set 所需提交，不 merge 整个上游。上游不完整时继续本流程补齐，不能把“上游已有文件”等同于完成。

## 2. 只用 set ID 自动发现

准备隔离的临时目录和 source checkout：

```bash
SET_ID='B4a' # 替换为用户给出的唯一输入
SKILL_DIR="$PWD/.agents/skills/sync-pocket-set"
WORK_ROOT=$(mktemp -d /tmp/pocket-set.XXXXXX)
SOURCE_ROOT="$WORK_ROOT/ptcgp-assets"
MANIFEST="$WORK_ROOT/set.manifest.json"

git clone --depth 1 --filter=blob:none --sparse \
  https://github.com/shelken/ptcgp-assets "$SOURCE_ROOT"
git -C "$SOURCE_ROOT" sparse-checkout set metadata

node "$SKILL_DIR/scripts/discover-pocket-set.mjs" \
  --set-id "$SET_ID" \
  --source-root "$SOURCE_ROOT" \
  --output "$MANIFEST"
```

`P-B`、`Promo-B` 和 `PROMO-B` 会归一为项目 ID `P-B`、source ID `PROMO-B`。

发现脚本自动确定：

- 大小写准确的 source/project ID；
- set 文件名、total、九种语言的 set/pack 名；
- booster SKU 与稳定 slug；
- 连续的卡牌 metadata；
- 完整可用的卡图语言和源格式；
- 完整可用的 pack/logo 语言；
- 精确 R2 对象数；
- 素材仓库完整 commit。

读取 [references/manifest.md](references/manifest.md)。manifest 初始状态必须是
`needs-research`，不能直接改成 `ready`。

## 3. 联网研究门禁

对时效性事实必须联网。优先级：

1. Pokémon 官方公告、游戏内一手数据；
2. 固定版本的游戏资源或公开数据仓库；
3. Limitless 等完整卡表用于交叉验证。

必须核实并回填：

- `set.releaseDate`：正式发布日期，格式 `YYYY-MM-DD`；
- `set.official`：正式编号数量，不含 secret cards；
- `metadata.detailsFile`：覆盖全部卡牌的本地英文详细 metadata；
- `metadata.detailsSource`：repo、40 位 commit、license 和固定文件 URL；
- `research.evidence`：每个 `research.required` 字段对应的 URL 证据；
- `research.verifiedAt`：本次核实时间。

详细 metadata 必须包含规则文本、招式、能量、伤害、illustrator、flavor text
等生成 `Card` 所需信息。先联网确认当前仍完整、许可证允许使用的来源；可复用
PocketDex-Codex 或更可靠的新来源，但不得假设旧来源一定已更新。

### 多源交叉验证

生产写入前必须建立 source registry 和逐字段 provenance：

- 编号、数量、稀有度、卡类型、能量、伤害和结构字段至少由两个独立候选源支持；
- RaenonX 的本地化字段必须与 canonical card ID/collection number 一一 join，不能按页面顺序盲合并；
- localized effect template 必须以英文 canonical 作为 token binding oracle，再用目标语言模板渲染；`Num:Int`、`Gr:Count`、`Text:CardName`、`Text:AttackName`、`Text:SpecialCondition` 等 token 未绑定时，停止，不删除标签或回退英文；
- 冲突写入 review overlay，保留候选、选择值、证据和裁决原因；任一必填冲突未裁决，不得进入 metadata/R2。

下载后验证：

- 数量严格等于 `set.total`；
- ID 严格连续，且 set 前缀与 `metadata.detailsSetId` 一致；
- 内容确实属于目标集合；
- 来源 URL 固定到 manifest 中的 commit；
- 不用搜索摘要或二手文章替代源文件。

所有字段有证据后才设置：

```json
{
  "status": "ready"
}
```

来源冲突无法消解、详细机制数据不完整或许可证不清楚时停止并报告缺口；禁止猜测。

## 4. 下载素材与中文术语

下载 manifest 中声明的全部原图：

```bash
ASSET_INPUT="$WORK_ROOT/assets"

node "$SKILL_DIR/scripts/download-assets.mjs" \
  --manifest "$MANIFEST" \
  --output "$ASSET_INPUT"
```

下载器会按 manifest 的真实卡图格式处理 PNG/WebP，并验证文件 magic bytes。

若 `zh-TW` 或 RaenonX 任一本地化卡图完整，只抽取几个代表性 case，使用
`$paddleocr-text-recognition` 通过 PaddleOCR API 辅助确认图文一致性：

```bash
# 仅把挑出的代表性图片送入 PaddleOCR skill，保存原始 JSON 后再审计：
node .agents/skills/merge-pocket-card-sources/scripts/audit-raenonx-ocr.mjs \
  --overlay meta/pocket-source-reviews/B4/raenonx.overlay.json \
  --ocr-root "$WORK_ROOT/ocr" \
  --output meta/pocket-source-reviews/B4/raenonx.ocr.audit.json
```

OCR 只能通过 PaddleOCR skill 执行，不得用本地视觉、ImageMagick OCR 或其他识别器替代；API 失败就停止整个同步。
只抽取几个代表性 pilot case，覆盖卡号/卡名、招式/特性名和可读规则文本的大致对应，不要求对最终全量卡图逐张 OCR；
把原始 OCR JSON 通过 `persist-ocr-evidence.mjs` 固化到 review 目录，并在 provenance 标明 image URL、语言、
OCR 结果路径和 mismatch。OCR 是证据而不是自动改字工具：低置信度、unresolved、ambiguous 和 diagnostics
只记录到 review，不能凭 OCR 噪声猜专名或改写 metadata。

## 5. 生成 metadata 与多语言

导入器从 `ptcgp-assets` 读取九语名称、进化前名称、稀有度和 pack 归属，从
固定的详细来源读取英文机制数据。

所有本地化输入同样属于审计输入：game-assets/template checkout、PokeAPI CSV、百科
HTML 和人工翻译表都要记录固定 commit/抓取时间及 SHA-256，并进入最终 input hashes。
只固定英文 details 和卡图来源，不能证明本地化结果可复现。

RaenonX 本地化导入使用项目内的 source adapter；先生成 `raenonx.snapshot.json` 和
`raenonx.overlay.json`，通过十卡 pilot，再扩大到 B4 全量。`de/it` 保留已有数据，
RaenonX 不存在的 localized field 不得用英文补齐，也不得把“源内覆盖完整”写成“七语完整”。
B4 全量写入前还要运行 `audit-raenonx-b4-cross-source.mjs`，把既有多源 baseline 与
RaenonX stable mechanics 的逐卡结果固化到 `raenonx.cross-source.json`。

先 dry-run：

```bash
POCKET_TRANSLATION_TODO="$WORK_ROOT/translations.todo.json" \
POCKET_TRANSLATION_GLOSSARY="$WORK_ROOT/terms.json" \
node "$SKILL_DIR/scripts/import-metadata.mjs" \
  --manifest "$MANIFEST"
```

按照待办更新 `scripts/tmp/pocket-translations.json`，再重复 dry-run，直到
`todoStrings: 0`。`--write` 必须是两阶段提交：先在内存构建并验证全部卡；只要
`todoStrings > 0` 就以非零退出且不得改 metadata。若当前环境提供
`add-pocket-translations`，同时遵循该 skill。

翻译要求：

- 目标语言：`fr/es/it/de/pt-br/zh-tw`；
- Pokémon、Trainer、Item、Ability、Attack、Set、Booster 使用官方专名；
- 卡名、`evolveFrom` 和 pack 名优先采用游戏资源中的本地化；
- 详细来源与游戏资源的英文卡名不一致时，先核实地区形态/特殊形态，并补
  `FORM_RULES` 或 `FORM_NAME_OVERRIDES`；不要丢掉形态前缀；
- 每张卡必须有可映射的 rarity；未知 rarity 直接停止，不能让 importer 或下游
  gacha 静默跳过该卡；
- 规则文本保持伤害、能量、状态、回合条件和占位符语义；
- 英文占位、漏语言或未经核实的机器翻译都不算完成。

翻译清零后写入：

```bash
POCKET_TRANSLATION_TODO="$WORK_ROOT/translations.todo.json" \
POCKET_TRANSLATION_GLOSSARY="$WORK_ROOT/terms.json" \
node "$SKILL_DIR/scripts/import-metadata.mjs" \
  --manifest "$MANIFEST" \
  --write
```

读取 [references/data-contract.md](references/data-contract.md)，特别检查 booster：

- Set 级始终声明真实 booster；
- 单 booster set 的卡牌不重复写 `boosters`；
- 多 booster set 每张卡按来源显式写数组，非普通包掉落可为 `[]`。

不要在 compiler 中添加目标 set 特判。

## 6. 转换 WebP 并预检 R2

```bash
ASSET_OUTPUT="$WORK_ROOT/r2"
UPLOAD_RESULTS="$WORK_ROOT/upload-results"

node "$SKILL_DIR/scripts/prepare-r2-assets.mjs" \
  --manifest "$MANIFEST" \
  --input "$ASSET_INPUT" \
  --output "$ASSET_OUTPUT"
```

脚本会依次查找本仓库 `sharp`、唯一的 sibling 下游 `../tcgp` 中的 `sharp`，
也可用 `SHARP_ENTRY` 指向现有安装；不要仅为本步骤擅自升级依赖。

转换约定：

- card high：不放大、保留源尺寸、WebP quality 90；
- card low：宽 245px、保持比例、不放大、WebP quality 82；
- booster logo/artwork：WebP quality 90；
- `Content-Type: image/webp`；
- `Cache-Control: public, max-age=31536000, immutable`。

上传前验证本地 object manifest 并检查未知覆盖：

```bash
node "$SKILL_DIR/scripts/preflight-r2.mjs" \
  --manifest "$MANIFEST" \
  --objects "$ASSET_OUTPUT/manifest.json" \
  --receipts "$UPLOAD_RESULTS"
```

已有本次 receipts 的对象可幂等跳过；公开域名已存在但没有本次 receipts 的 key
视为未知碰撞，禁止覆盖。

## 7. 上传到既有 game R2

`$sync-pocket-set <ID>` 的完整同步语境已包含本步骤，不再让用户逐项确认
bucket、域名或每张图片。若 Cloudflare 登录态/权限缺失，报告为唯一凭据阻塞；
不得上传到新 bucket 或改域名绕过。

```bash
export POCKET_R2_OUTPUT_ROOT="$ASSET_OUTPUT"
export POCKET_R2_RESULTS_ROOT="$UPLOAD_RESULTS"
export POCKET_R2_BUCKET="game"

find "$ASSET_OUTPUT" -type f -name '*.webp' -print0 |
  xargs -0 -n 1 -P 4 zsh "$SKILL_DIR/scripts/upload-r2-object.zsh"
```

上传器为每个成功对象保存 `.ok` receipt。失败后可原命令重试，已成功对象不会重复写入。

## 8. 强制验证

先检查本地 metadata、准备清单、upload receipts 和公网对象：

```bash
node "$SKILL_DIR/scripts/audit-pocket-set.mjs" \
  --manifest "$MANIFEST"

node "$SKILL_DIR/scripts/verify-r2.mjs" \
  --manifest "$MANIFEST" \
  --objects "$ASSET_OUTPUT/manifest.json" \
  --receipts "$UPLOAD_RESULTS"

# 生产前还必须通过：
# 1) source registry / provenance 的多源冲突为 0；
# 2) RaenonX overlay 的 token binding 与源覆盖审计；
# 3) PaddleOCR image-text consistency gate；
# 4) 下游各语言索引与实际 R2 image-language mapping 完全一致。

git diff --check
npm run validate

node --test \
  .agents/skills/merge-pocket-card-sources/scripts/persist-ocr-evidence.test.mjs \
  .agents/skills/merge-pocket-card-sources/scripts/sync-downstream-locales.test.mjs

if rg -n '(authorization=|x-amz-signature=|Bearer[[:space:]]+|token=)' \
  meta/pocket-source-reviews; then
  echo 'credential-like material found in persisted review evidence' >&2
  exit 1
fi
```

若在修复旧 set 时没有 discovery manifest，必须显式传入
`--booster-ids`、`--pack-image-languages` 与 `--image-origin`；不能因为走手工审计路径而
跳过 booster `logo` / `artwork_front` 门禁。

`verify-r2.mjs` 必须确认：

- 本地 keys 与 manifest 推导结果完全一致；
- 每个对象都有 upload receipt；
- 首张、中间、末张的各语言 high/low 可公网读取；
- 所有 booster 的各语言 logo/artwork 可公网读取；
- 响应是 WebP 且带一年 immutable cache。

交付前以最挑剔的审查者检查：

- set/card/图片数量、ID 与 source commit 是否闭环；
- official/total 是否混淆；
- 多语言是否全量且专名可信；
- `translations.todo.json` 是否为空，本地化输入 hash 是否进入审计；
- 每个 advertised API language 是否真的编译出目标 set；
- 每个要求的图片语言是否有全量对象，locale 是否引用自己的真实语言而非统一英文；
- 单包/多包 booster 规则是否正确；
- Card image 是不含尺寸后缀的 base URL；
- Set booster 图片是完整 `.webp` URL；
- 没有 GitHub Raw 生产 URL；
- 没有签名 URL、token、cookie、本机绝对路径或其他临时 capability；
- 没有改下游或夹带其他工作树改动。
- 仓库只保留项目既定的单一包管理器和 lockfile；不能因一次本地验证引入第二套依赖真源。

任何目标范围内失败都先修复并重跑；不能只凭 build 通过宣称完成。

若用户明确把下游应用纳入范围，还必须运行下游的 `card-catalog:test`。该测试要求
全部卡片 key 与 `cardRarity.json + cardRarity.additions.json` 完全一致；新增 set
缺少任意 rarity、rarity code 非法或 runtime 未加载增量索引都不能交付。

## 9. 发布与报告

仅在用户明确要求时 commit/push。显式暂存目标 set、必要 schema/compiler
变更、翻译映射和本 skill 的目标文件；禁止 `git add -A`。

最终报告：

- set ID、official/total、release date、booster 数；
- 两个数据来源的 repo + commit 和关键事实证据；
- metadata 与翻译覆盖数；
- 若下游在范围内，rarity 覆盖数和 gacha 回归结果；
- R2 bucket、对象数、公开 URL 样例；
- audit、R2 verify、`npm run validate` 结果；
- commit/push 状态。

## 禁止事项

- 不要求用户重复提供能自动发现的 set 属性；
- 不把浮动分支、搜索摘要或记忆当事实源；
- 不在 manifest 仍为 `needs-research` 时写 metadata；
- 不用 GitHub Raw 作为生产图片 CDN；
- 不覆盖未知 R2 对象；
- 不把单包集合的逐卡 booster 当必填；
- 不在下游 rarity 索引未覆盖新 set 时宣称下游同步完成；
- 不把整个 `P-*` set 统一当作 `pr`；逐卡根据 canonical rarity 映射；
- 不在翻译待办非零或本地化图片缺口未解决时宣称本地化完成；
- 不自动修改下游应用；
- 不在未明确要求时 commit/push。
