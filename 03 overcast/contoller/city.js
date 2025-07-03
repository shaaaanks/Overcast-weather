async function getcityname(req, res) {

 
  try {
    
    const city_name = req.params.city_name;
    const response = await fetch(`http://goweather.xyz/weather/${city_name}`);
    const data = await response.json();

    if (!data.temperature) {
      return res.status(404).json({ error: "City not found or temperature unavailable." });
    }

    return res.render('getdata',{
      city: city_name,
      temperature: data.temperature,
      description: data.description
    });
  } catch (error) {
    console.error("Error fetching weather:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




module.exports={
  getcityname,
}