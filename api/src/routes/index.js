const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogames = require('../controllers/videogames');
const videogameName = require('../controllers/videogameName');
const idvideogame = require('../controllers/idvideogame');
const genres = require('../controllers/genres');
const creavideogame = require ('../controllers/creavideogame');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//trae los video juegos de la api y la bd
router.get('/videogames',videogames);
//trae el nombre del videojuego
router.get('/videogames/name',videogameName);
//Busqueda por ID
router.get('/videogames/:idVideogame',idvideogame);
//crea un videojuego
router.post('/videogames',creavideogame);
////trae los generos
router.get('/genres',genres);

module.exports = router;
