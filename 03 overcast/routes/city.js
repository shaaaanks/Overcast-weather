const express = require('express')
const router = express.Router();
const {getcityname}=require('../contoller/city')

router.get('/:city_name',getcityname)

router.get('/',(req,res)=>{
    res.render('index'); 

})

router.get('/getdata', (req, res) => {
  res.render('getdata', {
    city: null,
    temperature: null,
    description: null
  });
});



router.post('/fetch', async (req, res) => {
  const city_name = req.body.city_name;
  try {
    const response = await fetch(`http://goweather.xyz/weather/${city_name}`);
    const data = await response.json();

    res.render('getdata', {
      city: city_name,
      temperature: data.temperature,
      description: data.description
    });
  } catch (err) {
    console.error(err);
    res.render('getdata', {
      city: city_name,
      temperature: 'N/A',
      description: 'Error fetching data'
    });
  }
});






module.exports=router;