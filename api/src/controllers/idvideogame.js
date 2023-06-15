require("dotenv").config();
const axios = require('axios');
const { YOUR_API_KEY } = process.env;
const { Videogame, Genre } = require('../db.js');

async function idvideogame (req, res) {

    const {idVideogame } = req.params 

    try {
      let game;

      if(idVideogame.toString().includes("-")){
        game = await Videogame.findByPk(
          idVideogame,
          {include: {model:Genre,attributes:['name']},}
        )
      }else{
        const response = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${YOUR_API_KEY}`);
        game = response.data;
      }

      if (game) {
        res.status(200).json(game);
      } else {
        res.status(404).json({error: "Juego no encontrado"});
      }

    } catch (error) {
      res.status(500).json({error: "Error en el servidor"});
    }
}

module.exports = idvideogame;
