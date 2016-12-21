var express = require('express');
// var routes = require('./routes');
var http = require('http');
var path = require('path');

app.get('/', function(req, res){
  res.send('hello world');
});

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});