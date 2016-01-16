var express = require('express'),
    app = express(),
    fs = require('fs');

app.use('/message', function (request, response) {
    console.log('user requested endpoint');
    response.send('hello');
});

app.use('/users', function (request, response) {
    // var data = require('./data.json');
    // response.send(data);
    fs.readFile('/home/ajsco/Desktop/project/data.json', 'utf8', function (err, data) {
        if (err) {
            throw err;
        }
        response.send(data);
    });
});

app.listen(3000);
