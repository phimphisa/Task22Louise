const express = require('express');
var app = express();
var path = require('path');

const data = require('./pet.js');

data.createPet("Louise", 3, "cat");
data.createPet("Molly", 4, "dog");
data.createPet("Hero", 10, "cat");
data.createPet("Daisy", 6, "cat");
data.createPet("Alaska", 5, "dog");

const petList = data.getPets();

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
    res.json(petList)
})

app.listen(process.env.PORT || 8080)

// redirect assets folder
app.use('/assets', express.static(__dirname + '/assets'));
// redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
// redirect JS jQuery
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
// redirect CSS bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

