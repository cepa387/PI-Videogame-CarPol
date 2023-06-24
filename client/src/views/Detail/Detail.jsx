import React, { useEffect } from "react";
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { idGame } from "../../redux/actions";
// import NotFound from "../../components/notFound/notFound";
import style from "../Detail/Detail.module.css";

function GameDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const videogame = useSelector((state) => state.game);

    useEffect(() => {
        dispatch(idGame(id));
    }, [dispatch, id]);

    return (
        <div className={style.card}>
            
            <div className={style.card}>
                <p>Id:  {videogame.id}</p>
                <p>Nombre: {videogame.name}</p>

                <p>{videogame.hasOwnProperty("background_image") ?
                    (<img src={videogame.background_image} className={style.img} alt="not found" />) :
                    (<img src={videogame.image} className={style.img} alt="not found" />)}</p>
                   
                   <p> Plataformar: {Array.isArray(videogame.platforms) ? (
                        videogame.platforms.map(p => p.platform.name).join(", ")
                    ) : (
                        (videogame.platforms)
                    )}</p>
                    <p >Descripción:</p> {videogame.description}
                    <p>Fecha De Lanzamiento: {videogame.released}</p>
                    <p>Rating: {videogame.rating}</p>
                <p>Genres:   {Array.isArray(videogame.genres) ? (
                    videogame.genres.map(genre => genre.name).join(", ")
                ) : (
                    "Genres data is not available"
                )}</p>
                
            </div>



        </div>
    )
}

export default GameDetail;
