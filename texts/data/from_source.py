import os
from docx.api import Document
import pandas as pd


url = "https://docs.google.com/document/d/1BCMRd1i1gBC3QLQRgUbdr2NovkSM8K0xoJLwaWkVamc/export?format=docx"


# download file
filename = 'data.docx'
cmd = f'wget -qO {filename} ' + url
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


first = df.iloc[6,:].tolist() # [5,6,7,8]  - row index 6

print(first)    
