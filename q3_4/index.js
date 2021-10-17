const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controller= require('./controller')
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', controller.getAllProducts );
app.get('/product', controller.getInfo);
app.post('/addToCart',controller.addToCart);
app.get('/shoppingcart',controller.shoppingcart)





app.listen(3000);