# Deluxe Pack: Mega（B4b）来源与复现

B4b 含 429 张卡：402 张编号卡及 27 张秘藏卡，其中 166 张平行闪卡保留独立编号、稀有度和卡面。发布日期采用 Pokémon 官方公告的 2026-09-30。九语名称与七语规则字段分别管理；ja/ko 缺少的规则明确回退英文，卡面回退英文，不将它们计为完整原生规则语言。

## 来源与裁决

总表为 `../B4b.sources.json`，固定响应及字典摘要为 `B4b.snapshots.json`。

- flibustier 固定提交提供编号、实体和稀有度索引；B4a 错误包名被拒绝，保留 Team Rocket's Ambition。
- RaenonX 游戏资源提供实体、机制、画师和可取得语言的名称／规则模板。DeckGym 仅作独立机制验证，没有将它的数据库作为本地化文案来源。
- PokeOS 卡面提供七种语言的文字和图像证据；其发布日期和三处秘藏画师冲突有明确裁决。
- PokeAPI 描述译文只接受同物种、同版本且英文严格相同的匹配，记录于 `B4b.flavor-localization-review.json`。随后按 Pocket 原语言卡面逐组复核；即使英文相同但译文措辞不同，也由单独卡面审查覆盖，不用相似英文或机器翻译充当原生文本。
- Pokémon 官方 press 和官网 srcset 提供可取得的原生高清素材，源文件字节、尺寸、SHA-256 和用途限制均在 `B4b.hd.sources.json`。素材著作权属于原权利人；上游程序的 MIT 许可不代表卡面版权许可。官方 press 的 Media Usage Guidelines 也没有被标记为无限制授权。

## 图片质量与语言边界

| 素材 | 选定原生尺寸与范围 |
| --- | --- |
| 包图 | 745×1433；en/fr/es 原生各语素材，it/de/pt-br/zh-tw 明确使用英文包图 |
| 透明 logo | en/fr/es 为 1000×440；其余四语保留原生 256×113，本轮未找到可验证的更大原图 |
| 卡面 | 英文／西语各九张为官方 734×1024；其余卡面为现有游戏原生 367×512，全套七语各 429 张齐全 |
| 下游主页图 | 1920×1080，官网原生 WebP；没有放大低清素材 |

官方九张高清卡对应 259、307、333、406、408、411、417、418、424。身份通过全 429 张候选卡图比对以及画师、机制、平行闪卡底色复核绑定，不能仅按名称匹配，也没有声称从卡面读到 collection number。

`B4b.r2.*.json` 保留最初 6,020 个对象的预检、上传及公网字节验证记录。`B4b.hd.*.json` 单独记录 46 个高清对象；新路径带源内容摘要，避免旧 immutable 地址的缓存继续返回低清图。没有删除旧对象。

`B4b.selected-images.manifest.json` 是最终选定的 6,020 个 API 对象；`B4b.image-evidence.json` 绑定每张源图及选定 high/low 路径。七语卡面完整与全套高清是不同结论；上表保留未取得高清源的缺口。

## 重生成元数据

`existing-cards.json`、`reuse-review.json` 是初次采集的冻结输入。`B4b.source-file-hashes.json` 保存对应的旧文件哈希，生成器不会拿后来修改的工作树文件冒充实际采用的来源。

准备一个输入目录：

1. 将 `existing-cards.json` 和 `reuse-review.json` 放在输入目录根下。
2. 建立 `sources/`，将本目录七份 `raenonx.*.dictionary.json` 复制进去。
3. 将 `B4b.source-file-hashes.json` 复制为 `sources/source-file-hashes.json`。
4. 按 `B4b.snapshots.json` 下载固定的 flibustier.b4b.json、raenonx.master.json、deckgym.json、pokeos.cards.json，保存到 `sources/`；`B4b.source-config.json` 会逐个核对 SHA-256。
5. 按配置提供哈希绑定的 PokeAPI flavor review 和卡面 native review。

从仓库根目录运行，以下目录名仅为复现示例：

```sh
node .agents/skills/merge-pocket-card-sources/scripts/build-pocket-reprints.mjs \
  --set-config meta/pocket-source-reviews/B4b/B4b.source-config.json \
  --input-root ./reproduction-input \
  --output-root ./reproduction-output \
  --flavor-review meta/pocket-source-reviews/B4b/B4b.flavor-localization-review.json \
  --native-review meta/pocket-source-reviews/B4b/B4b.native-card-face-review.json
```

生成器按 number、游戏 cardId 和 entityId 绑定数据；校验机制和能量 token，保留伤害后缀，并拒绝数字绑定歧义、变更的固定输入、缺少的审查文件和不匹配的 previous value。卡面 overlay 只修改已有的非英文文本字段，不能改动英文机制、身份、数值或图片。

审查数据和固定上游内容进入仓库；一次性日志、浏览器快照及截图保留在本地测试输出中。编译结果按现有 `server/generated` 流程生成。运行验证和 PR/CI/合并状态由对应提交及 GitHub 检查记录提供，本文不把某次本机检查快照当成持续保证。

配置绑定的 set 审查命令（包括高清替代路径）：

```sh
node .agents/skills/sync-pocket-set/scripts/audit-pocket-set.mjs \
  --manifest meta/pocket-source-reviews/B4b/B4b.manifest.json \
  --set-config meta/pocket-source-reviews/B4b/B4b.source-config.json
```
