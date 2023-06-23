import { Link } from "react-router-dom/"
import style from "./NavBar.module.css"

const NavBar = () => {

    return (
        <div className={style.mainContainer}>
            
            <Link to="/">INICIO</Link>
            <Link to="/home">HOME</Link>
            <div className="searchbar">
                <input placeholder="Buscar videogame..." type="text" ></input>
                <button > Buscar! </button>
            </div>
            <Link to="/created">FORM</Link>
            <Link to="/About">ABOUT</Link>

              

        </div>
    )
}

export default NavBar;