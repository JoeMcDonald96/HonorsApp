// Load Express package
var express = require('express');
//var aframe  = require('aframe');
var app     = express();

// Set port
var port    = 8080;

// Send index.html to user
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/app/pages/index.html');
});

// Start Server
app.listen(8080);
console.log('Server Running. Port:8080');
