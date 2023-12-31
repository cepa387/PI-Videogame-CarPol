import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres, filterByGenre, orderByCreator, orderAsc, orderDesc } from "../../redux/actions";
import style from "../Filtrer/Filtrer.module.css"
//  

export function Filter({paginate}) {
  const dispatch = useDispatch()
  const genres = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  // Filtrado por genre
  //Cuando se selecciona una opción en el campo de filtrado por género. Dispatcha la acción 
  const handleFilter = (e) => {
    dispatch(filterByGenre(e.target.value))
    paginate(e, 1);
  };


  // Ordenado
  const handleOrder = (e) => {
    if (e.target.value === "asc_name" || e.target.value === "asc_rating") {
      dispatch(orderAsc(e.target.value));
    } else if (e.target.value === "desc_name" || e.target.value === "desc_rating") {
      dispatch(orderDesc(e.target.value));
    } else {
      dispatch(filterByGenre(e.target.value));
    }
  };

  // Filtrado por API/DB
  const handleCreator = (e) => {
    if (e.target.value === "Api" || e.target.value === "Created") {
      dispatch(orderByCreator(e.target.value));
      paginate(e, 1);
    } else {
      dispatch(filterByGenre(e.target.value));
      paginate(e, 1);
    }
    
  };

  return (
    
    <div className= {style.filtro}>
     
      <div>
      <br></br>
      <br></br>
        <div className= {style.div} >Filtrar Por Genero</div>
        <select onChange={(e) => handleFilter(e)}>
          <option default>All</option>
          {genres.map((G) => (
            <option value={G.name}>{G.name}</option>
          ))}
        </select>
      </div>
      <div>
      <br></br>
      <br></br>
        <div className= {style.div}> Ordenar Rati/Nomb</div>
        <select onChange={(e) => handleOrder(e)}>
          <option value="All" default>All</option>
          <option value="asc_name">Alphabetically (A-Z)</option>
          <option value="desc_name">Alphabetically (Z-A)</option>
          <option value="asc_rating">Rating (Lower-Higher)</option>
          <option value="desc_rating">Rating (Higher-Lower)</option>
        </select>
      </div>
      <div>
      <br></br>
      <br></br>
        <div className= {style.div}>Filtrar por Origen</div>
        <select onChange={(e) => handleCreator(e)} >
          <option default>All</option>
          <option value="Api">Api videogames</option>
          <option value="Created">User videogames</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;


