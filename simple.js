var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var expressLayouts = require('express-ejs-layouts');


var app = express();

app.use(bodyParser());
app.use(cors());
app.use(expressLayouts);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.write('Nothing present at this end point. Try for /muj or /afs');
	res.status(200).send();
});

app.get('/muj', function (req, res) {
	res.render('muj', {
		greeting: 'Yo World',
		people: [
			{ name: 'Sachin', id: '169105157', age: '20' },
			{ name: 'Sampath', id: '169105160', age: '20' },
			{ name: 'Sagrika', id: '169105159', age: '20' },
			{ name: 'Omkar', id: '169105141', age: '16' }// I am 20 years old -Omkar
		]
	});
});

app.get('/afs', function (req, res) {
	res.render('afs', {
		greeting: 'Hello World',
		people: [
			{ name: 'Sachin', id: '31', age: '20' },
			{ name: 'Ashish', id: '10', age: '20' },
			{ name: 'Nitin', id: '20', age: '20' },
			{ name: 'Anurag', id: '4', age: '16' }
		]
	});
});


app.listen(1337, function () {
	console.log('chal raha hain @1337');//vo soab to thik hai.. port number kahase pata chalega
});