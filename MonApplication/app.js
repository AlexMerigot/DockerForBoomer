var express = require('express');
var app = express();

// Routes
app.get('/', function(req, res) {
  res.send('Hello Boomer!');
});

// Listen
var port = process.env.PORT || 3000;
console.log("Starting hello-boomer server");
app.listen(port, () => console.log('Listening on localhost:'+ port));
