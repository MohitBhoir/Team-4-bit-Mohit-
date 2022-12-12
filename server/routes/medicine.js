const { getAllMedicines} = require('../controllers/medicine')
const express = require('express')
const router = express.Router()

router.route("/").get(getAllMedicines)



module.exports=router