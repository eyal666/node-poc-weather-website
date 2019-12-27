const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/a7055aaf3f6d3fcff6750c2c9d22232d/${latitude},${longitude}?units=si`
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      const currently = body.currently
      const daily = body.daily.data[0]
      callback(undefined, `${daily.summary} It is currently ${currently.temperature} degrees out. There is a ${currently.precipProbability}% chance of rain`)
    }
  })
}

module.exports = forecast