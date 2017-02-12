var express = require('express');
var router = express.Router();
const axios = require('axios');
require('dotenv').config();

/* GET users listing. */
function getLocation(req, res, next) {
  return axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.googleLocationKey}`)
  //.then((response) => {
    //res.locals.lat = response.location.lat;
    //res.locals.lng = response.location.lng;
    //console.log(res.locals.lat, res.locals.lng, 'location')
  //})
  //.catch((err) => console.log(err))
};

// getLocation();

module.exports = getLocation;
