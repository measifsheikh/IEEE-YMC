const express = require('express');
const app = express();

const path = require('path');

const bodyparser = require('body-parser');

var mongoose = require('mongoose')

var model = require('./model.js');
var fs = require('fs');




require('dotenv').config();




mongoose.connect(process.env.database).then(console.log("BD online"))

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json())



// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));



// Serve static files from the 'admin' directory
app.use(express.static(path.join(__dirname, 'admin')));



 
var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({ storage: storage });


app.post('/createYear', upload.single('image'), (req, res, next) => {
 const collectionname = req.body.createdYear;
console.log(req.body.createdYear);
 const Model = model(collectionname);


res.redirect('/edit?'+ collectionname)


});



app.post('/selectYear', (req, res) => {
  const year = req.body.selectYear;
 
  res.redirect('/edit?' + year);
});

app.post('/selectevent', (req, res) => {
  const eventName = req.body.eventname;
  // Handle the 'Select Event' form submission here
  res.redirect('/edit?' + eventName);
});

app.post('/addEvent', (req, res) => {
  const eventName = req.body.addEvent;
  // Handle the 'Add Event' form submission here
  res.redirect('/edit?' + eventName);
});


app.get('/', function(req, res) {
  // This route will be served from the static directory
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});









app.post('/selectfm', (req, res) => {
  const eventName = req.body.eventName;
  // Handle the 'Select Faculty or Miscellaneous Event' form submission here
  res.send(`Event "${eventName}" selected successfully.`);
});


app.get('/21001017038@admin', function(req, res) {
  // This route will be served as admin control
  res.sendFile(path.join(__dirname, 'admin','21001017038@admin.html'));
});

app.get('/admin', function(req, res) {
  // This route will be served as admin control
  res.sendFile(path.join(__dirname, 'admin','year_collect.html'));
});

app.listen(process.env.port, function() {
  console.log('ieee on top');
});
