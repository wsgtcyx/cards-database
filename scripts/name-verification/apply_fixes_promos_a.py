import os

# Map filename -> { "zh-tw": "CorrectName" }
corrections = {
    "002.ts": {"zh-tw": "速度強化"},
    "007.ts": {"zh-tw": "博士的研究"},
    "013.ts": {"zh-tw": "巴大蝶"},
    "014.ts": {"zh-tw": "拉普拉斯 ex"},
    "018.ts": {"zh-tw": "妙蛙花"},
    "019.ts": {"zh-tw": "甲賀忍蛙"},
    "020.ts": {"zh-tw": "鬼斯通"},
    "021.ts": {"zh-tw": "大岩蛇"},
    "022.ts": {"zh-tw": "胖丁"},
    "025.ts": {"zh-tw": "火焰鳥 ex"},
    "027.ts": {"zh-tw": "藤藤蛇"},
    "028.ts": {"zh-tw": "火神蛾"},
    "029.ts": {"zh-tw": "水箭龜"},
    "031.ts": {"zh-tw": "奇諾栗鼠"},
    "034.ts": {"zh-tw": "波加曼"},
    "035.ts": {"zh-tw": "草苗龜"},
    "036.ts": {"zh-tw": "電擊魔獸"},
    "037.ts": {"zh-tw": "克雷色利亞 ex"},
    "038.ts": {"zh-tw": "夢妖"},
    "039.ts": {"zh-tw": "盔甲鳥"},
    "040.ts": {"zh-tw": "小火焰猴"},
    "041.ts": {"zh-tw": "波克比"},
    "042.ts": {"zh-tw": "達克萊伊 ex"},
    "043.ts": {"zh-tw": "櫻花兒"},
    "044.ts": {"zh-tw": "雷丘"},
    "045.ts": {"zh-tw": "朝北鼻"},
    "046.ts": {"zh-tw": "圓陸鯊"},
    "047.ts": {"zh-tw": "姆克鷹"},
    "049.ts": {"zh-tw": "卡比獸"},
    "050.ts": {"zh-tw": "超夢 ex"},
    "051.ts": {"zh-tw": "摩托蜥"},
    "052.ts": {"zh-tw": "新葉喵"},
    "053.ts": {"zh-tw": "浮潛鼬"},
    "054.ts": {"zh-tw": "巴布土撥"},
    "055.ts": {"zh-tw": "怪力"},
    "056.ts": {"zh-tw": "阿柏蛇"},
    "057.ts": {"zh-tw": "大牙狸"},
    "058.ts": {"zh-tw": "帕奇利茲"},
    "059.ts": {"zh-tw": "利歐路"},
    "060.ts": {"zh-tw": "蛋蛋"},
    "061.ts": {"zh-tw": "呱呱泡蛙"},
    "062.ts": {"zh-tw": "大蔥鴨"},
    "064.ts": {"zh-tw": "烈空坐 ex"},
    "065.ts": {"zh-tw": "烈空坐 ex"},
    "066.ts": {"zh-tw": "謎擬Q"},
    "067.ts": {"zh-tw": "科斯莫古"},
    "068.ts": {"zh-tw": "鬃岩狼人"},
    "069.ts": {"zh-tw": "阿羅拉椰蛋樹"},
    "071.ts": {"zh-tw": "好勝蟹"},
    "072.ts": {"zh-tw": "阿羅拉臭泥"},
    "073.ts": {"zh-tw": "銃嘴大鳥"},
    "074.ts": {"zh-tw": "捷拉奧拉"},
    "075.ts": {"zh-tw": "紙御劍"},
    "076.ts": {"zh-tw": "砰頭小丑"},
    "077.ts": {"zh-tw": "電束木"},
    "078.ts": {"zh-tw": "奈克洛茲瑪（拂曉之翼）"},
    "079.ts": {"zh-tw": "奈克洛茲瑪（黃昏之鬃）"},
    "080.ts": {"zh-tw": "壘磊石"},
    "082.ts": {"zh-tw": "毒貝比"},
    "083.ts": {"zh-tw": "童偶熊"},
    "084.ts": {"zh-tw": "卡璞・鳴鳴 ex"},
    "085.ts": {"zh-tw": "迷你冰"},
    "086.ts": {"zh-tw": "雷伊布"},
    "087.ts": {"zh-tw": "霜奶仙"},
    "088.ts": {"zh-tw": "哈克龍"},
    "089.ts": {"zh-tw": "差不多娃娃"},
    "090.ts": {"zh-tw": "托戈德瑪爾"},
    "091.ts": {"zh-tw": "藏飽栗鼠"},
    "093.ts": {"zh-tw": "寶寶丁"},
    "094.ts": {"zh-tw": "墨海馬"},
    "095.ts": {"zh-tw": "燈籠魚"},
    "096.ts": {"zh-tw": "黑魯加"},
    "097.ts": {"zh-tw": "袋獸"},
    "098.ts": {"zh-tw": "幸福蛋 ex"},
    "099.ts": {"zh-tw": "瑪力露"},
    "100.ts": {"zh-tw": "瑪狃拉"}
}

base_dir = "data/Pokémon TCG Pocket/Promos-A/"

for filename, fixes in corrections.items():
    path = os.path.join(base_dir, filename)
    if not os.path.exists(path):
        print(f"File not found: {path}, skipping")
        continue

    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    in_name_block = False
    name_block_processed = False
    
    for line in lines:
        stripped = line.strip()
        
        # Start of a name block
        if "name: {" in line and not name_block_processed:
            in_name_block = True
        
        if in_name_block:
            # End of block check
            if "}," in line or (stripped == "}" and "," not in line) or (stripped == "},"):
                pass
            
            replaced = False
            for lang, new_val in fixes.items():
                if f'"{lang}":' in stripped or f"'{lang}':" in stripped or f"{lang}:" in stripped:
                    indent = line[:line.find(stripped)]
                    new_lines.append(f'{indent}"{lang}": "{new_val}",\n')
                    print(f"Fixed {filename}: {lang} -> {new_val}")
                    replaced = True
                    break
            
            if not replaced:
                new_lines.append(line)
            
            if "}" in stripped:
                in_name_block = False
                name_block_processed = True
        else:
            new_lines.append(line)
            
    with open(path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

print("Batch 2 corrections applied.")
