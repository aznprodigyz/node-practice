const request = require('request');

var getWeather = (lat, lng, callback) =>{
  request({
    url: `https://api.darksky.net/forecast/73318ed5c7d13e773a34cb555ab58cb2/${lat},${lng}`,
    json: true

  },(error, response, body) =>{
    if(!error && response.statusCode == 200){
      callback(undefined, {
        temperature:body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
      console.log(body.currently.temperature);
    }else{
      callback('unable to connect to forecast.io server');
    }


  });
}

module.exports.getWeather = getWeather;
