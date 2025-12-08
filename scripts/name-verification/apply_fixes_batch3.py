import json
import os

def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def main():
    corrections = load_json('corrections_batch3.json')
    base_dir = "data/Pokémon TCG Pocket/Genetic Apex/"
    
    count = 0
    
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
                        # print(f"Fixed {filename}: {lang} -> {new_val}")
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
        count += 1

    print(f"Applied corrections to {count} files.")

if __name__ == "__main__":
    main()
