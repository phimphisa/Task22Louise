const express = require('express');
var app = express();
var path = require('path');

//var $ = require('jquery');
//require('popper.js');
//require('bootstrap');

function pet(name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;
}

var data = new pet("Spot", 3, "dog");

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname + '/info.html'))
});

app.get('/pictures', (req, res) => {
    res.sendFile(path.join(__dirname + '/gallery.html'))
});

app.get('/data', (req, res) => {
    res.json(data)
})

app.listen(process.env.PORT || 8080)

// redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
// redirect JS jQuery
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
// redirect CSS bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));