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
            
            <div >
                        
                    <p><strong>Id:</strong>  {videogame.id}</p>
                    <p><strong>Nombre:</strong> {videogame.name}</p>      
                                  
                    <p>{videogame.hasOwnProperty("background_image") ?
                        (<img src={videogame.background_image} className={style.img} alt="not found" />) :
                        (<img src={videogame.image} className={style.img} alt="not found" />)}</p>
                       

                        <div >
                    <p><strong> Plataformar:</strong> {Array.isArray(videogame.platforms) ? (
                            videogame.platforms.map(p => p.platform.name).join(", ")
                        ) : (
                            (videogame.platforms)
                        )}</p>
                    <p> <strong>Fecha De Lanzamiento:</strong>{videogame.released}</p>
                    <p><strong>Rating:</strong> {videogame.rating}</p>
                <p><strong>Genres:</strong>   {Array.isArray(videogame.genres) ? (
                    videogame.genres.map(genre => genre.name).join(", ")
                ) : (
                    "Genres data is not available"
                )}</p>       
                    <p ><strong>Descripción:</strong></p> {videogame.description  }
                 
                  
                </div>
                
            </div>



        </div>
    )
}

export default GameDetail;
