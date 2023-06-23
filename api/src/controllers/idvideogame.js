require("dotenv").config();
const axios = require('axios');
const { YOUR_API_KEY } = process.env;
const { Videogame, Genre } = require('../db.js');

async function idvideogame (req, res) {

    const {idVideogame } = req.params 

    try {
      let dbgame;

        if(idVideogame.toString().includes("-")){
          dbgame = await Videogame.findByPk(
            idVideogame,
            {include: {model:Genre,attributes:['name']},}
          )
          res.status(200).json(dbgame)
      }else{
        const response = (await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${YOUR_API_KEY}`));
        game = response.data;
        res.status(200).json(game)
      }     

    } catch (error) {
      res.status(500).json({error: "Id no encontrado"});
    }
}

module.exports = idvideogame;
