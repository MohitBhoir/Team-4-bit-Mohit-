const mongoose = require('mongoose');


const medicineSchema = new mongoose.Schema({
    disease: {
        type: String,
        required:[true,"disease name must be provided"]
    },
    description: {
        type: String
    },
    symptoms: {
        type: String
    },
    medicines: {
        type: Array
    }
})

module.exports=mongoose.model("Medicine",medicineSchema)
