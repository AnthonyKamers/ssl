'use strict';

var path = require('path');
var express = require('express');
var app = express();

// app.get('/', express.static(path.join(__dirname, "public")));
app.get('/', (req, res) => {
    res.send(`<h1>Hello, it's encrypted</h1>`);
})

module.exports = app;

// for development and debugging
if (require.main === module) {
    require('http').createServer(app).listen(80, function () {
        console.info("Listening for HTTP on", this.address());
    });
}