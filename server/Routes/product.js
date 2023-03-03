const express = require('express')
const router = express.Router()

router.get('/product', (req, res) => {
    //code
    res.send('hello product ฝากกดติดตามด้วยนะครับ')
})
router.post('/product', (req, res) => {
    //code
    res.send('hello post product')
})

module.exports = router;