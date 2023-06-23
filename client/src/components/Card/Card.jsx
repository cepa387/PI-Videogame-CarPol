import style from "./Card.module.css"
import { Link } from 'react-router-dom';
import NotFound from "../notFound/notFound";

const Card = (props) => {

    return (
        <div className={style.card} >
                {/* <p>ID: {props.id}</p> */}
            <Link to={`/detail/${props.id}`}>
                {props.image === null || !props.image ? (
                    <NotFound image={'noimage'} />
                ) : (
                    <img className={style.img} src={props.image} alt={props.name} />
                )}
            </Link>
            <p>Name: {props.name}</p>
            <p>Genres: {props.genres}</p>
        </div>
    )
}

export default Card;
