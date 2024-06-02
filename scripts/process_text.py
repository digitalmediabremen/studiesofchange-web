import os
from docx.api import Document
import pandas as pd
from copy import deepcopy
import pathlib
from unidecode import unidecode
import re

"""
++++++++++++++++
This script processes the text from the google doc and converts it to markdown.
It depends on the order of the columns in the google doc.
So, if the order changes, the legend and artist dictionary should be updated.
++++++++++++++++
"""

mypath = pathlib.Path(__file__).parent.resolve()

url = "https://docs.google.com/document/d/1BCMRd1i1gBC3QLQRgUbdr2NovkSM8K0xoJLwaWkVamc/export?format=docx"

legend = ["author", "title", "year", "statement", "medium_type", "material", "dimension", "cardinfo", "equips", "needs", "id", "website_link", "qrcode", "qrcode_url", "status"]
selective_items = ["author", "title", "year", "statement", "medium_type", "material", "dimension", "status"]
artist = {
    "author": "name",
    "title": "title",
    "year": "year",
    "statement": "statement",
    "medium_type": "type",
    "material": "material",
    "dimension": "dimension",
    "status":"in"
}

def process_excerpt(data):
    excerpt = ""
    if pd.isna(data): return excerpt
    ar = data.split(". ")

    if len(ar) <= 3:
        excerpt = data.replace('"',"'").replace("\n","")
    else:
        excerpt =  ". ".join(ar[:3]).replace('"',"'").replace("\n","") + "..."
    return excerpt
    

def to_markdown(data):
    md = "---\n"
    md += "type: artist\n"
    for i in range(len(selective_items)):
        if selective_items[i] == "author":
            d = data[selective_items[i]].replace('"',"'")
            d = remove_emojis(d).strip()
            md += f"{selective_items[i]}: \"{d}\"\n"
            continue
        if selective_items[i] == "statement": continue
        d = data[selective_items[i]].replace('"',"'") if isinstance(data[selective_items[i]], str) else data[selective_items[i]]        
        if pd.isna(d): d = ''
        md += f"{selective_items[i]}: \"{d}\"\n"

    md += f'excerpt: "{process_excerpt(data["statement"])}"\n'

    md += "---\n"
    if pd.isna(data['statement'])==False:
        md += f"{data['statement']}\n"
    else:
        md += ""
    return md

def remove_emojis(data):
    emoj = re.compile("["
        u"\U0001F600-\U0001F64F"  # emoticons
        u"\U0001F300-\U0001F5FF"  # symbols & pictographs
        u"\U0001F680-\U0001F6FF"  # transport & map symbols
        u"\U0001F1E0-\U0001F1FF"  # flags (iOS)
        u"\U00002702-\U000027B0"
        u"\U000024C2-\U0001F251"
        u"\U0001f926-\U0001f937"
        u"\U00010000-\U0010ffff"
        u"\u2640-\u2642" 
        u"\u2600-\u2B55"
        u"\u200d"
        u"\u23cf"
        u"\u23e9"
        u"\u231a"
        u"\ufe0f"  # dingbats
        u"\u3030"
                      "]+", re.UNICODE)
    return re.sub(emoj, '', data)

# download file
filename = os.path.join(mypath, 'data.xlsx')
cmd = f'wget -O "{os.path.join(mypath,filename)}" ' + url
print(os.popen(cmd).read())

data = []
doc = Document(filename)
table = doc.tables[0]

# create dataframe
keys = None
for i, row in enumerate(table.rows):
    text = (cell.text for cell in row.cells)

    if i == 0:
        keys = tuple(text)
        continue
    row_data = dict(zip(keys, text))
    data.append(row_data)
    # print (data)

df = pd.DataFrame(data)

artists = []
for i, row in df.iterrows():
    if i==0: continue
    d = df.iloc[i,:].tolist()[1:]
    item = deepcopy(artist)

    for j in range(len(legend)):
        # if legend[j] in selective_items:
        if pd.isna(d[j]) or d[j] == 'nan':
            item[legend[j]] = ''
        else:
            item[legend[j]] = d[j].rstrip('\n').rstrip() if isinstance(d[j],str) else d[j]
    artists.append(item)




for i in range(len(artists)):
    if artists[i]['status'].lower() == "out": continue
    md = to_markdown(artists[i])
    name = artists[i]['author']
    name = unidecode(name)
    if name[0] == " ": name = name[1:]
    name = name.replace(' ', '_').lower()
    name = name.replace(',', '') # only one exception    
    filename = os.path.join(mypath,
                            "artists",
                            name)+".md"
    
    with open(filename, 'w') as f:
        f.write(md)
        f.close()


# move to the location
cmd = f"mv -v \"{os.path.join(mypath, 'artists')}\"/* \"{os.path.join(mypath, '..', '_texts')}\""
print(os.popen(cmd).read())