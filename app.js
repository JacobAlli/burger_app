// require our view engine
var handlebars = require('express-handlebars');

//require path for server files
var path = require('path');

//initialize our express app

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

//configuration stuff
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//middleware stuff
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

//routing stuff

app.use('/', require('./routes'));

app.listen(port, function() {
	console.log("app is listening on port " + port);
});

module.exports = app;


