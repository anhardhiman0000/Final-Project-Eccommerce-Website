// const express = require('express')
// const cart1 = require('../controller/cartController')

// const router = express.Router();

// router.get('/', cart1.getcartProducts);
// // router.get('/specificproduct/:id', cart1.getsingleproduct);
// router.post('/addcart', cart1.AddcartProducts);
// router.put('/editcart/:id', cart1.updatecartproducts);
// router.delete('/deletecart/:id', cart1.deletecart);

// module.exports = router;

const express = require('express');

const mongoose = require('../controller/cartController');

const router = express.Router();
router.get('/', mongoose.getcartProducts);
router.post('/addcart', mongoose.AddcartProducts);
router.put('/edtcart/:id', mongoose.updatecartproducts);
router.delete('/deletecart/:id', mongoose.deletecart);
module.exports = router;

