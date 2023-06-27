import React from "react";
import {useState } from "react";
import { useDispatch} from "react-redux";
import { buscarGame } from "../../redux/actions";
import { Link } from "react-router-dom/"
import style from "./NavBar.module.css"



const NavBar = () => {

    const dispatch = useDispatch();
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