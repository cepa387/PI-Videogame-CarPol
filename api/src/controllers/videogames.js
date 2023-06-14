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

 
//   let {name} = req.query;

// try {
//   if (name) {
//     name = name.toLowerCase();

//     const gamesDB = await Videogame.findAll({
//       where: { name: name },
//       include: [Genre],
//     });
//     if (gamesDB.length > 0) {
//       const gamesDBFull = gamesDB.map((game) => {
//         const { id, name, image, rating, genres } = game;
//         const gameGenres = genres.map((genre) => genre.name).join(", ");
//         return { id, name, image, rating, genres: gameGenres };
//       });
//       res.json(gamesDBFull)
      
//     }
  
//   const gamesAPI = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${YOUR_API_KEY}&page_size=15`);
//   const gamesAPIResults = gamesAPI.data.results;

//   const gamesAPIFull = gamesAPIResults.map((game) => {
//     const { id, name, rating, background_image, genres } = game;
//     const gameGenres = genres
//       .map((genre) => genre.name)
//       .filter((genre) => genre != null)
//       .join(", ");

//     return { id, name, rating, image: background_image, genres: gameGenres };
//   });

//   return res.json(gamesAPIFull);
// }
// else if(!name){
//         const gamesAPI = await axios(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}`);
//       const games = gamesAPI.data.results;
  
//       const dbGames = await Videogame.findAll()
  
//       const filteredGames = games.map(game => {
//         const { id, name, rating, background_image } = game;
//         return { id, name, rating, background_image };
//       });
  
//       res.status(200).json(filteredGames.concat(dbGames));
//       }

// } catch (error) {
//   res.status(404).json({ message: error.message });
// }
// });

// module.exports =  videogames;