const axios = require('axios');
require('dotenv').config();

const googleGeoLocateAxios = axios.create({
  baseURL: 'https://www.googleapis.com/geolocation/v1/geolocate?key='
  headers: {
    'api-key': process.env.googleAPI
  }
});

module.exports = {
  googleGeoLocateAxios
};
