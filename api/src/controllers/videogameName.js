require("dotenv").config();
const axios = require('axios');
const { YOUR_API_KEY } = process.env;
const { Videogame, Genre } = require('../db.js');

async function videogameName(req, res) {
  const { name } = req.query;

  try {
    const apiResponse = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${YOUR_API_KEY}&page_size=15`);
    const apiGames = apiResponse.data.results;

    const databaseGames = await Videogame.findAll({
      where: { name: name },
      include: [Genre]
    });

    const responseGames = apiGames.concat(databaseGames.map(game => {
      const { id, name, image, rating, genres } = game;
      const genresBD = genres.map(genre => genre.name).join(', ');
      return { id, name, image, rating, genres: genresBD };
    }));

    res.status(200).json(responseGames);
  } catch (error) {
    res.status(500).json({ error: "Error en la Base de datos" });
  }
}

module.exports = videogameName;
