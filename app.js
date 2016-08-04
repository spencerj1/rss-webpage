var express = require('express');
var bodyParser = require('body-parser');
var rssfeed = require('./getfeed.js');
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) { 
res.status(200).sendFile('./test.html', { root: __dirname })
});

app.get('/articletemplate', function (req, res) { 
res.status(200).sendFile('./articletemplate.html', { root: __dirname })
});

app.get('/rss', function (req, res) { 
	rssfeed.getfeed('http://www.bitpipe.com/data/bpXchange?b=ka_bp_manageit&d=31&f=rss&u=rss', function(){
		
	});
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});
 
app.listen(port, function () {
  console.log('App listening ' + port);
});

