const {Videogame,Genre} = require('../db.js');


async function creavideogame (req, res) {
  
  const { name, description, image, released, rating, platforms, genres  } = req.body;

  try {

    let platformString = platforms.join(', ')
    
    let newGame = await Videogame.create({
            name,
            description,
            image,
            released,
            rating,
            platforms: platformString,
          });

          let DBgame = await Genre.findAll({where: {name:genres}});
          newGame.addGenre(DBgame);
          res.status(200).json(newGame)

  } catch (error) {
    res.status(404).json({ message: message.error });
  }
}
//   try {
//     // Verificar que se hayan proporcionado los datos necesarios
//     if (!name || !rating || !platforms || !released ) {
//       return res.status(400).json({ message: 'Falta información requerida' });
//     }
  
//     let platformString = platforms.join(', ')

//     // Crear el videojuego en la base de datos
//     const newGame = await Videogame.create({
//       name,
//       description,
//       image,
//       released,
//       rating,
//       platforms: platformString,
//     });

//     res.status(201).json({ message: 'Videojuego creado correctamente', newGame });
//   } catch (error) {
//     res.status(500).json({ message: 'Error al crear el videojuego' });
//   }
// });

module.exports = creavideogame;
