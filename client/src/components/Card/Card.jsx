import style from "./Card.module.css"
import { Link } from 'react-router-dom';
import NotFound from "../notFound/notFound";


function Card({ data }) {
	return (	
		<div className={style.card}>	
			
			<Link to={`/detail/${data.id}`}>
				{data.image === null || !data.image ? (<NotFound image={'noimage'} />) : (
					<img className={style.img} src={data.image} alt={data.name} />
				)}
			</Link>
			<div >
			<div ><strong>Nombre:</strong> {data.name}</div>
				<div >
					<div><strong>Genero:</strong> {data.genres}</div>
				</div>
				<div >
					<div ><strong>Rating:</strong> {data.rating}</div>
				</div>
			</div>
		</div>
	);
}
export default Card;