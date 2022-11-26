#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import requests
from bs4 import BeautifulSoup as soup
import html5lib

############ Step 1: GET THE HTML PAGE ##############
dict1 = {'crocin':'https://www.netmeds.com/prescriptions/crocin-advance-tablet-20s', 
         'allegra':'https://www.netmeds.com/prescriptions/allegra-180mg-tablet-10-s',
         'mokcan': 'https://www.netmeds.com/prescriptions/mokcan-cv-625mg-tablet-6-s',
         'ecosprin': 'https://www.netmeds.com/prescriptions/ecosprin-av-75mg-capsule-15-s',
         'althrocin': 'https://www.netmeds.com/prescriptions/althrocin-250mg-tablet-10-s',
         'azicip': 'https://www.netmeds.com/prescriptions/azicip-500mg-tablet-3-s',
         'gemsoline': 'https://www.netmeds.com/prescriptions/gemsoline-capsule-15-s',
         'migranil': 'https://www.netmeds.com/prescriptions/migranil-ec-1mg-tablet-10-s',
         'moxatris': 'https://www.netmeds.com/prescriptions/moxatris-500-capsule-10s'}

if med_name in dict1:
    url = dict1[med_name]
r = requests.get(url)
htmlcont = r.content
#print(html)

########## STEP 2: PARSE THE HTML CONTENT USING BEATIFULSOUP MODULE ############
#parsing simply means displaying the content in organized form

s = soup(htmlcont, 'html.parser') 
#print(s)

########## STEP 3: HTML TREE TRAVERSAL #############

#title = s.title  #accessing the title tag of the page
#print(title)
#print(title.string)  #accessing the contents within the tag

### different type of objects of Beautiful soup
#print(type(s))  #soup object
#print(type(title))  #soup object tag
#print(type(title.string))  #navigable string

def parent(x):
    list1 = ['uses', 'used', 'USES']
    for i in x:
        string = i.text
        for j in list1:
            if j in string: #searching for particular word in the h2 tag
                return i.parent #returning the parent of the h2 tag
            
def find(h2_parent):
    for i in h2_parent:
        if i.name == 'ul':  #finding only the <ul> tag in the parent tag
            return i

uses = ''
x = s.find_all('h2') #finding all the h2 tags 
h2_parent = parent(x)
#print(h2_parent)
y = find(h2_parent)  #type(y)--> tag  ##specifically only the <ul> tags
list1 = y.contents  #contents of the <ul> tag  ## type-->list
for i in list1:
    if i==' ':
        continue
    else:
        uses = uses + i.text + '\n'
#print(uses)
print('USES:\n{0}'.format(uses))

alternate = ''
y = s.find_all('div', class_='info')
for i in range(3):
    alternate = alternate + y[i].text + '\n'
print('ALTERNATE MEDICINES:\n{0}'.format(alternate))


