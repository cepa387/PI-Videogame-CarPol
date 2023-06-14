require("dotenv").config();
const axios = require('axios');
const { YOUR_API_KEY } = process.env;
const { Videogame, Genre } = require('../db.js');

async function idvideogame (req, res) {

    const {idVideogame } = req.params 

    try {
      if(idVideogame.toString().includes("-")){
        console.log(idVideogame)
        const BDgame = await Videogame.findByPk(
          idVideogame,
          {include: {model:Genre,attributes:['name']},}
        )

        res.status(200).json(BDgame)
      }else{
        const respu = await axios(`https://api.rawg.io/api/games/${idVideogame}?key=${YOUR_API_KEY}`)
        const apiGame = respu.data;
        res.status(200).json(apiGame)
      }

    } catch (error) {
      res.status(404).json({error:"Error not fount"})
    }

}


// Obtengo el detalle de un videojuego en particular por ID
// router.get('/:id', async function (req, res) {
//   const { id } = req.params;

//   try {
//     if (id.includes("-")) {
//       const gameDB = await Videogame.findByPk(id, {
//         include: {
//           model: Genre,
//           attributes: ['name'],
//           through: { attributes: [] }
//         }
//       });

//       if (gameDB) {
//         const information = {
//           id: gameDB.id,
//           name: gameDB.name,
//           image: gameDB.image,
//           rating: gameDB.rating,
//           description: gameDB.description,
//           released: gameDB.released,
//           platforms: gameDB.platforms,
//           createdAt: gameDB.createdAt,
//           updatedAt: gameDB.updatedAt,
//           genres: gameDB.genres.map(p => p.name).join(', ')
//         };

//         return res.json(information);
//       }
//     } else {
//       const gameAPI = await axios.get(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`);

//       const gameData = gameAPI.data;
//       const information = {
//         id: gameData.id,
//         name: gameData.name,
//         image: gameData.background_image,
//         genres: gameData.genres && gameData.genres.map(p => p.name).filter(p => p != null).join(', '),
//         description: gameData.description_raw,
//         released: gameData.released,
//         rating: gameData.rating,
//         platforms: gameData.platforms && gameData.platforms.map(p => p.platform.name).filter(p => p != null).join(', ')
//       };

//       return res.json(information);
//     }
//   } catch (err) {
//     res.status(404).json({ error: "ID not found" });
//   }
// });

module.exports = idvideogame;
