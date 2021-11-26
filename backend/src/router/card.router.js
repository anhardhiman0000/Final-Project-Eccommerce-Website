const express = require('express')
const mongodb = require('../controller/card.controller')
const router = express.Router();


router.get('/allcard', mongodb.getallcard);
router.get('/getsinglecard/:id', mongodb.getsinglecard);
router.post('/insertcard', mongodb.createcard);
router.put('/updatecard/:id', mongodb.updatecard);
router.delete('/deletecard/:id', mongodb.deletecard);
module.exports = router;