const functions = require('firebase-functions');
const express = require('express');
const engines = require('consolidate');

// Create Express App
const app = express();

// Create Templating Engine
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

// Create Routes

// app.get('/', (request, response) => {
// 	response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
// 	response.render('index', {facts});
// });

app.get('/', function(req, res, next) {
  res.render('index', {
	  title: 'Huzzah'
  });
});

// Deploy Express App As A Firebase Cloud Function

exports.app = functions.https.onRequest(app);
