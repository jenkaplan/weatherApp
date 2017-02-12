var express = require('express');
var router = express.Router();
const axios = require('axios');
require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(`https://api.darksky.net/forecast/${process.env.weatherKey}/42.3601,-71.0589`)
  .then((response) => {
    // console.log('darksky response', response)
    // console.log('darksky response')
    const temp = Math.round(response.data.currently.temperature);
    const summary = response.data.currently.summary;
    // const response = response;

    res.render('index', {
      temp: temp,
      summary: summary,
      response: response
    });
    // console.log('darksky response')
  });

  axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.googleLocationKey}`)
  .then((response) => {
    console.log('google response', response)
    const lat = response.location.lat;
    const lng = response.location.lng;

    res.render('index', {
      lat: lat,
      lng: lng
    });
  });
});

module.exports = router;
