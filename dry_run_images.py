import os
import re

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
        if 'main' in f_lower or 'portada' in f_lower:
            return f
    for f in files:
        if '1' in f or '01' in f:
            return f
    return files[0] if files else ""

print("==== Talents ====")
talent_file = os.path.join(base_dir, "src/data/talent.ts")
if os.path.exists(talent_file):
    with open(talent_file, 'r', encoding='utf-8') as f:
        talent_content = f.read()

    talent_dirs = [d for d in os.listdir(public_talents) if os.path.isdir(os.path.join(public_talents, d))]
    
    blocks = talent_content.split('  {\n')
    matched_tdirs = set()
    for i in range(1, len(blocks)):
        matched = False
        for tdir in talent_dirs:
            if tdir in blocks[i]:
                matched_tdirs.add(tdir)
                matched = True
                break
        if not matched:
            name_match = re.search(r'"name":\s*"([^"]+)"', blocks[i])
            if name_match:
                print(f"Unmatched talent block: {name_match.group(1)}")

    for tdir in talent_dirs:
        if tdir not in matched_tdirs:
            print(f"Unmatched talent directory: {tdir}")

print("\n==== Events ====")
event_file = os.path.join(base_dir, "src/pages/EventDetail.tsx")
if os.path.exists(event_file):
    with open(event_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    blocks = content.split('  {\n')
    event_dirs = [d for d in os.listdir(public_events) if os.path.isdir(os.path.join(public_events, d))]
    matched_edirs = set()
    for i in range(1, len(blocks)):
        matched = False
        for edir in event_dirs:
            if edir in blocks[i]:
                matched_edirs.add(edir)
                matched = True
                break
        if not matched:
            title_match = re.search(r'"title":\s*"([^"]+)"', blocks[i])
            if title_match:
                print(f"Unmatched event block: {title_match.group(1)}")

    for edir in event_dirs:
        if edir not in matched_edirs:
            print(f"Unmatched event directory: {edir}")
