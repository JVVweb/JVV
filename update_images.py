import os
import re
import unicodedata

base_dir = "/Users/alvarogarayar/JVV"
public_talents = os.path.join(base_dir, "public", "Talents")
public_events = os.path.join(base_dir, "public", "Events")

def get_images(folder_path):
    if not os.path.isdir(folder_path): return []
    files = [f for f in os.listdir(folder_path) if not f.startswith('.') and f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))]
    return sorted(files)

def get_main_image(files):
    for f in files:
        f_lower = f.lower()
        if 'main' in f_lower or 'portada' in f_lower: return f
    for f in files:
        if '1' in f or '01' in f: return f
    return files[0] if files else ""

def normalize(text):
    text = unicodedata.normalize('NFKD', text).encode('ASCII', 'ignore').decode('utf-8').lower()
    text = re.sub(r'[^a-z0-9]', ' ', text)
    text = text.replace('jvv', '').strip()
    return text

def process_file_by_name(file_path, dirs_path, name_key, is_talent=False):
    if not os.path.exists(file_path): return
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    dirs = [d for d in os.listdir(dirs_path) if os.path.isdir(os.path.join(dirs_path, d))]
    dir_map = {normalize(d): d for d in dirs}
    
    pattern = rf'''(?:'|")?{name_key}(?:'|")?\s*:\s*(['"])(.*?)\1'''
    
    last_end = 0
    new_content = ""
    
    matches = list(re.finditer(pattern, content))
    for i, match in enumerate(matches):
        start = match.start()
        end = matches[i+1].start() if i+1 < len(matches) else len(content)
        
        block = content[start:end]
        name = match.group(2)
        norm_name = normalize(name)
        
        best_match = None
        best_score = 0
        for norm_dir, dname in dir_map.items():
            tokens_name = set(norm_name.split())
            tokens_dir = set(norm_dir.split())
            common = tokens_name.intersection(tokens_dir)
            score = len(common)
            if "".join(norm_name.split()) in "".join(norm_dir.split()) or "".join(norm_dir.split()) in "".join(norm_name.split()):
                score += 10
            if is_talent and norm_name in norm_dir:
                score += 20
                
            if score > best_score:
                best_score = score
                best_match = dname
                
        if best_match and best_score >= 2:
            print(f"Mapped {name} -> {best_match} (score {best_score})")
            images = get_images(os.path.join(dirs_path, best_match))
            if images:
                main_img = get_main_image(images)
                
                if is_talent:
                    main_img_path = f'/Talents/{best_match}/{main_img}'
                    gallery_paths = [f'/Talents/{best_match}/{img}' for img in images]
                else:
                    main_img_path = f'/Events/{best_match}/{main_img}'
                    gallery_paths = [f'/Events/{best_match}/{img}' for img in images]
                    
                gallery_str = '[\n      ' + ',\n      '.join(f"'{p}'" for p in gallery_paths) + '\n    ]'

                block = re.sub(r'''(?:'|")?image(?:'|")?\s*:\s*(['"]).*?\1''', f"image: '{main_img_path}'", block, count=1)
                
                if re.search(r'''(?:'|")?gallery(?:'|")?\s*:\s*\[''', block):
                    block = re.sub(r'''(?:'|")?gallery(?:'|")?\s*:\s*\[.*?\]''', f"gallery: {gallery_str}", block, flags=re.DOTALL, count=1)
                
        new_content += content[last_end:start] + block
        last_end = end
        
    new_content += content[last_end:]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

print("Updating talent.ts...")
process_file_by_name(os.path.join(base_dir, "src/data/talent.ts"), public_talents, "name", is_talent=True)
print("Updating Events.tsx...")
process_file_by_name(os.path.join(base_dir, "src/pages/Events.tsx"), public_events, "title", is_talent=False)
print("Updating EventDetail.tsx...")
process_file_by_name(os.path.join(base_dir, "src/pages/EventDetail.tsx"), public_events, "title", is_talent=False)
print("Done!")
