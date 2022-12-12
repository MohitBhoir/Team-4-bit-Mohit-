const express = require('express')
const router = express.Router()
const {
    getAllHistory,
    createHistory,
    updateHistory,
    deleteHistory
} = require('../controllers/history')

router.route("/").get(getAllHistory).post(createHistory)
router.route("/:id").patch(updateHistory).delete(deleteHistory)



module.exports = router