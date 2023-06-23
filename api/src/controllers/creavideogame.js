const { Videogame, Genre } = require('../db.js');

async function creavideogame(req, res) {
  const { name, description, image, released, rating, platforms, genres } = req.body;

  try {
    let platformString = platforms.join(', ');

    const newGame = await Videogame.create({
      name,
      description,
      image,
      released,
      rating,
      platforms: platformString,
    });

    // Buscar los géneros en la base de datos
    const foundGenres = await Genre.findAll({ where: { name: genres } });

    // Asociar los géneros encontrados al nuevo juego
    await newGame.setGenres(foundGenres);

    res.status(200).json("Creado Exitosamente");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = creavideogame;
