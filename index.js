const path = require('path');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');

const PORT = 3000;
const PUBLIC_PATH = path.join(__dirname, 'public');

// http://www.passportjs.org/packages/passport-local/
require('./auth');

// https://expressjs.com/en/4x/api.html
const app = express();


// settings express application
// https://expressjs.com/en/4x/api.html#app.set table "Application Settings"
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/public', express.static(PUBLIC_PATH));

// Cannot GET /login
app.post('/login', 
    passport.authenticate('local', { 
        failureRedirect: '/'
    }),
    function(req, res) {
        res.send('OK')
    }
);

app.get('/logout',function(req, res){
  req.logout();
  res.redirect('/');
});

// https://expressjs.com/en/4x/api.html#app.get.method
app.get('/', function(req, res) {
  res.render('titul');
});

app.listen(PORT);
console.log('app listening port', PORT)

app.get('/titul', function(req, res) {
  res.render('titul');
});

app.get('/news', function(req,res) {
  res.render('news');
});


app.get('/contact', function(req,res) {
  res.render('contact');
});

app.get('/translation', function(req,res) {
  res.render('translation');
});

app.get('/video', function(req,res){
  res.render('video');
});

app.get('/gallery', function(req,res){
  res.sendFile(__dirname + "/public/gallery/slider.html");
});


