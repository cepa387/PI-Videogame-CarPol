import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux";

// const CardContainer = () => {

//         const videogames = useSelector(state=>state.videogames)
        

//     return (      
        
//         <div className= {style.container}>
//             {videogames.map(user=>{
//                 return <Card
//                     id = {user.id}
//                     name = {user.name}
//                     released = {user.released}
//                     image = {user.image}
//                     rating = {user.rating}
//                     genres = {user.genres}
//                     platforms = {user.platforms}
//                 />
//             })}
//         </div>
//     )
// }
// export default CardContainer;


export default function CardContainer ({videogames}) {
    return (
      <div className= {style.container} >
        { videogames.length > 0 ?
        videogames.map((data) => (<Card data={data} />)) 
        : "loading..........."
        }
      </div>
    );
  };
  
  
