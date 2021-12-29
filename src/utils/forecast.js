const request = require('request')
const constants = require('../../config')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key='+ constants.weatherAppKeys.weatherKey +'&query=' + latitude + ',' + longitude + '&units=f'
    
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const temp = body.current.temperature
            const feel = body.current.feelslike
            const desc = body.current.weather_descriptions

            const msg = desc + '. It is currently  ' + temp + ' degrees out. It feels like ' + feel + ' degrees out.'

            callback(msg)
        }
    })
}

module.exports = forecast
