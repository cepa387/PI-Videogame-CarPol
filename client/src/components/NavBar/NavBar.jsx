import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, buscarGame } from "../../redux/actions";
import { Link } from "react-router-dom/"
import style from "./NavBar.module.css"



const NavBar = ({ handleChange, handleSubmit }) => {

    const dispatch = useDispatch();
    const videogames = useSelector((state) => state.videogames)
    const [Buscar, setBuscar] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setBuscar(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(buscarGame(Buscar))
        setBuscar('');
    }
    return (
        <div className={style.navega}>

            <Link to="/">INICIO</Link>
            <Link to="/home">HOME</Link>

            <input onChange={handleChange} value={Buscar} placeholder="Buscar videogame..." type="text" ></input>
            <button type="submit" onClick={handleSubmit}  > Buscar! </button>


            <Link to="/created">CREAR GAME</Link>
            <Link to="/About">ABOUT</Link>
        </div>
    )
}

export default NavBar;