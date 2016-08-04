var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) { 
res.status(200).sendFile('./test.html', { root: __dirname })
});

app.get('/css/business-casual.css', function (req, res) { 
res.status(200).sendFile('./css/business-casual.css', { root: __dirname })
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});
 
app.listen(port, function () {
  console.log('App listening ' + port);
});