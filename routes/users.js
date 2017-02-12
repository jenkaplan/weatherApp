var express = require('express');
var router = express.Router();
const axios = require('axios');
require('dotenv').config();

/* GET users listing. */
router.get('/', function(req, res, next) {
  axios.get(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.googleLocationKey}`)
  .then((response) => {
    const lat = response.location.lat;
    const lng = response.location.lng;

    res.render('index', {
      lat: lat,
      lng: lng
    })
  })
});

module.exports = router;
