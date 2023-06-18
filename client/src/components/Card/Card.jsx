import style from "./Card.module.css"

const Card = (props) => {
    return (
        <div className= {style.card} >
            <p>Id: {props.id}</p>
            <p>Name: {props.name}</p>
            <p>Release: {props.released}</p>
            <img 
            width={280}
            height={280}
            src={props.background_image}
            alt="Not found"
         />
            <p>Rating: {props.rating}</p>
        </div>
    )
}

export default Card;
