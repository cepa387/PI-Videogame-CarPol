require("dotenv").config();
const axios = require('axios');
const { YOUR_API_KEY } = process.env;
const { Genre } = require('../db.js');

// Obtener los géneros existentes

const url = 'https://api.rawg.io/api/genres?key='

async function genres (req, res) {
  try{
  const gamesAPI = (await axios( url + YOUR_API_KEY));
  const genres = gamesAPI.data.results;  
  for( const element of genres ){
    await Genre.create({
      id: element.id,
      name: element.name
    })
  }
  res.status(200).json (genres)
 } catch(error){
  res.status(500).json({ message: error.message });
 }
}
// router.get('/', async (req, res) => {
//   try {
//     let genres = [];

//     // Verificar si la base de datos está vacía
//     const databaseGenres = await Genre.findAll();

//     if (databaseGenres.length === 0) {
//       // Obtener los géneros de la API si la base de datos está vacía
//       const apiResponse = await axios.get(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`);
//       const apiGenres = apiResponse.data.results;

//       // Guardar los géneros en la base de datos
//       for (const apiGenre of apiGenres) {
//         const genre = await Genre.create({
//           id: apiGenre.id,
//           name: apiGenre.name
//         });
//         genres.push(genre);
//       }
//     } else {
//       genres = databaseGenres;
//     }

//     // Obtener solo los campos id y name de los géneros
//     const genreData = genres.map(genre => ({
//       id: genre.id,
//       name: genre.name
//     }));

//     res.status(200).json(genreData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

module.exports = genres;
