import json
import os
import glob
import re

# --- Configuration ---
TARGET_DIRS = [
    "Eevee Grove",
    "Secluded Springs",
    "Triumphant Light",
    "Extradimensional Crisis",
    "Space-Time Smackdown",
    "Celestial Guardians",
    "Deluxe Pack: ex",
    "Mega Rising",
    "Wisdom of Sea and Sky",
    "Mythical Island",
    "Shining Revelry"
]

BASE_PATH = "data/Pokémon TCG Pocket"

# --- Data Loading ---
def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

# Global Maps
EN_LIST = []
ZH_LIST = []
NAME_MAP = {}

PREFIXES = {
    "Alolan ": "阿羅拉",
    "Galarian ": "伽勒爾",
    "Hisuian ": "洗翠",
    "Paldean ": "帕底亞",
    "Dark ": "黑暗",
    "Rocket's ": "火箭隊的",
    "Mega ": "超級",
    "Primal ": "原始"
}

SPECIAL_MAP = {
    "Nidoran♀": "尼多蘭",
    "Nidoran♂": "尼多朗",
    "Farfetch'd": "大蔥鴨",
    "Mr. Mime": "魔牆人偶",
    "Mime Jr.": "魔尼尼",
    "Type: Null": "屬性：空",
    "Tapu Koko": "卡璞・鳴鳴",
    "Tapu Lele": "卡璞・蝶蝶",
    "Tapu Bulu": "卡璞・哞哞",
    "Tapu Fini": "卡璞・鰭鰭",
    "Sirfetch'd": "蔥遊兵",
    "Mr. Rime": "踏冰人偶",
    "Great Tusk": "雄偉牙",
    "Scream Tail": "吼叫尾",
    "Brute Bonnet": "猛惡菇",
    "Flutter Mane": "振翼髮",
    "Slither Wing": "爬地翅",
    "Sandy Shocks": "沙鐵皮",
    "Iron Treads": "鐵轍跡",
    "Iron Bundle": "鐵包袱",
    "Iron Hands": "鐵臂膀",
    "Iron Jugulis": "鐵脖頸",
    "Iron Moth": "鐵毒蛾",
    "Iron Thorns": "鐵荊棘",
    "Roaring Moon": "轟鳴月",
    "Iron Valiant": "鐵武者",
    "Walking Wake": "波盪水",
    "Iron Leaves": "鐵斑葉",
    "Gouging Fire": "破空焰",
    "Raging Bolt": "猛雷鼓",
    "Iron Boulder": "鐵磐岩",
    "Iron Crown": "鐵頭殼",
    "Terapagos": "太樂巴戈斯",
    "Pecharunt": "桃歹郎",
    "Helix Fossil": "貝殼化石",
    "Dome Fossil": "甲殼化石",
    "Old Amber": "秘密琥珀",
    "Erika": "莉佳",
    "Misty": "小霞",
    "Blaine": "夏伯",
    "Koga": "阿桔",
    "Giovanni": "坂木",
    "Brock": "小剛",
    "Sabrina": "娜姿",
    "Lt. Surge": "馬志士",
    "Red Card": "紅牌",
    "Professor's Research": "博士的研究",
    "X Speed": "速度強化",
    "Hand Scope": "手持瞄準鏡",
    "Potion": "傷藥",
    "Poke Ball": "精靈球",
    "Poké Ball": "精靈球",
    "Pokedex": "圖鑑",
    "Pokédex": "圖鑑",
    "Blue": "青綠",
    "Leaf": "葉子",
    "Mew": "夢幻",
    "Celebi": "時拉比",
    "Mythical Slab": "幻之石板",
    "Budding Expeditioner": "新手調查員",
    "Fisher": "釣魚老手",
    "Hiker": "登山男",
    "May": "小遙",
    "Fantina": "梅麗莎",
    "Cyrus": "赤日",
    "Lyra": "琴音",
    "Silver": "小銀",
    "Red": "赤紅",
    "Irida": "珠貝",
    "Mars": "伙星",
    "Lusamine": "露莎米奈",
    "Iono": "奇樹",
    "Lisia": "琉琪亞",
    "Copycat": "模仿少女",
    "Jasmine": "阿蜜",
    "Will": "一樹",
    "Hala": "哈拉",
    "Marlon": "西子伊",
    "Lillie": "莉莉艾",
    "Gladion": "格拉吉歐",
    "Rescue Scarf": "救援圍巾",
    "Rocky Helmet": "凸凸頭盔",
    "Giant Cape": "巨大的斗篷",
    "Rare Candy": "神奇糖果",
    "Leaf Cape": "葉隱披風",
    "Elemental Switch": "屬性轉換",
    "Cover Fossil": "背蓋化石",
    "Plume Fossil": "羽毛化石",
    "Heavy Helmet": "重型頭盔",
    "Sitrus Berry": "文柚果",
    "Prank Spinner": "惡作劇輪盤",
    "Flame Patch": "火補丁",
    "Lucky Mittens": "消災手套",
    "Squirt Bottle": "傑尼龜噴壺",
    "Dark Pendant": "黑暗墜飾",
    "Steel Apron": "鋼鐵圍裙",
    "Hitting Hammer": "猛擊之鎚",
    "Whitney": "小茜",
    "Barry": "阿馴",
    "Adaman": "剛石",
    "Celestic Town Elder": "神和鎮長老",
    "Repel": "除蟲噴霧",
    "Looker": "帥哥",
    "Cynthia": "竹蘭",
    "Dawn": "小光",
    "Volkner": "電次",
    "Guzma": "古茲馬",
    "Kiawe": "卡奇",
    "Mallow": "瑪奧",
    "Lana": "水蓮",
    "Sophocles": "馬瑪內",
    "Acerola": "阿塞蘿拉",
    "Ilima": "伊利馬",
    "Team Galactic Grunt": "銀河隊手下",
    "Poison Barb": "毒針",
    "Lum Berry": "木子果",
    "Big Malasada": "大馬拉薩達",
    "Eevee Bag": "伊布袋",
    "Fishing Net": "捕魚網",
    "Beast Wall": "究極壁壘",
    "Electrical Cord": "電氣繩索",
    "Armor Fossil": "盾甲化石",
    "Skull Fossil": "頭蓋化石",
    "Heat Rotom": "加熱洛托姆",
    "Wash Rotom": "清洗洛托姆",
    "Frost Rotom": "結凍洛托姆",
    "Fan Rotom": "旋轉洛托姆",
    "Mow Rotom": "除草洛托姆",
    "Rotom Dex": "洛托姆圖鑑",
    "Origin Forme Dialga": "起源帝牙盧卡",
    "Origin Forme Palkia": "起源帕路奇亞",
    "Penny": "牡丹",
    "Hau": "哈烏",
    "Leftovers": "吃剩的東西",
    "Morty": "松葉",
    "Inflatable Boat": "充氣船",
    "Memory Light": "記憶之光",
    "Traveling Merchant": "旅行商人",
    "Pokémon Communication": "寶可夢通訊"
}

