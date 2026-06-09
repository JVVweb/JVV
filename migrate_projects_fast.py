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
                
        scraped_projects.append({
            'title': title,
            'images': images
        })

scraped_projects.reverse()

typescript_code = """export interface Project {
  id: number;
  title: { es: string; en: string };
  client: string;
  year: string;
  description: { es: string; en: string };
  image: string;
  images: string[];
}

export const PROJECTS_DATA: Project[] = [
"""

project_id = 1
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

typescript_code += "];\n"

with open('/Users/nacho/.gemini/antigravity/scratch/JVV/src/data/projects.ts', 'w') as f:
    f.write(typescript_code)

print(f"Migration complete! {len(scraped_projects)} projects added.")
