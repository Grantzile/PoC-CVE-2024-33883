const express 		= require('express');
const ejs 				= require('ejs');
const bodyParser 	= require('body-parser');
const app 				= express();
var morgan = require('morgan')
morgan('dev')

var pollute = {};

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine','ejs');
app.use(morgan('dev'));

// No user input
app.get('/', function(req, res){
	res.render(__dirname + "/ejs/index.ejs");
	console.log(pollute.client);
	console.log(pollute.escapeFunction);
})


app.get('/pollute', function(req, res) {
	let {target, value} = req.query;
	pollute["__proto__"][target] = value
	res.send('rename');
})

app.get('/check', function(req, res) {
	const polluted = {};
	res.send(polluted.__proto__);
})


app.listen(3000);
