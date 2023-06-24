import style from "./Card.module.css"
import { Link } from 'react-router-dom';
import NotFound from "../notFound/notFound";

// const Card = (props) => {

//     return (
//         <div className={style.card} >
//             <Link to={`/detail/${props.id}`}>
//                 {props.image === null || !props.image ? (
//                     <NotFound image={'noimage'} />
//                 ) : (
//                     <img className={style.img} src={props.image} alt={props.name} />
//                 )}
//             </Link>
//             <p>Name: {props.name}</p>
//             <p>Genres: {props.genres}</p>
//         </div>
//     )
// }

// export default Card;

function Card({data}) {
	return (
		<div className={style.card}>
			<Link to={`/detail/${data.id}`}>
				{data.image === null || !data.image ? (
					<NotFound image={'noimage'} />
				) : (
					<img className={style.img} src={data.image} alt={data.name} />
				)}
			</Link>
			<div >
				<div >
					<div >Name: {data.name}</div>
					<div>Genero: {data.genres}</div>
				</div>
				<div >
					<div >Rating: {data.rating}</div>
				</div>
			</div>
		</div>
	);
}
export default Card;