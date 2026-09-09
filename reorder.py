import re

with open('src/data/projects.ts', 'r', encoding='utf-8') as f:
    content = f.read()

start_str = "export const PROJECTS_DATA: Project[] = ["
end_str = "];"
start_idx = content.find(start_str) + len(start_str)
end_idx = content.rfind(end_str)

array_content = content[start_idx:end_idx]

# Split the objects. We can use regex to find each object block
# A project block starts with {\n    id: ... and ends with } matching the indentation
objects = re.findall(r'(\n  \{.*?\n  \})', array_content, re.DOTALL)

def get_id(obj_str):
    match = re.search(r'id:\s*(\d+),', obj_str)
    if match:
        return int(match.group(1))
    return 999

objects.sort(key=get_id)

new_array_content = ",".join(objects) + "\n"
new_content = content[:start_idx] + new_array_content + content[end_idx:]

with open('src/data/projects.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Reordered successfully by ID ascending.")
