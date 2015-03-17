var _ = require('underscore');

_.templateSettings = {
    evaluate    : /\{\{([\s\S]+?)\}\}/g,
    interpolate : /\{\{=([\s\S]+?)\}\}/g,
    escape      : /\{\{-([\s\S]+?)\}\}/g
};



var $ = require('jquery');
var express = require('express');

var csv = require('./scripts/server.js');

var app = express();
var path = require('path');
var expressLayouts = require('express-ejs-layouts');

app.set('port', (process.env.PORT || 5000));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(express.static(__dirname + '/'));

app.get('/', function (request, response) {
   response.render('index', { title: 'Hola' });
});

app.listen(app.get('port'), function () {
   console.log("Node app is running at localhost:" + app.get('port'));
});

app.get('/ajaxEx/:cad', function (request, response) {

   
   response.send(JSON.stringify(csv.calculate(request.params.cad)));


});