const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const cartRoutes = require('./src/router/cartRouter');
const DB = require('./src/config/dbconfig');
const routeruser = require('./src/router/user.router');
const multer = require('multer');
const routercard = require('./src/router/card.router');
const routerproduct = require('./src/router/product.router');


const app = express()
const port = process.env.PORT || 10000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/user', routeruser);         //user
app.use('/product', routerproduct);   //products
app.use('/card', routercard);
app.use('/cart', cartRoutes);         //cart


const fileStorageEngine = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, './src/images')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: fileStorageEngine })

mongoose.connect(DB.mongoose_cluster_url, { useNewurlParser: true }).then(() => {

  console.log('             Connection is Successfull with MongoDB Cluster Atlas');

}).catch((err) => console.log(err));

app.listen(port, () => console.log(`             PORT listening on localhost: ${port}`))
