const geoCode = require('./utlis/geocode')
const forecast = require('./utlis/forecast')
const address = process.argv[2];

if (!address) {
    console.log('Please provide an address')
} else {
    geoCode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}