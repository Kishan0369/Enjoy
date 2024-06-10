const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const login =require('./controller/login');
const validateEmail =require('./controller/validateEmail')
const upload = require('./controller/upload');

const routes = require('./Routes/routes');
const findProduct = require('./controller/findProduct');
const categoryScreen=require('./controller/categoryScreen');
const giftTrending = require('./controller/giftTrending');
const findGift=require('./controller/findGift');
const app = express();
const port = 8000; // Replace with your port number

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to parse JSON bodies and handle file uploads
app.use(express.json());
app.use('/login', login);
app.use('/uploads', upload)
app.use('/', routes);
app.use('/validateEmail', validateEmail);
app.use('/findProduct',findProduct);
app.use('/categoryScreen',categoryScreen);
app.use('/giftTrending',giftTrending);
app.use('/gfindGift',findGift);





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
