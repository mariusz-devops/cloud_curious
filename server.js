var express = require('express');

var app = express();
app.get('/', function(req, res) {
    res.send('<h1> Hello World </h1>');
});
app.get('/random', function(req, res) {
	var col = ['red','green','blue']
    var num = Math.floor(Math.random() * 3);
    var s= '<body bgcolor= "'+col[num]+'">';
    res.send(s+'<h1>My lucky number =  ' + num+'</h1>');
});

app.get('/lucky', function(req, res) {
    var num = Math.floor(Math.random() * 10);
    res.send('My lucky number =  ' + num);
});
app.listen(8080);
console.log("Running on port 3001");