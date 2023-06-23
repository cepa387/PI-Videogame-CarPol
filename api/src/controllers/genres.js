require("dotenv").config();
const axios = require('axios');
const { YOUR_API_KEY } = process.env;
const { Genre } = require('../db.js');

async function genres (req, res) {
  try {

       const genreBD = await Genre.findAll()


    if(genreBD){
      // console.log(genreBD)
      res.status(200).json(genreBD)
    }else{
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`);
    const genresAPI = response.data.results;
    
    // Mapear los géneros y crearlos en la base de datos
    const createdGenres = await Promise.all(genresAPI.map(async (genre) => {
      return await Genre.create({
        id: genre.id,
        name: genre.name
      });
    }));
    
    res.status(200).json(createdGenres);
  }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = genres;
