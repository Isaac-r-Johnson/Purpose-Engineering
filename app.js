const express = require('express');
const bodyParser = require('body-parser');
const lodash = require('lodash');
const PORT = 3000;

app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');


// GET Requests
app.get('/', (req, res) => {
    res.render('home', {pageTitle: "Home"});
});

app.get('/services', (req, res) => {
    res.render('services', {pageTitle: "Services"});
});

app.get('/about', (req, res) => {
    res.render('about', {pageTitle: "About"});
});

app.get('/contact', (req, res) => {
    res.render('contact', {pageTitle: "Contact"});
});


app.listen(PORT, () => {
    console.log("Server is listening of port " + PORT + ".....");
});