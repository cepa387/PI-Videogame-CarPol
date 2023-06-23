import axios from "axios";
import React, { useEffect } from 'react';
import { useState } from "react";
import style from "./Form.module.css";
import { getGenres} from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';


const Form = () => {
  const [game, setGame] = useState({
    name: "",
    description: "",
    image: "",
    released: "",
    rating: 0,
    genres: [],
    platforms: [],
  });


  const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres);

  useEffect(() => {
    if (!genres|| !genres.length) {
        dispatch(getGenres());
    }
}, [dispatch, genres]);


//   const [errors, setErrors] = useState({
//     name: "",
//     description: "",
//     image: "",
//     released: "",
//     rating: 0,
//     genres: "",
//     platforms: "",
//   });

  let platforms = ["PS4", "PS5", "PC", "SEGA", "NINTENDO 64", "NINTENDO SWITCH", "ATARI", "XBOX ONE", "XBOX X", "GAME BOY ADVANCED"];

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setGame({ ...game, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/videogames/", game)
      .then((res) => {
        alert("Game created successfully");
        setGame({
          name: "",
          description: "",
          image: "",
          released: "",
          rating: 0,
          genres: [],
          platforms: [],
        });
      })
      .catch((err) => {
        alert("Error creating game");
        console.error(err);
      });
  };

  return (
    <form onSubmit={submitHandler} className={style.form}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={game.name}
          onChange={changeHandler}
          name="name"
        ></input>
      </div>
      <div>
        <label>Description: </label>
        <input
          type="text"
          value={game.description}
          onChange={changeHandler}
          name="description"
        ></input>
      </div>
      <div>
        <label>Image: </label>
        <input
          type="text"
          value={game.image}
          onChange={changeHandler}
          name="image"
        ></input>
      </div>
      <div>
        <label>Released: </label>
        <input
          type="date"
          value={game.released}
          onChange={changeHandler}
          name="released"
        ></input>
      </div>
      <div>
        <label>Rating: </label>
        <input
          type="number"
          value={game.rating}
          onChange={changeHandler}
          name="rating"
        ></input>
      </div>
      <div>
        <label>Genres: </label>
        <input
          type="text"
          value={game.genres}
          onChange={changeHandler}
          name="genres"
        ></input>
      </div>
      <div>
                <label  className={style.form}>Platforms: </label>
                {
                    platforms?.sort().map((platform) => {
                        return(
                            <div  className={style.form}>
                                <input type="checkbox" value={platform} name='platforms'  className={style.form}/>
                                <label  className={style.form}>{platform}</label>
                            </div>
                        );
                    })
                }
                
            </div>
      <div>
        <button type="submit">CREAR</button>
      </div>
    </form>
  );
};

export default Form;


