import style from "./Landing.module.css"
import { Link } from "react-router-dom";
const LandingPage = () =>{
    return(
        <div class= {style.background}>
      <div class={style.title} >
        <h2>Welcome to Videogames</h2>
        <Link to="/home">
          <button type="submit">Enter</button>
        </Link>
      </div>
      
    </div>
    )
}

export default LandingPage;