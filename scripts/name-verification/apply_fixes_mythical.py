import os

corrections = {
    "062.ts": {"zh-tw": "聒噪鳥"},
    "063.ts": {"zh-tw": "秘密琥珀"},
    "065.ts": {"zh-tw": "幻之石板"},
    "066.ts": {"zh-tw": "新手調查員"},
    "067.ts": {"zh-tw": "青綠"},
    "070.ts": {"zh-tw": "君主蛇"},
    "071.ts": {"zh-tw": "夜盜火蜥"},
    "072.ts": {"zh-tw": "水伊布"},
    "075.ts": {"zh-tw": "時拉比 ex"},
    "076.ts": {"zh-tw": "暴鯉龍 ex"},
    "077.ts": {"zh-tw": "夢幻 ex"},
    "079.ts": {"zh-tw": "大比鳥 ex"},
    "080.ts": {"zh-tw": "新手調查員"},
    "081.ts": {"zh-tw": "青綠"},
    "083.ts": {"zh-tw": "夢幻 ex"},
    "085.ts": {"zh-tw": "時拉比 ex"},
    "086.ts": {"zh-tw": "夢幻 ex"}
}

base_dir = "data/Pokémon TCG Pocket/Mythical Island/"

for filename, fixes in corrections.items():
    path = os.path.join(base_dir, filename)
    if not os.path.exists(path):
        print(f"File not found: {path}")
        continue
    
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    in_name_block = False
    name_block_processed = False # Flag to ensure we only touch the first name block (Card Name)
    
    for line in lines:
        stripped = line.strip()
        
        # Start of a name block
        if "name: {" in line and not name_block_processed:
            in_name_block = True
        
        if in_name_block:
            # Check for end of block
            # We assume the name object ends with "}," or just "}"
            if "}," in line or (stripped == "}" and "," not in line) or (stripped == "},"):
                # We are ending the block. 
                # BE CAREFUL: The closing brace line itself is NOT part of the content we want to skip/modify usually, 
                # but we are just appending it.
                pass
            
            # Try to fix lines within the block
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
            
            # If this line closes the block, mark as processed and exit block mode
            if "}" in stripped:
                in_name_block = False
                name_block_processed = True
        else:
            new_lines.append(line)
            
    with open(path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

print("Batch 1 corrections applied (Safe Mode).")
