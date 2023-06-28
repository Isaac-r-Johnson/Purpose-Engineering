const express = require('express');
const bodyParser = require('body-parser');
const lodash = require('lodash');
const PORT = 3000;

app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {text: "Hello World"});
});


app.listen(PORT, () => {
    console.log("Server is listening of port " + PORT + ".....");
});