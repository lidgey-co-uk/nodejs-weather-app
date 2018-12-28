let request = require('request');
const argv = require('yargs').argv;

let apiKey = argv.a || 'UNDEFINED';
let city = argv.c || 'Cardiff';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`


request(url, function (err, response, body) {
  if(err){
    console.error('error:', error);
  } else if (apiKey == "UNDEFINED") {
    console.error('error:', 'No API key defined. Use -a <key> command line argument');
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    //console.debug('body:', body);
    //console.debug('weather:', weather);
    //console.debug('URL:', url);
    console.log('Message:', message);
  }
});
