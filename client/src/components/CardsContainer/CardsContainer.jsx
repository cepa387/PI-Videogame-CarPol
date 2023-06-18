import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux";

const CardContainer = () => {

        // const users = [
        //    { "id": 3498,
        //     "slug": "grand-theft-auto-v",
        //     "name": "Grand Theft Auto V",
        //     "released": "2013-09-17",
        //     "tba": false,
        //     "background_image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        //     "rating": 4.47,
        //    },
           
        //     {
        //         "id": 3328,
        //         "slug": "the-witcher-3-wild-hunt",
        //         "name": "The Witcher 3: Wild Hunt",
        //         "released": "2015-05-18",
        //         "tba": false,
        //         "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        //         "rating": 4.66
        //    },
        //    {
        //     "id": 4200,
		// "slug": "portal-2",
		// "name": "Portal 2",
		// "released": "2011-04-18",
		// "tba": false,
		// "background_image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
		// "rating": 4.61,
        //    }


        // ]


        const videogames = useSelector(state=>state.videogames)

    return (
        
        <div className= {style.container}>
            {videogames.map(user=>{
                return <Card
                    id = {user.id}
                    name = {user.name}
                    released = {user.released}
                    background_image = {user.background_image}
                    rating = {user.rating}
                />
            })}
        </div>
    )
}

export default CardContainer;