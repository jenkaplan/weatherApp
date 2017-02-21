var express = require('express');
var router = express.Router();
const axios = require('axios');
require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.googleLocationKey}`)
  .then((val) => {
    console.log(val.data.location.lat, val.data.location.lng)
    return axios.get(`https://api.darksky.net/forecast/${process.env.weatherKey}/${val.data.location.lat},${val.data.location.lng}`)
  })
  .then((response) => {
    const temp = Math.round(response.data.currently.temperature);
    const summary = response.data.currently.summary;

    res.render('index', {
      temp: temp,
      summary: summary,
      response: response
    });
  })
  .catch((err) => console.log(err))
});

module.exports = router;

