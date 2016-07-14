var express = require("express");
var http = require("http");
var app = express();

app.set('view engine', 'jade');

app.get("/home", function(req, res){
	app.set('views', process.argv[3]||path.join(__dirname, 'templates'));
	res.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);