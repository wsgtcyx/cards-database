import glob
import re
import json
import os

def extract_names():
    files = glob.glob('data/Pokémon TCG Pocket/Genetic Apex/*.ts')
    files.sort()
    
    results = []
    
    for f_path in files:
        with open(f_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Regex to find the name object
        # Looking for "name: {" then capturing content until closing brace
        match = re.search(r'name:\s*({[^}]+})', content, re.DOTALL)
        if match:
            name_str = match.group(1)
            # loosely parse the JS object to dict
            names = {}
            lines = name_str.split('\n')
            for line in lines:
                line = line.strip()
                if ':' in line:
                    key, val = line.split(':', 1)
                    key = key.strip().strip('"\'')
                    val = val.strip().strip(',').strip('"\'')
                    names[key] = val
            
            results.append({
                'file': os.path.basename(f_path),
                'path': f_path,
                'names': names
            })
            
    with open('genetic_apex_names.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print("Exported to genetic_apex_names.json")

if __name__ == '__main__':
    extract_names()
