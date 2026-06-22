import os
import re
import json

with open("public/Textos_eventos_plain.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

events = []
current_event = None
description = []

for line in lines:
    line = line.strip()
    if not line: continue
    
    match = re.match(r'^(?:(\d{4})\s+)?(\d{2})\s+([a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,})\s+(.*)$', line)
    if match:
        if current_event:
            current_event['es'] = '\n'.join(description).strip()
            events.append(current_event)
        
        year = match.group(1) or "2025" # default to something if no year
        day = match.group(2)
        month = match.group(3)
        title = match.group(4).strip()
        
        current_event = {
            'title': title,
            'date': { 'month': month.upper(), 'day': day, 'year': year },
            'category': 'EVENT'
        }
        description = []
    else:
        if current_event and not line.startswith('Helvetica') and not line.startswith('*'):
            clean_line = re.sub(r'\*HYPERLINK\s*"[^"]+"\s*', '', line)
            clean_line = clean_line.replace('HYPERLINK', '')
            if clean_line.strip():
                description.append(clean_line.strip())

if current_event:
    current_event['es'] = '\n'.join(description).strip()
    events.append(current_event)

with open("parsed_events.json", "w", encoding="utf-8") as f:
    json.dump(events, f, indent=2, ensure_ascii=False)

print(f"Parsed {len(events)} events.")
