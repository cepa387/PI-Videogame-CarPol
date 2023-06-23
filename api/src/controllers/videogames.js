require("dotenv").config();
const axios = require('axios');
const { Videogame, Genre } = require('../db.js');
const { YOUR_API_KEY } = process.env;
const URL = `https://api.rawg.io/api/games?key=${YOUR_API_KEY}`;

async function videogames(req, res) {
  try {
    let gamesResults = [];
    let apiRAWG = URL;
    let index = 0;

    while (index < 5) {
      const response = await axios.get(apiRAWG);
      const games = response.data.results.map((G) => ({
        id: G.id,
        name: G.name,
        image: G.background_image,
        genres: G.genres.map((gen) => gen.name).filter((p) => p != null).join(', '),
        platforms: G.platforms.map((platform) => platform.platform.name).join(', '),
        source: "Api",
        rating: G.rating,
      }));

      gamesResults = gamesResults.concat(games);
      apiRAWG = response.data.next;
      index++;
    }

    const dbGames = await Videogame.findAll({ include: [Genre] });
    const jsonGames = dbGames.map((J) => ({
      ...J.toJSON(),
      source: "Created",    
      genres: J.genres.map((genre) => genre.name).filter((p) => p != null).join(', '),
    }));

    gamesResults = gamesResults.concat(jsonGames);
    res.status(200).json(gamesResults);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = videogames;
