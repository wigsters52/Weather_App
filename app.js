const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=4fa4dcf2e3ad5b15e01dc6ee1e4e794e&query=40.6796,-73.9213&units=f'

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicnlhbndpZ2dpbnM1MiIsImEiOiJjang1YW9tM2QwMXdhNDNtcHZzZ3pmaXdqIn0.zavpXiXHjOUkxS05fPJqSQ&limit=1'

request({ url, json: true }, (error, res) => {
    if (error) {
        console.log('Unable to connect with weather service!')
    } else if (res.body.error) {
        console.log(res.body.error)
    } else {
        console.log(`${res.body.current.weather_descriptions[0]}. The current temperature is ${res.body.current.temperature} and it feels like ${res.body.current.feelslike}`)
    }



})

request({ url: geocodeURL, json: true }, (error, res) => {
    if (error) {
        console.log('Unable to connect to location services service!')
    } else if (res.body.features = []) {
        console.log('Unable to find location. Try another search.')
    } else {
        const lat = res.body.features[0].center[0]
        const long = res.body.features[0].center[1]
        console.log(lat, long)
    }
})