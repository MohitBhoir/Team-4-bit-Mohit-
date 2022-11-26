
import cv2
import keras_ocr
import matplotlib.pyplot as plt

ocr_keras = keras_ocr.pipeline.Pipeline() #loading the keras_ocr pre-trained pipeline

img = cv2.imread('./images/allegra.jpg') #reading the input image through opencv 
plt.imshow(img)

ocr_img_keras = [
keras_ocr.tools.read(ocr_img_keras) for ocr_img_keras in [img]
] #storing the image as a list

ocr_pred = ocr_keras.recognize(ocr_img_keras) #returns a list of list of tuples containing the word and the bounding box co-ordinates

####################################
## PLOTTING THE BOUNDING BOX ON THE IMAGE AND PRINTING THE WORD ASSOCIATED WITH IT

#fig, axs = plt.subplots(nrows=len(ocr_img_keras), figsize=(20, 20))
#for image, predictions in zip( ocr_img_keras, ocr_pred):
#    keras_ocr.tools.drawAnnotations(image=image, predictions=predictions, ax=axs) 
####################################
medicines = ['crocin', 'ecosprin', 'allegra', 'combiflam', 'althrocin', 'azicip', 'gemsoline', 'mokcan', 'migranil', 'moxatris']
list1 = [] 
j=0
for i in ocr_pred[0]:
    string = ocr_pred[0][j][0] #storing the words as a string
    list1.append(string) #appending the string into list
    j = j+1
#print(list1) #printing the words on the 

med_name = ""
for i in list1:
    if i in medicines:
        med_name = med_name + i
print("medicine name: {0}".format(med_name))





