const request = require('request')
require('dotenv').config()
// const constants = require('../../config')

const forecast = (latitude, longitude, callback) => {
    const url = ('http://api.weatherstack.com/current?access_key='+ 
    process.env.WEATHER_API_KEY +'&query=' + 
    latitude + ',' + longitude + '&units=f')
    
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const temp = body.current.temperature
            const feel = body.current.feelslike
            const desc = body.current.weather_descriptions
            const humid = body.current.humidity
            const prec = body.current.precip

            const msg = (desc + '. It is currently  ' + 
            temp + ' degrees out. It feels like ' + 
            feel + ' degrees out. ' +
            'There is a ' + prec + '% chance of precipitation. ' +
            'The current humity is ' + humid + '%')

            console.log(body.current)
            callback(msg)
        }
    })
}

module.exports = forecast
