import os
import re
import json
import unicodedata
import urllib.request
import urllib.parse
import time

base_dir = "/Users/alvarogarayar/JVV"
public_events = os.path.join(base_dir, "public", "Events")

def translate_es_to_en(text):
    if not text.strip(): return ""
    try:
        url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&q=' + urllib.parse.quote(text)
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        response = urllib.request.urlopen(req).read().decode('utf-8')
        data = json.loads(response)
        translated = "".join([sentence[0] for sentence in data[0]])
        return translated
    except Exception as e:
        print("Translation failed for", text[:20], e)
        return text

def normalize(text):
    text = unicodedata.normalize('NFKD', text).encode('ASCII', 'ignore').decode('utf-8').lower()
    text = re.sub(r'[^a-z0-9]', ' ', text)
    text = text.replace('jvv', '').strip()
    return text

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

# Load parsed events
with open(os.path.join(base_dir, "parsed_events.json"), "r", encoding="utf-8") as f:
    events = json.load(f)

# RIU manual text
riu_text_es = "Para dar la bienvenida al 2023, el hotel RIU Plaza de España contó con JVV para la producción de un evento muy especial. Junto a Isaac Dos Puntos, JVV creó la experiencia sensorial RIUTUAL. Con máscaras, brillo, mucho misterio y el ritmo de nuestra JVV FRiend, la Dj Alicia Galuzis, despedimos el año por todo lo alto."
for e in events:
    if "RIU" in e['title'].upper():
        e['es'] = riu_text_es

unique_events = {}
for e in events:
    norm_t = normalize(e['title'])
    if norm_t not in unique_events:
        unique_events[norm_t] = e
    else:
        if len(e['es']) > len(unique_events[norm_t]['es']):
            unique_events[norm_t] = e
            
events = list(unique_events.values())

event_dirs = [d for d in os.listdir(public_events) if os.path.isdir(os.path.join(public_events, d))]
dir_map = {normalize(d): d for d in event_dirs}

final_events = []

print(f"Processing {len(events)} unique events...")
for i, event in enumerate(events):
    title = event['title']
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

    main_img_path = ''
    gallery_paths = []
    
    if best_match and best_score >= 1:
        images = get_images(os.path.join(public_events, best_match))
        if images:
            main_img = get_main_image(images)
            main_img_path = f'/Events/{best_match}/{main_img}'
            gallery_paths = [f'/Events/{best_match}/{img}' for img in images]
    
    if not main_img_path:
        main_img_path = '/fallback.jpg'

    print(f"Translating: {title}")
    en_desc = translate_es_to_en(event['es'])
    time.sleep(0.5)

    final_events.append({
        'id': i + 1,
        'title': title,
        'category': 'EVENT',
        'date': event['date'],
        'location': 'Spain',
        'description': {
            'es': event['es'],
            'en': en_desc
        },
        'image': main_img_path,
        'gallery': gallery_paths
    })

def format_event_ts(ev):
    gall = ',\n      '.join(f"'{p}'" for p in ev['gallery'])
    gallery_str = f"[\n      {gall}\n    ]" if ev['gallery'] else "[]"
    
    title = ev['title'].replace("'", "\\'")
    es_desc = ev['description']['es'].replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n")
    en_desc = ev['description']['en'].replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n")
    
    return f"""  {{
    id: {ev['id']},
    title: '{title}',
    category: 'EVENT',
    date: {{ month: '{ev['date']['month']}', day: '{ev['date']['day']}', year: '{ev['date']['year']}' }},
    location: 'Spain',
    description: {{
      es: '{es_desc}',
      en: '{en_desc}'
    }},
    image: '{ev['image']}',
    gallery: {gallery_str}
  }}"""

ts_events = ",\n".join(format_event_ts(ev) for ev in final_events)
replacement_str = f'export const EVENTS_DATA = [\n{ts_events}\n];'
replacement_detail_str = f'const EVENTS_DETAILS_DATA = [\n{ts_events}\n];'

events_tsx = os.path.join(base_dir, "src/pages/Events.tsx")
with open(events_tsx, 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'export const EVENTS_DATA = \[\n.*?\];', lambda m: replacement_str, content, flags=re.DOTALL)
with open(events_tsx, 'w', encoding='utf-8') as f:
    f.write(content)

detail_tsx = os.path.join(base_dir, "src/pages/EventDetail.tsx")
with open(detail_tsx, 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'const EVENTS_DETAILS_DATA = \[\n.*?\];', lambda m: replacement_detail_str, content, flags=re.DOTALL)
with open(detail_tsx, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully injected all events with translations!")
