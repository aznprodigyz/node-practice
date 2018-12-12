const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a:{
      demand: true,
      alias: 'address',
      describe: 'address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=vHGNYSOgAm10V7re61a6cqF2iePXSjO4&location=${encodedAddress}`;

axios.get(geocodeURL).then((response) => {
  var lat = response.data.results[0].locations[0].latLng.lat;
  var lng = response.data.results[0].locations[0].latLng.lng;
  var weatherURL = `https://api.darksky.net/forecast/73318ed5c7d13e773a34cb555ab58cb2/${lat},${lng}`;
  // console.log(JSON.stringify(response.data,undefined,2));
  console.log(response.data.results[0].locations[0].street);
  return axios.get(weatherURL);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((e) => {
  console.log(e);
});
