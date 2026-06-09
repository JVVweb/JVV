import re
import json

with open('/Users/nacho/.gemini/antigravity/scratch/JVV/src/data/projects.ts', 'r') as f:
    orig_content = f.read()

# Extract the array part
match = re.search(r'export const PROJECTS_DATA:\s*Project\[\]\s*=\s*(\[.*\]);', orig_content, re.DOTALL)
if not match:
    print("Could not parse array")
    exit(1)

array_str = match.group(1)

# Hacky way to parse JS objects: we can use regex to extract id, title, image, images
# Since I wrote them with json.dumps, they are fairly uniform.
projects = []
for block in re.finditer(r'\{\s*id:\s*(\d+),\s*title:\s*\{\s*es:\s*("(?:[^"\\]|\\.)*"),\s*en:\s*("(?:[^"\\]|\\.)*")\s*\},\s*client:\s*("(?:[^"\\]|\\.)*"),\s*year:\s*("(?:[^"\\]|\\.)*"),\s*description:\s*\{\s*es:\s*("(?:[^"\\]|\\.)*"),\s*en:\s*("(?:[^"\\]|\\.)*")\s*\},\s*image:\s*("(?:[^"\\]|\\.)*"),\s*images:\s*(\[(?:[^\]])*\])\s*\}', array_str, re.DOTALL):
    projects.append({
        'id': int(block.group(1)),
        'title_es_old': json.loads(block.group(2)),
        'title_en_old': json.loads(block.group(3)),
        'client': json.loads(block.group(4)),
        'year': json.loads(block.group(5)),
        'desc_es': json.loads(block.group(6)),
        'desc_en': json.loads(block.group(7)),
        'image': json.loads(block.group(8)),
        'images': json.loads(block.group(9))
    })

