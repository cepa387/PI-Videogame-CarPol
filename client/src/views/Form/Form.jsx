import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postGame, getGenres,getVideogames } from "../../redux/actions";
import style from "./Form.module.css"
// import "./Create.css";

export default function Create() {
    const dispatch = useDispatch();
    const genres = useSelector((store) => store.genres);
    const genres1 = Array.isArray(genres) ? genres.slice(0, 10) : [];
    const genres2 = Array.isArray(genres) ? genres.slice(10, 20) : [];
    

    const [game, setGame] = useState({
        name: "",
        description: "",
        image: "",
        released: "",
        rating: 0,
        genres: [],
        platforms: [],
    });

    useEffect(() => {
        dispatch(getGenres());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const randomPlatforms = ["PC", "iOS", "Android", "macOS",  "PlayStation 4", "PlayStation 5", "Xbox", "PS Vita"]

    const ChangeInput = (e) => {
        if (e.target.name === "genres" || e.target.name === "platforms") {
        const arr = game[e.target.name];
        setGame({
            ...game,
            [e.target.name]: arr.concat(e.target.value),
        });
    } else {
        setGame({
            ...game,
            [e.target.name]: e.target.value,
        });
    }
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();

        const obj = {
        name: game.name,
        description: game.description,
        image: game.image,
        released: game.released,
        rating: game.rating,
        genres: game.genres,
        platforms: game.platforms,
        };

        // Validaciones
        if (!obj.name) {
            alert("El campo nombre no puede estar vacio")
            return
        }
        if (!obj.description) {
            alert("El campo descripción no puede estar vacio")
            return
        }if (!obj.released) {
            alert("La fecha no puede estar vacio")
            return
        }if (obj.rating > 5 || obj.rating < 0) {
            alert("El campo rating debe ser un numero entre 0 a 5")
            return
        }


        dispatch(postGame(obj));
        e.target.reset();
        alert("Videogame created successfully!");
        //  dispatch(getVideogames())

        setGame({
            name: "",
            description: "",
            image: "",
            released: "",
            rating: 0,
            genres: [],
            platforms: [],
        });
    };

return (
    
    <div className={style.form}>
        <h1>Crear un videoGame</h1>
        <form
            noValidate
            onChange={(e) => ChangeInput(e)}
            onSubmit={(e) => handleSubmit(e)}
        >
            <div>
            <div>
                <div >
                    <div>
                        <label>Nombre: </label>
                        <input                      
                        type="text"
                        name="name"
                        value={game.name}
                        ></input>
                    </div>
                    <div>
                        <label>Descripción: </label>
                        <input
                        
                        type="text"
                        name="description"
                        value={game.description}
                        ></input>
                    </div>
                    <div>
                        <label>Fecha Lanzamiento: </label>
                        <input
                        
                        type="date"
                        name="released"
                        value={game.released}
                        ></input>
                    </div>
                    <div>
                        <label>Rating: </label>
                        <input                        
                        type="number"
                        name="rating"
                        // step="0.1"
                        // min="0" 
                        // max="5"
                        value={game.rating}
                        ></input>
                    </div>
                </div>
                <div >
                    <label>Image URL: </label>
                    <input
                    
                    type="text"
                    name="image"
                    value={game.image}
                    ></input>
                </div>
            </div>
            <br/>
                <div className={style.column}>
                    <div >
                        <label>Generos:</label>
                        <br/><br/>
                        <div >
                            <div>
                                {genres1.map((gen) => (
                                <div key={gen.name}>
                                    <input
                                    type="checkbox"
                                    name="genres"
                                    value={gen.name}
                                    ></input>
                                    <label name={gen}>{gen.name}</label>
                                </div>
                                ))}
                            </div>
                            <div>
                                {genres2.map((gen) => (
                                <div key={gen.name}>
                                    <input
                                    type="checkbox"
                                    name="genres"
                                    value={gen.name}
                                    ></input>
                                    <label name={gen}>{gen.name}</label>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div >
                        <label>Plataformas: </label>
                        <br/><br/>
                        <div >
                            {randomPlatforms.map((P) => (
                            <div key={P}>
                                <input
                                type="checkbox"
                                name="platforms"
                                value={P}
                                ></input>
                                <label name={P}>{P}</label>
                            </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
                <button  type="submit">
                    Create!
                </button>
            </div>
        </form>
    </div>
);
}

