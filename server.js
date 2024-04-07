const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const ieeeymcasb = 4000;
const app = express();
app.use(bodyparser.urlencoded({extended: true}));
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the 'admin' directory
app.use(express.static(path.join(__dirname, 'admin')));

app.get('/', function(req, res) {
  // This route will be served from the static directory
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(ieeeymcasb, function() {
  console.log('ieee on top');
  
});

app.get('/21001017038@admin', function(req, res) {
  // This route will be served as admin control
  res.sendFile(path.join(__dirname, 'admin','21001017038@admin.html'));
});
