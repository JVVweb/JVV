import re
import json

with open('/Users/nacho/.gemini/antigravity/brain/051e281e-256d-4d36-a7fe-13859038df79/.system_generated/steps/98/content.md', 'r') as f:
    content = f.read()

# Each row is delimited by <div class="vc_row ...">
rows = re.split(r'<div\s+class="[^"]*vc_row[^"]*"', content)

projects = []
for row in rows:
    # Find h2 span text
    title_match = re.search(r'<h2[^>]*>.*?<span[^>]*>(.*?)</span>', row, re.IGNORECASE | re.DOTALL)
    if not title_match:
        # sometimes h2 directly has text or a link
        title_match = re.search(r'<h2[^>]*>(?:<a[^>]*>)?(.*?)(?:</a>)?</h2>', row, re.IGNORECASE | re.DOTALL)

    if title_match:
        title = title_match.group(1).strip()
        # strip inner tags if any
        title = re.sub(r'<[^>]+>', '', title).strip()
        
        # skip if empty
        if not title:
            continue
            
        # Find images
        img_matches = re.findall(r'<img[^>]*src="([^"]+)"', row, re.IGNORECASE)
        images = []
        for src in img_matches:
            # clean size suffix
            src_clean = re.sub(r'-\d+x\d+(\.\w+)$', r'\1', src)
            if src_clean not in images:
                images.append(src_clean)
                
        projects.append({
            'title': title,
            'images': images
        })

print(json.dumps(projects, indent=2))
