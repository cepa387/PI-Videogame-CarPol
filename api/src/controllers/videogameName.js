require("dotenv").config();
const axios = require('axios');
const { YOUR_API_KEY } = process.env;
const{Videogame,Genre} = require('../db.js');


async function videogameName (req, res) {
  const { name }= req.query;
  const BDname = await Videogame.findAll({
    where: {name:name},
    include:[Genre]
  })
  if(BDname){
    var GameBD = BDname.map((game)=>{
      const {id,name,image,rating,genres} = game;

      const genresBD = genres.map((genre)=>genre.name).join(', ')
      return {id,name,image,rating,genres:genresBD}
    })
  }
  const response = (await axios(`https://api.rawg.io/api/games?search=${name}&key=${YOUR_API_KEY}&page_size=15`))
  const respApi = response.data.results
  res.status(200).json(respApi.concat(GameBD)) 
}







// router.get('/', async (req, res) => {
//   const { name }= req.query;
//   //  res.send("aquillega");
//   try {
//     let games = [];

//     // Buscar en la API
//     const apiResponse = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${YOUR_API_KEY}&page_size=15`) 
//     const apiGames = apiResponse.data.results;
//     //apiGames.send("aja");
//     // Buscar en la base de datos
//     // Aquí debes agregar la lógica para buscar los juegos en la base de datos
//     const databaseGames = await Videogame.find({ name: { $regex: name, $options: 'i' } }).limit(15);

//     // Agregar los juegos de la API al arreglo de juegos
//     games = games.concat(apiGames);

//     // Agregar los juegos de la base de datos al arreglo de juegos
//     games = games.concat(databaseGames);

//     // Construir el objeto de respuesta con los juegos encontrados
//     const responseGames = games.map(game => {
//       return {
//         id: game.id,
//         name: game.name,
//         rating: game.rating,
//         background_image: game.background_image
//       };
//     });

//     if (responseGames.length > 0) {
//       res.status(200).json(responseGames);
//     } else {
//       res.status(404).json({ message: 'No se encontraron videojuegos con ese nombre' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Error al buscar videojuegos' });
//   }
// });

module.exports = videogameName;
