const request = require('request');


var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=vHGNYSOgAm10V7re61a6cqF2iePXSjO4&location=${encodedAddress}`,
    json: true
  },(error, response, body) => {
    if (error){
      callback('unable to connect to google servers.');

    }else{
      callback(undefined, {
        address: body.results[0].locations[0].street,
        latitude: body.results[0].locations[0].latLng.lat,
        longitude: body.results[0].locations[0].latLng.lng
      });
      // console.log(JSON.stringify(body, undefined, 2));
      // //latitude
      // console.log(body.results[0].locations[0].latLng.lat);
      // //longitude
      // console.log(body.results[0].locations[0].latLng.lng);
    }

  });
}

module.exports.geocodeAddress = geocodeAddress;
