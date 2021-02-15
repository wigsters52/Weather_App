const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=4fa4dcf2e3ad5b15e01dc6ee1e4e794e&query=40.6796,-73.9213'

request({ url }, (error, res) => {
    const data = JSON.parse(res.body)
    console.log(data.current)
})