# Dictionary mapping id to {talent, title_es, title_en}
mapping = {
    4: {"talent": "Andrea Tivadar", "title_es": "Fotos por Patrick Shuttler", "title_en": "Photos by Patrick Shuttler"},
    5: {"talent": "Fevertree", "title_es": "Patrocinio Festival Mayrit Madrid", "title_en": "Mayrit Madrid Festival Sponsorship"},
    6: {"talent": "Zumos Linda", "title_es": "Desigual", "title_en": "Desigual"},
    7: {"talent": "Ana Fernandez", "title_es": "Moët & Chandon y Zumos Linda", "title_en": "Moët & Chandon and Zumos Linda"},
    8: {"talent": "Abraham García", "title_es": "Lío Mallorca", "title_en": "Lío Mallorca"},
    9: {"talent": "Valeria Vegas", "title_es": "IMAGIN (La Caixa)", "title_en": "IMAGIN (La Caixa)"},
    10: {"talent": "Rocio Saiz y Valeria Vegas", "title_es": "Embajadoras The Body Shop", "title_en": "The Body Shop Ambassadors"},
    11: {"talent": "Yaiza Canosa", "title_es": "Sage", "title_en": "Sage"},
    12: {"talent": "Abraham García", "title_es": "Disaronno", "title_en": "Disaronno"},
    13: {"talent": "Mery Miles", "title_es": "Levi's y Vespa", "title_en": "Levi's and Vespa"},
    14: {"talent": "Alex de la Croix", "title_es": "Vogue Hong Kong", "title_en": "Vogue Hong Kong"},
    15: {"talent": "Rocio Saiz", "title_es": "Desfile Out of the Closet W Ibiza", "title_en": "Out of the Closet Show at W Ibiza"},
    16: {"talent": "Valeria Vegas", "title_es": "Proyecto Mastercard", "title_en": "Mastercard Project"},
    17: {"talent": "Yaiza Canosa", "title_es": "Meta futuro de laSexta", "title_en": "laSexta Meta Futuro"},
    18: {"talent": "Andrea Tivadar y Paloma Lopez", "title_es": "Antonio Riva Milano", "title_en": "Antonio Riva Milano"},
    19: {"talent": "Alex De La Croix", "title_es": "Videos Amazon Prime", "title_en": "Amazon Prime Videos"},
    20: {"talent": "Sandra Delaporte y Joan Pedrola", "title_es": "Embajadores Armani Exchange", "title_en": "Armani Exchange Ambassadors"},
    21: {"talent": "Jesus Vazquez Viedma", "title_es": "Director Máster LCI Barcelona", "title_en": "LCI Barcelona Master Director"},
    22: {"talent": "Verbena Studio", "title_es": "AD", "title_en": "AD"},
    23: {"talent": "Carla Cervantes", "title_es": "Volkswagen", "title_en": "Volkswagen"},
    24: {"talent": "Julia de Castro", "title_es": "Portada Yodona", "title_en": "Yodona Cover"},
    25: {"talent": "Julia de Castro", "title_es": "J&B", "title_en": "J&B"},
    26: {"talent": "Carla Cervantes y Sandra Egido", "title_es": "Oysho", "title_en": "Oysho"},
    27: {"talent": "Adriana Gastellum y Jon Morales", "title_es": "H&M y Moschino", "title_en": "H&M and Moschino"},
    28: {"talent": "Jose Lamuño", "title_es": "Volvo", "title_en": "Volvo"},
    29: {"talent": "Carla Cervantes", "title_es": "Cozarllado", "title_en": "Cozarllado"},
    30: {"talent": "Adriana Gastellum y Jose Lamuño", "title_es": "Aperol Spritz Mad Cool", "title_en": "Aperol Spritz Mad Cool"},
    31: {"talent": "Adriana Gastellum y Marco Llorente", "title_es": "Emporio Armani Occhiali", "title_en": "Emporio Armani Occhiali"},
    32: {"talent": "Jose Lamuño", "title_es": "Schweppes", "title_en": "Schweppes"},
    33: {"talent": "Vestiaire Collective", "title_es": "Fashion for Lunch", "title_en": "Fashion for Lunch"},
    34: {"talent": "Julia de Castro y Patricia Valley", "title_es": "Zalando", "title_en": "Zalando"},
    35: {"talent": "Bultaco", "title_es": "Presentación Perfumes", "title_en": "Perfumes Presentation"},
    36: {"talent": "Alejandro Gomez Palomo", "title_es": "Fashion for Lunch", "title_en": "Fashion for Lunch"},
    37: {"talent": "Palito Dominguín", "title_es": "Angel Schlesser", "title_en": "Angel Schlesser"},
    38: {"talent": "Juanjo Oliva", "title_es": "Fashion for Lunch", "title_en": "Fashion for Lunch"},
    39: {"talent": "Cristina Castaño y Alejandra Prats", "title_es": "Starlite Marbella", "title_en": "Starlite Marbella"},
    40: {"talent": "Julia de Castro", "title_es": "Vogue", "title_en": "Vogue"},
    41: {"talent": "Julia de Castro", "title_es": "Harper's Bazaar", "title_en": "Harper's Bazaar"},
    42: {"talent": "Julia de Castro", "title_es": "Bvlgari", "title_en": "Bvlgari"},
    43: {"talent": "Patricia Valley", "title_es": "Dior Barcelona", "title_en": "Dior Barcelona"},
    44: {"talent": "Guinness", "title_es": "Convocatoria Madrid", "title_en": "Madrid Event"},
    45: {"talent": "Julia de Castro", "title_es": "San Isidro", "title_en": "San Isidro"},
    46: {"talent": "Andrea Vandall", "title_es": "Jameson Whiskey", "title_en": "Jameson Whiskey"},
    47: {"talent": "Producción JVV", "title_es": "Evento Residencia Privada Madrid", "title_en": "Private Residence Event Madrid"},
    48: {"talent": "Cha Cha", "title_es": "Convocatoria VIP", "title_en": "VIP Event"},
    49: {"talent": "Julia de Castro", "title_es": "Hendrick's", "title_en": "Hendrick's"},
    50: {"talent": "Lydia Delgado", "title_es": "Pop-up Store", "title_en": "Pop-up Store"},
    1: {"talent": "Andrea Tivadar", "title_es": "Editorial & Entrevista Neo2", "title_en": "Editorial & Interview Neo2"},
    2: {"talent": "Caudalie", "title_es": "Chloe's Clue", "title_en": "Chloe's Clue"},
    3: {"talent": "Juno House", "title_es": "Fashion Day", "title_en": "Fashion Day"}
}

# Update the TS code
ts_code = """export interface Project {
  id: number;
  title: { es: string; en: string };
  client: string;
  talent?: string;
  year: string;
  description: { es: string; en: string };
  image: string;
  images: string[];
}

export const PROJECTS_DATA: Project[] = [
"""

for p in projects:
    pid = p['id']
    if pid in mapping:
        m = mapping[pid]
        title_es = m['title_es']
        title_en = m['title_en']
        talent = m['talent']
    else:
        title_es = p['title_es_old']
        title_en = p['title_en_old']
        talent = ""
        
    ts_code += f"""  {{
    id: {pid},
    title: {{ es: {json.dumps(title_es)}, en: {json.dumps(title_en)} }},
    client: {json.dumps(p['client'])},
    talent: {json.dumps(talent)},
    year: {json.dumps(p['year'])},
    description: {{ es: {json.dumps(p['desc_es'])}, en: {json.dumps(p['desc_en'])} }},
    image: {json.dumps(p['image'])},
    images: {json.dumps(p['images'])}
  }},
"""

ts_code += "];\n"

with open('/Users/nacho/.gemini/antigravity/scratch/JVV/src/data/projects.ts', 'w') as f:
    f.write(ts_code)

print(f"Updated {len(projects)} projects.")
