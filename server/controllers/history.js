const Medicine = require('../models/medicine')




const getAllHistory = async (req, res) => {
    res.send("all history")
}

const createHistory = async (req, res) => {
    res.json(req.user)
}

const updateHistory = async (req, res) => {
    res.send("update history")
}

const deleteHistory = async (req, res) => {
    res.send("delete history")
}


module.exports = {
    getAllHistory,
    createHistory,
    updateHistory,
    deleteHistory
}