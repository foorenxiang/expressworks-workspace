/*
////////Invalid Solution!!!//////////
var http = require("http");
var express = require("express");
var app = express();
var stylus = require("stylus");

app.use(require('stylus').middleware(__dirname + '/public'));

app.set('view engine', 'stylus');

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.all("*", function(req, res){
	app.res.render('index');
});

app.listen(process.argv[2]);
*/

var express = require("express");
var app = express();

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));


app.listen(process.argv[2])