var express = require("express");
var app = express();
var path = require("path");
var kappans = require("./public/assets/data/kappans.json");

app.set("port", (process.env.PORT || 5000));

app.get("/kappans",function(req,res){
  res.send(kappans);
});

app.get("/*", function(req, res){
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname,"/public/", file));
});

app.listen(app.get("port"), function(){
  console.log("Listening on port: ", app.get("port"));
});

module.exports = app;
