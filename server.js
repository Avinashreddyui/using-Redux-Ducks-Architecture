var express = require('express');
var app = express();
var fs = require('fs');
var _ = require("lodash");
var bodyParser = require('body-parser');
var data = require("./users.json");

app.use(bodyParser());
app.use(express.static('public'));


app.get('/api',function (req,res) {
    res.json(data);
});

app.post('/api/addUsers', function(req, res) {
    res.send(req.body);
    fs.readFile('./users.json', 'utf-8', function (err, data) {
        if (err) throw err
        var arrayOfObjects = JSON.parse(data);
        arrayOfObjects.users.push({
            name: req.body.name,
            age: req.body.age
        });
        console.log(arrayOfObjects);
        fs.writeFile('./users.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!')
        });
    });
});
app.post('/api/deleteUsers', function(req, res) {
    res.send(req.body);
    fs.readFile('./users.json', 'utf-8', function (err, data) {
        if (err) throw err
        var arrayOfObjects = JSON.parse(data);
        var Arrays=arrayOfObjects.users;
        console.log(Arrays);
        _.remove(Arrays, {name: req.body.name});
        console.log(Arrays);
        fs.writeFile('./users.json', JSON.stringify(Arrays), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!')
        });
    });
});
app.listen(3030,function () {
    console.log("express running")
});