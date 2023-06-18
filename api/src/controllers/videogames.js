require("dotenv").config();
const axios = require('axios');
const { YOUR_API_KEY } = process.env;
const { Videogame, Genre } = require("../db.js");

async function videogames(req, res) {
  try {
    const apiResponse = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}`);
    const apiGames = apiResponse.data.results;

    const databaseGames = await Videogame.findAll();

    const games = apiGames.concat(databaseGames);

    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: "Error en la Base de datos" });
  }
}

module.exports = videogames; 
