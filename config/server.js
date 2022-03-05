
// import express
let express = require('express');

// import bodyParser
let bodyParser = require('body-parser');

// import consign
let consign = require('consign');

// import express validator
let expressValidator = require('express-validator');

// import express session
let expressSession = require('express-session');

// execute function
let app = express();

// set view files
app.set('view engine', 'ejs');

// local of views
app.set('views', './app/views');

// pass bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// set express validator middleware
app.use(expressValidator());

// setting the middleware express-session
app.use(expressSession({
    // is the section id
    secret: 'iehgifdbncvbnvkryri',
    resave: false,
    saveUninitialized: false
}));

// set static files
app.use(express.static('app/public'));

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;




