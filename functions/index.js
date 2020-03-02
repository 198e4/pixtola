/////////////////////////////////////////////////////////////////////////////////////////
// index.js Requirements
/////////////////////////////////////////////////////////////////////////////////////////

const functions = require('firebase-functions');
const express = require('express');
const engines = require('consolidate');
const hbs = require('hbs');
const path = require('path');

/////////////////////////////////////////////////////////////////////////////////////////
// Express
/////////////////////////////////////////////////////////////////////////////////////////

// Create Express App
const app = express();

/////////////////////////////////////////////////////////////////////////////////////////
// Template Engine
/////////////////////////////////////////////////////////////////////////////////////////

// Create Templating Engine
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

/////////////////////////////////////////////////////////////////////////////////////////
// Static Paths
/////////////////////////////////////////////////////////////////////////////////////////

// Create Paths to Link Plugins From Front End to Node Modules Directory
app.use('/javascripts/plugins', express.static(path.join('node_modules', 'lazysizes')));

/////////////////////////////////////////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////////////////////////////////////////

	// Home Route
	app.get('/', function(req, res, next) {
		// Cache Policy
		res.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');
		// Render Response into the .hbs template
		res.render('index', {});
	});

// Deploy Express App As A Firebase Cloud Function
exports.app = functions.https.onRequest(app);
