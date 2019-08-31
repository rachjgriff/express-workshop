var express = require('express');
var app = express();

app.get("/", function (req, res) {
  res.send("Yay Node Girls!");
});

app.get("/node", function (req, res){
  res.send("I'm learning node!");
});

app.get("/girls", function (req, res){
  res.send("Girls are great!");
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});
