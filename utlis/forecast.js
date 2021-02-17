const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=4fa4dcf2e3ad5b15e01dc6ee1e4e794e&query=${latitude},${longitude}&units=f`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, (`${response.body.current.weather_descriptions[0]}. The current temperature is ${response.body.current.temperature} and it feels like ${response.body.current.feelslike}`))
        }
    })
}

module.exports = forecast


// const url = 'http://api.weatherstack.com/current?access_key=4fa4dcf2e3ad5b15e01dc6ee1e4e794e&query=40.6796,-73.9213&units=f'



// request({ url, json: true }, (error, res) => {
//     if (error) {
//         console.log('Unable to connect with weather service!')
//     } else if (res.body.error) {
//         console.log(res.body.error)
//     } else {
//         console.log(`${res.body.current.weather_descriptions[0]}. The current temperature is ${res.body.current.temperature} and it feels like ${res.body.current.feelslike}`)
//     }