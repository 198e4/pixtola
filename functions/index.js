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
// Front-End Static Paths
/////////////////////////////////////////////////////////////////////////////////////////

// Create Paths to Link Plugins From Front End to Node Modules Directory

	// jQuery
	app.use('/javascripts/plugins', express.static(path.join('node_modules', 'jquery', 'dist')));
	// Lazy Slides (Used to lazyload images)
	app.use('/javascripts/plugins', express.static(path.join('node_modules', 'lazysizes')));
	// SVG.JS (Used to draw SVG shapes)
	app.use('/javascripts/plugins', express.static(path.join('node_modules', '@svgdotjs', 'svg.js', 'dist')));
	// node-vibrant
	app.use('/javascripts/plugins', express.static(path.join('node_modules', 'node-vibrant', 'dist')));

/////////////////////////////////////////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////
	// App View Hierarchy
	////////////////////////////////////////////////////////

	// Level 01						[INDEX]
	// 								|
	// Level 02						[CASE-STUDIES]
	//								|
	// Level 03						[CASE STUDY: LAZYOUTS]
	//								[CASE STUDY: ONLINE PRICE BOOK]
	//								[CASE STUDY: QUOTEDCAR'S DASHBOARD]
	//								[CASE STUDY: VEHICLE PRICING SATELLITE]
	//								[CASE STUDY: EMAIL TEMPLATE GENERATOR]
	//								[CASE STUDY: QUOTEDCAR LOGO]

	////////////////////////////////////////////////////////
	// [ROUTE] Index (Homepage)
	// [LEVEL] 01
	// [NAV STRUCTURE] App Root
	////////////////////////////////////////////////////////

	app.get('/', function(req, res, next) {
		// Cache Policy
		res.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');
		// Render Response into the .hbs template
		res.render('index', {});
	});

		////////////////////////////////////////////////////////
		// [ROUTE] Case Studies Overview
		// [LEVEL] 02
		// [NAV STRUCTURE] Home > Case Study Overview
		////////////////////////////////////////////////////////

		app.get('/case-studies/', function(req, res, next) {
			// Cache Policy
			res.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');
			// Render Response into the .hbs template
			res.render('case-studies', {});
		});

			////////////////////////////////////////////////////////
			// [ROUTE] Case Studies
			// [LEVEL] 03
			// [NAV STRUCTURE] Home > Case Study Overview > Case Study
			////////////////////////////////////////////////////////

			app.get('/case-study/lazyouts/', function(req, res, next) {
				// Cache Policy
				res.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');
				// Render Response into the .hbs template
				res.render('lazyouts', {});
			});

			app.get('/case-study/online-price-book/', function(req, res, next) {
				// Cache Policy
				res.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');
				// Render Response into the .hbs template
				res.render('online-price-book', {});
			});

			app.get('/case-study/quotedcar-dashboard/', function(req, res, next) {
				// Cache Policy
				res.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');
				// Render Response into the .hbs template
				res.render('quotedcar-dashboard', {});
			});

			app.get('/case-study/vehicle-pricing-satellite/', function(req, res, next) {
				// Cache Policy
				res.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');
				// Render Response into the .hbs template
				res.render('vehicle-pricing-satellite', {});
			});

			app.get('/case-study/email-template-generator/', function(req, res, next) {
				// Cache Policy
				res.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');
				// Render Response into the .hbs template
				res.render('email-template-generator', {});
			});

			app.get('/case-study/quotedcar-logo/', function(req, res, next) {
				// Cache Policy
				res.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');
				// Render Response into the .hbs template
				res.render('quotedcar-logo', {});
			});

/////////////////////////////////////////////////////////////////////////////////////////
// Deploy App to Firebase
/////////////////////////////////////////////////////////////////////////////////////////

// Deploy Express App as a Firebase Cloud Function
exports.app = functions.https.onRequest(app);
