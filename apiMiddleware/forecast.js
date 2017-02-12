var express = require('express');
var router = express.Router();
const axios = require('axios');
require('dotenv').config();

/* GET home page. */
let weather = router.get('/', function(req, res, next) {
  axios.get(`https://api.darksky.net/forecast/${process.env.weatherKey}/42.3601,-71.0589`)
  .then((response) => {
    console.log('darksky response', response)
    const temp = Math.round(response.data.currently.temperature);
    const summary = response.data.currently.summary;

    res.render('index', {
      temp: temp,
      summary: summary,
    });
  });
});

module.exports = weather;
