import { Link,NavLink } from "react-router-dom/"
import style from "./NavBar.module.css"

const NavBar = () => {

    return(
        <div className= {style.mainContainer}>
            <Link to="/">INICIO</Link>
            <Link to="/home">HOME</Link>
            <Link to="/created">FORM</Link>
            <Link to="/About">ABOUT</Link>
            <div className="searchbar">
                {/* <form > */}
                    <input placeholder="Search videogame..." type="text" ></input>
                    {/* <NavLink > */}
                        <button > Go! </button>
                    {/* </NavLink> */}
                {/* </form> */}
            </div>
        </div>
    )
}

export default NavBar;