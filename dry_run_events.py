import os
import re
import unicodedata

base_dir = "/Users/alvarogarayar/JVV"
public_talents = os.path.join(base_dir, "public", "Talents")
public_events = os.path.join(base_dir, "public", "Events")

def normalize(text):
    text = unicodedata.normalize('NFKD', text).encode('ASCII', 'ignore').decode('utf-8')
    text = text.lower()
    text = re.sub(r'[^a-z0-9]', ' ', text)
    text = text.replace('jvv', '')
    return text.strip()

print("==== Events ====")
event_file = os.path.join(base_dir, "src/pages/EventDetail.tsx")
if os.path.exists(event_file):
    with open(event_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    blocks = re.split(r'\n\s*\{\s*\n', content)
    event_dirs = [d for d in os.listdir(public_events) if os.path.isdir(os.path.join(public_events, d))]
    dir_map = {normalize(d): d for d in event_dirs}

    for i in range(1, len(blocks)):
        title_match = re.search(r'''(?:'|")?title(?:'|")?\s*:\s*(['"])(.*?)\1''', blocks[i])
        if not title_match: continue
        title = title_match.group(2)
        norm_title = normalize(title)
        
        best_match = None
        best_score = 0
        for norm_dir, edir in dir_map.items():
            tokens_title = set(norm_title.split())
            tokens_dir = set(norm_dir.split())
            common = tokens_title.intersection(tokens_dir)
            score = len(common)
            if "".join(norm_title.split()) in "".join(norm_dir.split()) or "".join(norm_dir.split()) in "".join(norm_title.split()):
                score += 10
                
            if score > best_score:
                best_score = score
                best_match = edir
                
        if best_match and best_score >= 1:
            print(f"Mapped: '{title}' -> '{best_match}' (score: {best_score})")
        else:
            print(f"UNMAPPED: '{title}'")
