from flask_wtf import FlaskForm
from wtforms import validators
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed  #for image field 

class MedicineImageForm(FlaskForm):
    med_image = FileField('Upload the medicine box or medicine packet image', validators=[DataRequired(), FileAllowed(['jpg', 'png', 'jpeg'])])
    submit = SubmitField('Submit')
