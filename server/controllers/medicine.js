const Medicine = require('../models/medicine')




const getAllMedicines = async (req, res) => {
    const { search } = req.query
    let filterMedicine=null
    const queryObject = {
        disease:{ $regex:search, $options: 'i' }
    }
    if (search) {
        filterMedicine = await Medicine.find(queryObject)
    }
    if (!filterMedicine) {
        return res.status(404).json({msg:"some error occured"})
    }
    if (filterMedicine.length < 1) {
        return res.status(200).json({})
    }

    res.status(200).json(filterMedicine)
}


module.exports = { getAllMedicines }