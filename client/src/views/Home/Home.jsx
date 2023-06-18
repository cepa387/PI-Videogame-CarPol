import CardContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";

const Home = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{
            dispatch(getVideogames())
    }, [dispatch]);
    
    return(
        <>
            <h1>Esta Es La Vista Home</h1>
            <CardContainer/>
        </>
    )
}

export default Home;