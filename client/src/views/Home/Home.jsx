import CardContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, resetAll  } from "../../redux/actions";
import NavBar from '../../components/NavBar/NavBar';
import style from "./Home.module.css"
import { Filter } from "../../components/Filtrer/Filtrer";
import { Pagination } from "../../components/Pagination/Pagination";
import {buscarGame} from "../../redux/actions";

export default function Home  () {

    const dispatch = useDispatch();
    const videogames = useSelector((state) => state.videogames)
    const filteredVideogames = useSelector((state) => state.filteredVideogames);
    const filterBy = useSelector((state) => state.filterBy);
    const orderBy = useSelector((state) => state.orderBy);

    const [Buscar, setBuscar] = useState("");
    
    function handleChange(e) {
        e.preventDefault();
        setBuscar(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(buscarGame(Buscar))
    }

    


    useEffect(() => {
        dispatch(resetAll());
        dispatch(getVideogames())
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

      // Filtrado y Ordenado
  let allVideogames;
  filterBy === "All" && orderBy === "Select"
    ? (allVideogames = videogames)
    : (allVideogames = filteredVideogames);


    // Paginacion
    function paginate(e, num) {
        e.preventDefault();
        setPage(num);
    }

    const [page, setPage] = useState(1);
    const [videogamesPerPage] = useState(15);

    let lastCardPerPage = page * videogamesPerPage; //Se calcula el índice del último videojuego que se mostrará en la página actual multiplicando page por videogamesPerPage.
    let firtsCardPerPage = lastCardPerPage - videogamesPerPage; //  Se calcula el índice del primer videojuego que se mostrará en la página actual restando 
    let currentPageGames = allVideogames.slice(firtsCardPerPage, lastCardPerPage);

    return (
        <div >
            <NavBar  handleChange={handleChange} handleSubmit={handleSubmit} />
              <Filter paginate={paginate} />
            <CardContainer  videogames={currentPageGames} />
            <Pagination
                videogamesPerPage={videogamesPerPage}
                totalVideogames={allVideogames.length}
                paginate={paginate}
            />
        </div>
    )
}

// export default Home;