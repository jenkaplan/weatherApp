var express = require('express');
var router = express.Router();
const axios = require('axios');
require('dotenv').config();

let geolocate = axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.googleLocationKey}`)
  .then((response) => {
    console.log('google response', response)
    res.locals.lat = response.location.lat;
    res.locals.lng = response.location.lng;
    return next();
}).catch((err) => console.log(err));

module.exports = weather;
