'use strict';
const geocode = require('./utils/geocode');

//var http = require('http');
//var port = process.env.PORT || 1337;

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);

//const url = 'http://api.weatherstack.com/current?access_key=13e065c67ccf7bc946126e9ac5502273&query=37.8267,-122.4233&units=f'

//request({ url: url, json: true }, (error, response) => {
//    if (error) {
//        console.log('Error: ' + error);
//    } else if (response.body.error) {
//        console.log('Unable to find location.');
//    } else {
//        const data = response.body.current;
//        const temp = data.temperature;
//        const feel = data.feelslike;
//        console.log('It is currently ' + temp + ' degrees out. It feels like ' + feel + ' degrees out.');
//    }
//});


geocode('Boston', (error, data) => {
    console.log('Error: ', error);
    console.log('Data: ', data);
});