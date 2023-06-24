require('dotenv').config();
const axios = require("axios");
const { YOUR_API_KEY } = process.env; 
const { Videogame, Genre } = require('../db.js');

async function gameName (req, res){
    const {name} = req.query;
    
    let gamesDB = await Videogame.findAll({
      include: {
        model: Genre,
        attributes: ['name'],
        through: { attributes: [] }
    }
      });

      if (gamesDB) {
        var gamesDBFull = gamesDB.map((game) => {
          const { id, name, image, rating, genres } = game;

          const gameGenres = genres.map((genre) => genre.name).join(", ");
          return { id, name, image, rating, genres: gameGenres };
        }); 
      }

      const response = (await axios(`https://api.rawg.io/api/games?search=${name}&key=${YOUR_API_KEY}`));
    const gamesAPIResults = response.data.results.slice(0,15).map(game => {
      return{
        id: game.id, // desde el front voy a acceder como el nombre de la propiedad
        name: game.name,
        image: game.background_image,
        rating: game.rating,
        genres: game.genres.map(g => g.name).join(", "),
        platforms: game.platforms.map(p => p.platform.name).join(", "),
        released: game.released
    }
    })
    let getDbByName = gamesDBFull.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
    res.status(200).json(gamesAPIResults.concat(getDbByName));
    }

module.exports = gameName;