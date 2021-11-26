const express = require('express')
const mongodb = require('../controller/user.controller')
const router = express.Router();


router.get('/', mongodb.getalldetail1);
router.get('/getsingleuser/:id', mongodb.getsingleuser);
router.post('/adduser', mongodb.createuser);
router.put('/edituser/:id', mongodb.updateuser);
router.delete('/deleteuser/:id', mongodb.deleteuser);

module.exports = router;
