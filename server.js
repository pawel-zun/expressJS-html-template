var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/auth/google', function(req, res) {
	var name = req.query.name;
	if (name == '') name = 'Anon'; 
	res.render('welcome', {
		name: name
	});
});

app.get('*/style.css', function(req, res) {
	res.sendFile('/style.css', {root: 'assets'});
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send("I've got nothing to show you.");
});