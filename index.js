
var express = require('express');
var app = express();

var server = app.listen(3000, function(){
    console.log("App started listen")
});

app.get('/', function(req,res){
    res.send('Hello Web');
});
