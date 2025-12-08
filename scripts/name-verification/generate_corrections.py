import json
import os

def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def main():
    en_list = load_json('en.json')
    zh_list = load_json('zh_tw.json')
    
    # Create lookup map: EN -> ZH
    # Handle duplicates/forms if any? The list is flat species.
    name_map = {}
    for i, en_name in enumerate(en_list):
        if i < len(zh_list):
            name_map[en_name.lower()] = zh_list[i]
            
    current_data = load_json('genetic_apex_names.json')
    
    corrections = {}
    
    prefixes = {
        "Alolan ": "阿羅拉", # No space usually in Chinese
        "Galarian ": "伽勒爾",
        "Hisuian ": "洗翠",
        "Paldean ": "帕底亞",
        "Dark ": "黑暗",
        "Rocket's ": "火箭隊的",
    }
    
    # Heuristics for special cases found in previous batches
    special_map = {
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
        "Pokédex": "圖鑑"
    }
    
    for item in current_data:
        file = item['file']
        names = item['names']
        
        if 'en' not in names:
            continue
            
        en_raw = names['en']
        zh_current = names.get('zh-tw', '')
        
        # Parse EN name
        # 1. Check for suffix " ex"
        is_ex = False
        core_name = en_raw
        if core_name.lower().endswith(" ex"):
            is_ex = True
            core_name = core_name[:-3]
        elif core_name.lower().endswith(" v"): # Just in case
             pass # Logic to implement if needed
        
        # 2. Check prefix
        prefix_zh = ""
        for p_en, p_zh in prefixes.items():
            if core_name.startswith(p_en):
                prefix_zh = p_zh
                core_name = core_name[len(p_en):]
                break
        
        # 3. Lookup core name
        target_zh = ""
        if core_name in special_map:
            target_zh = special_map[core_name]
        elif core_name.lower() in name_map:
            target_zh = name_map[core_name.lower()]
        else:
            # Fallback or manual list check needed
            print(f"Warning: Could not correct {en_raw} ({file})")
            continue
            
        # 4. Construct full ZH Name
        final_zh = prefix_zh + target_zh
        if is_ex:
            final_zh += " ex"
            
        if final_zh != zh_current:
            corrections[file] = {"zh-tw": final_zh}
            
    with open('corrections_batch3.json', 'w', encoding='utf-8') as f:
        json.dump(corrections, f, indent=2, ensure_ascii=False)
        
    print(f"Generated {len(corrections)} corrections.")

if __name__ == "__main__":
    main()
