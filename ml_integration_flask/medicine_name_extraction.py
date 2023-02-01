from flask import Flask, request, jsonify, render_template, url_for, redirect, flash
import requests
import os
import secrets
import keras_ocr
from bs4 import BeautifulSoup as soup
from forms import MedicineImageForm

app = Flask(__name__)
SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY


medicines = ['crocin', 'ecosprin', 'allegra', 'combiflam', 'althrocin', 'azicip', 'gemsoline', 'mokcan', 'migranil', 'moxatris']
list1 = [] 
dict1 = {'crocin':'https://www.netmeds.com/prescriptions/crocin-advance-tablet-20s', 
         'allegra':'https://www.netmeds.com/prescriptions/allegra-180mg-tablet-10-s',
         'mokcan': 'https://www.netmeds.com/prescriptions/mokcan-cv-625mg-tablet-6-s',
         'ecosprin': 'https://www.netmeds.com/prescriptions/ecosprin-av-75mg-capsule-15-s',
         'althrocin': 'https://www.netmeds.com/prescriptions/althrocin-250mg-tablet-10-s',
         'azicip': 'https://www.netmeds.com/prescriptions/azicip-500mg-tablet-3-s',
         'gemsoline': 'https://www.netmeds.com/prescriptions/gemsoline-capsule-15-s',
         'migranil': 'https://www.netmeds.com/prescriptions/migranil-ec-1mg-tablet-10-s',
         'moxatris': 'https://www.netmeds.com/prescriptions/moxatris-500-capsule-10s'}


def preprocess(img):
    ocr_img_keras = [
                        keras_ocr.tools.read(ocr_img_keras) for ocr_img_keras in [img]
                    ] #storing the image as a list
    return ocr_img_keras

def prediction(image):
    ocr_pred = ocr_keras.recognize(image) #returns a list of list of tuples containing the word and the bounding box co-ordinates
    return ocr_pred

def add_in_list(ocr_pred):
    j=0
    for i in ocr_pred[0]:
        string = ocr_pred[0][j][0] #storing the words as a string
        list1.append(string) #appending the string into list
        j = j+1

def match():
    med_name = ""
    for i in list1:
        if i in medicines:
            med_name = med_name + i
    return med_name

ocr_keras = keras_ocr.pipeline.Pipeline() #loading the keras_ocr pre-trained pipeline

def allowed_files(filename):
    allowed = ['.jpg', '.png', '.jpeg']
    _, f_ext = os.path.splitext(filename)
    if f_ext in allowed:
        return True

def parent(x):
    list2 = ['uses', 'used', 'USES']
    for i in x:
        string = i.text
        for j in list2:
            if j in string: #searching for particular word in the h2 tag
                return i.parent #returning the parent of the h2 tag

def find(h2_parent):
    for i in h2_parent:
        if i.name == 'ul':  #finding only the <ul> tag in the parent tag
            return i

@app.route('/upload', methods = ['POST', 'GET'])
def upload():


        form = MedicineImageForm()
        if form.validate_on_submit():
            image = form.med_image.data
            image1 = preprocess(image)
            predict = prediction(image1)
            add_in_list(predict)
            med_name = match()
            form.medicine_name.data = med_name           
                                ### WEB SCRAPING ###
            if med_name in dict1:
                url = dict1[med_name]
                r = requests.get(url)
                htmlcont = r.content
            
            s = soup(htmlcont, 'html.parser')

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
            #print('USES:\n{0}'.format(uses))
            form.uses.data = uses
            
            alternate = ''
            y = s.find_all('div', class_='info')
            for i in range(3):
                alternate = alternate + y[i].text + '\n'
            #print('ALTERNATE MEDICINES:\n{0}'.format(alternate))
            form.alternatives.data = alternate
    
        # else:
        #     flash('Upload the appropraite file')
        return render_template('upload.html',form = form)

####################################
## PLOTTING THE BOUNDING BOX ON THE IMAGE AND PRINTING THE WORD ASSOCIATED WITH IT

#fig, axs = plt.subplots(nrows=len(ocr_img_keras), figsize=(20, 20))
#for image, predictions in zip( ocr_img_keras, ocr_pred):
#    keras_ocr.tools.drawAnnotations(image=image, predictions=predictions, ax=axs) 
####################################

@app.route('/predict', methods = ["GET", "POST"])
def predict():
    return render_template('predict.html')
#print(list1) #printing the words on the 

if __name__ == '__main__':
    app.run(debug= True)