var express = require("express");
var app = express();
var crypto = require("crypto");

app.put("/message/:ID", function(req, res){
	var hash = crypto.createHash("sha1");
	
	hash.update(new Date().toDateString() + req.params.ID);
	res.end(hash.digest("hex"));
});

app.listen(process.argv[2]);