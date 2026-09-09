import re

with open('src/data/projects.ts', 'r', encoding='utf-8') as f:
    content = f.read()

start_str = "export const PROJECTS_DATA: Project[] = ["
end_str = "];"

start_idx = content.find(start_str) + len(start_str)
end_idx = content.rfind(end_str)

array_content = content[start_idx:end_idx]

# Find all blocks matching {\n    id: ... \n  }
objects = re.findall(r'(\n  \{.*?\n  \})', array_content, re.DOTALL)

if not objects:
    print("Could not parse objects")
else:
    objects.reverse()
    new_array_content = ",".join(objects) + "\n"
    new_content = content[:start_idx] + new_array_content + content[end_idx:]
    with open('src/data/projects.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Reversed {len(objects)} objects successfully")