def init_maps():
    global EN_LIST, ZH_LIST, NAME_MAP
    EN_LIST = load_json('en.json')
    ZH_LIST = load_json('zh_tw.json')
    
    for i, en_name in enumerate(EN_LIST):
        if i < len(ZH_LIST):
            NAME_MAP[en_name.lower()] = ZH_LIST[i]

def get_correct_zh(en_name):
    is_ex = False
    core_name = en_name.strip()
    if core_name.lower().endswith(" ex"):
        is_ex = True
        core_name = core_name[:-3].strip()
    
    prefix_zh = ""
    for p_en, p_zh in PREFIXES.items():
        if core_name.startswith(p_en):
            prefix_zh = p_zh
            core_name = core_name[len(p_en):].strip()
            break
            
    target_zh = ""
    if core_name in SPECIAL_MAP:
        target_zh = SPECIAL_MAP[core_name]
    elif core_name.lower() in NAME_MAP:
        target_zh = NAME_MAP[core_name.lower()]
    elif core_name in NAME_MAP: # Case sensitive fallback
         target_zh = NAME_MAP[core_name]
    else:
        return None
        
    final_zh = prefix_zh + target_zh
    if is_ex:
        final_zh += " ex"
        
    return final_zh

def process_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        lines = content.splitlines(keepends=True)
        
    # --- 1. Main Name Logic ---
    match_name = re.search(r'name:\s*({[^}]+})', content, re.DOTALL)
    target_zh_name = None
    if match_name:
        name_block_str = match_name.group(1)
        en_name = None
        for line in name_block_str.split('\n'):
            line = line.strip()
            if "en:" in line or '"en":' in line or "'en':" in line:
                 parts = line.split(':', 1)
                 if len(parts) > 1:
                     en_name = parts[1].strip().strip('"\'').strip(',').strip('"\'')
                     break
        if en_name:
            target_zh_name = get_correct_zh(en_name)

    # --- 2. EvolveFrom Logic ---
    match_evolve = re.search(r'evolveFrom:\s*({[^}]+})', content, re.DOTALL)
    target_zh_evolve = None
    if match_evolve:
        evolve_block_str = match_evolve.group(1)
        en_evolve = None
        
        # Simple parse for EN in evolve block
        for line in evolve_block_str.split('\n'):
            line = line.strip()
            if "en:" in line or '"en":' in line or "'en':" in line:
                 parts = line.split(':', 1)
                 if len(parts) > 1:
                     en_evolve = parts[1].strip().strip('"\'').strip(',').strip('"\'')
                     break
        
        if en_evolve:
            target_zh_evolve = get_correct_zh(en_evolve)
            # if target_zh_evolve:
            #      print(f"Found evolveFrom: {en_evolve} -> {target_zh_evolve}")
            if not target_zh_evolve:
                print(f"Warning: No translation found for evolveFrom '{en_evolve}' in {path}")

    if not target_zh_name and not target_zh_evolve:
        return False

    # --- 3. Apply Fixes ---
    new_lines = []
    
    # State flags
    in_name_block = False
    name_block_processed = False
    
    in_evolve_block = False
    evolve_block_processed = False
    
    changes_made = False
    
    for line in lines:
        stripped = line.strip()
        
        # Detect Start of Blocks
        # Ensure we don't trigger inside other blocks if formatting is weird, 
        # but usually "name: {" and "evolveFrom: {" are distinctive enough at root level of object
        
        if "name: {" in line and not name_block_processed and not in_evolve_block:
            in_name_block = True
        elif "evolveFrom: {" in line and not evolve_block_processed and not in_name_block:
            in_evolve_block = True
            
        # Process Name Block
        if in_name_block:
            if "}," in line or (stripped == "}" and "," not in line) or (stripped == "},"):
                pass # End of block imminent
            
            if target_zh_name and ('"zh-tw":' in stripped or "'zh-tw':" in stripped or "zh-tw:" in stripped):
                # Check if change needed
                current_val = stripped.split(':', 1)[1].strip().strip('"\'').strip(',').strip('"\'')
                if current_val != target_zh_name:
                    indent = line[:line.find(stripped)]
                    new_lines.append(f'{indent}"zh-tw": "{target_zh_name}",\n')
                    changes_made = True
                else:
                    new_lines.append(line)
            else:
                new_lines.append(line)
                
            if "}" in stripped:
                in_name_block = False
                name_block_processed = True
                
        # Process EvolveFrom Block
        elif in_evolve_block:
            if "}," in line or (stripped == "}" and "," not in line) or (stripped == "},"):
                pass 
            
            if target_zh_evolve and ('"zh-tw":' in stripped or "'zh-tw':" in stripped or "zh-tw:" in stripped):
                current_val = stripped.split(':', 1)[1].strip().strip('"\'').strip(',').strip('"\'')
                if current_val != target_zh_evolve:
                    indent = line[:line.find(stripped)]
                    new_lines.append(f'{indent}"zh-tw": "{target_zh_evolve}",\n')
                    changes_made = True
                    # print(f"Fixed evolveFrom in {path}")
                else:
                    new_lines.append(line)
            else:
                new_lines.append(line)

            if "}" in stripped:
                in_evolve_block = False
                evolve_block_processed = True
                
        else:
            new_lines.append(line)
            
    if changes_made:
        with open(path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        return True
    
    return False

def main():
    init_maps()
    total_fixed = 0
    
    for folder in TARGET_DIRS:
        folder_path = os.path.join(BASE_PATH, folder)
        if not os.path.exists(folder_path):
            print(f"Directory not found: {folder_path}")
            continue
            
        print(f"Processing {folder}...")
        files = glob.glob(os.path.join(folder_path, "*.ts"))
        folder_fixed = 0
        
        for f_path in files:
            if process_file(f_path):
                folder_fixed += 1
                
        print(f"  Fixed {folder_fixed} files in {folder}")
        total_fixed += folder_fixed
        
    print(f"Total files fixed: {total_fixed}")

if __name__ == "__main__":
    main()
