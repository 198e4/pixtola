const functions = require('firebase-functions');
const express = require('express');
const engines = require('consolidate');
const path = require('path');
const hbs = require('hbs');

// Create Express App
const app = express();

// Create Templating Engine
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

// Create Paths to Link Plugins From Front End to Node Modules Directory
app.use('/javascripts/plugins', express.static(path.join('node_modules', 'lazysizes')));

// Create Routes
app.get('/', function(req, res, next) {
	res.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');
	res.render('index', {
		// title: ''
	});
});

// Deploy Express App As A Firebase Cloud Function
exports.app = functions.https.onRequest(app);
