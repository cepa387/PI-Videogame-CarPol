import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux";

export default function CardContainer ({videogames}) {
    return (
      <div className= {style.container} >
        { videogames.length > 0 ?
        videogames.map((data) => (<Card data={data} />)) 
        : <Loading/>
        }
      </div>
    );
  };
  
  
