'use strict';
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const loc = process.argv[2];

geocode(loc, (error, {latitude, longitude, location} = {}) => {
    if (error) {
        return console.log(error);
    }
   forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }

        console.log(location);
        console.log(forecastData);
    });
});