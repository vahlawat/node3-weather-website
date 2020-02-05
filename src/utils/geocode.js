const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
    + encodeURIComponent(address)
    + '.json?access_token=pk.eyJ1Ijoidm5zaXQiLCJhIjoiY2s1djJhd2t4MDd6djNmbGJzZjVpNm42YyJ9.w58YyIrQJFFhLRIC3Y5W6Q&limit=1';
    // console.log(url);
    request({ url, json: true }, (error, {body}) => {
        // console.log(response);
        if (error || body.error) {
            callback('Unable to connect to location services!', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    })
};

module.exports = geocode;