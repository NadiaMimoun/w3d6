const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
 const date = new Date();
 const hour = date.getHours();
 let cssLink;
 if(hour>6 && hour<16){
 
  cssLink=(path.join( 'css', 'day.css'))}
  else{
 
     cssLink=(path.join('css', 'night.css'))}
 res.render("index", {
 time: date.toTimeString(),
 cssLink:cssLink,
 });

 
 
});
app.listen(3000);
