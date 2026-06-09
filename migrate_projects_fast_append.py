import re
import json

with open('/Users/nacho/.gemini/antigravity/brain/051e281e-256d-4d36-a7fe-13859038df79/.system_generated/steps/98/content.md', 'r') as f:
    content = f.read()

rows = re.split(r'<div\s+class="[^"]*vc_row[^"]*"', content)

scraped_projects = []
for row in rows:
    title_match = re.search(r'<h2[^>]*>.*?<span[^>]*>(.*?)</span>', row, re.IGNORECASE | re.DOTALL)
    if not title_match:
        title_match = re.search(r'<h2[^>]*>(?:<a[^>]*>)?(.*?)(?:</a>)?</h2>', row, re.IGNORECASE | re.DOTALL)

    if title_match:
        title = title_match.group(1).strip()
        title = re.sub(r'<[^>]+>', '', title).strip()
        title = title.replace('&#8211;', '-').replace('&amp;', '&').replace('&#8217;', "'").replace('\u201c', '"').replace('\u201d', '"').replace('\u00ab', '"').replace('\u00bb', '"').replace('\u00f3', 'ó').replace('\u00ed', 'í').replace('\u00e1', 'á').replace('\u00e9', 'é').replace('\u00fa', 'ú').replace('\u00f1', 'ñ')

        if not title:
            continue
            
        img_matches = re.findall(r'<img[^>]*src="([^"]+)"', row, re.IGNORECASE)
        images = []
        for src in img_matches:
            src_clean = re.sub(r'-\d+x\d+(\.\w+)$', r'\1', src)
            if src_clean not in images:
                images.append(src_clean)
                
        # Skip the 3 ones we already have
        if "Neo2" in title or "Caudalie" in title or "Juno House" in title:
            continue
            
        scraped_projects.append({
            'title': title,
            'images': images
        })

scraped_projects.reverse()

# Read the original file
with open('/Users/nacho/.gemini/antigravity/scratch/JVV/src/data/projects.ts', 'r') as f:
    orig_content = f.read()

# We'll generate the new projects
typescript_code = ""
project_id = 4  # Start after the original 3
for proj in scraped_projects:
    title = proj['title']
    images = proj['images']
    
    cover_image = images[0] if images else ""
            
    title_str = json.dumps(title)
    images_str = json.dumps(images)
    
    typescript_code += f"""  {{
    id: {project_id},
    title: {{ es: {title_str}, en: {title_str} }},
    client: "",
    year: "2024",
    description: {{ es: {title_str}, en: {title_str} }},
    image: {json.dumps(cover_image)},
    images: {images_str}
  }},
"""
    project_id += 1

# Insert into the original file
# Find where the array starts
insert_index = orig_content.find('export const PROJECTS_DATA: Project[] = [')
if insert_index != -1:
    array_start = orig_content.find('[', insert_index) + 1
    new_content = orig_content[:array_start] + '\n' + typescript_code + orig_content[array_start:]
    with open('/Users/nacho/.gemini/antigravity/scratch/JVV/src/data/projects.ts', 'w') as f:
        f.write(new_content)
    print("Successfully inserted " + str(len(scraped_projects)) + " projects.")
else:
    print("Could not find array start")

