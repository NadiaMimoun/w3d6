const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
 
    res.render("index") 
});

app.post('/result', (req, res,next) => {
   
    res.render("result",{
        name:req.body.name,
        age:req.body.age,
    })
   });
app.listen(3000);