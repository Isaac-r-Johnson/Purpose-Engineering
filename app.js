const express = require('express');
const bodyParser = require('body-parser');
const lodash = require('lodash');
const PORT = 3000;

app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
currentServices = ['inform', 'interact', 'full-stack'];


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

app.get('/contact/:method', (req, res) => {
    var status = false;
    currentServices.forEach(service => {
        if (service === req.params.method){
            status = true;
        }
    });
    if (status === true){
        res.render('contact', {pageTitle: "Contact", "requestType": req.params.method});
    }
    else{
        res.redirect('/services');
    }
});

app.get('/the-contact/:method', (req, res) => {
    if (req.params.method === "inform"){
        res.redirect("/contact/" + req.params.method);
    }
    else if (req.params.method === "interact"){
        res.redirect("/contact/" + req.params.method);
    }
    else if (req.params.method === "full-stack"){
        res.redirect("/contact/" + req.params.method);
    }
    res.send("404 Error")
});

// POST Requests


app.listen(PORT, () => {
    console.log("Server is listening of port " + PORT + ".....");
});