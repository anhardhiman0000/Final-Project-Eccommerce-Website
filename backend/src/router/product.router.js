const express = require('express')
const md = require('../controller/product.controller')

const router = express.Router();

router.get('/', md.getallproduct);
router.get('/specificproduct/:id', md.getsingleproduct);
router.post('/addproduct', md.createproduct);
router.put('/editproduct/:id', md.updateproduct);
router.delete('/deleteproduct/:id', md.deleteproduct);

module.exports = router;
