'use strict';
const request = require('request');
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

const mapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&access_token=pk.eyJ1IjoidHJldm9ya25vdHRzIiwiYSI6ImNsYzZzMjNoYTMwbjkzb3BqdzU4ajVvNGsifQ.zCDe0B4lA5AoXppoUwaYug'
request({ url: mapUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Error: ' + error);
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location.');
    } else {
        const arr = response.body.features[0].center;

        const lat = arr[1];
        const lon = arr[0];
        console.log('Latitude: ' + lat);
        console.log('Longitude: ' + lon);
    }
});