const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e2fc71b774e7951aef786e32d1191d2a/'
    + latitude + ',' + longitude + '?lang=es';

    request({ url, json: true }, (error, {body}) => {
        // console.log(response);
        if (error) {
            callback('Unable to connect to weather services!', undefined);
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature
            + ' degrees out. The high today is ' + body.daily.data[0].temperatureHigh + ' with a low of '
            + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% of rain');
        }
    })
};

module.exports = forecast;