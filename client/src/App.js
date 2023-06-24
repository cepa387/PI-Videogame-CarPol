import { Route, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Home from './views/Home/Home';
import LandingPage from './views/LandingPage/LandingPage';
import Form from './views/Form/Form';
import Detail from './views/Detail/Detail';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';

import { getVideogames, buscarGame } from "../src/redux/actions";

function App() {

 const location = useLocation();
 const dispatch = useDispatch();
    const videogames = useSelector((state) => state.videogames)
    const [Buscar, setBuscar] = useState("");
    

 function handleSubmit(e) {
  e.preventDefault();
  dispatch(buscarGame(Buscar))
  setBuscar('');
  
}

function handleChange(e) {
  e.preventDefault();
  setBuscar(e.target.value);
}

useEffect(() => {
  dispatch(getVideogames())
}, [dispatch]);


  return (
    <div className="App">
      
      {/* {location.pathname !== "/" && <NavBar handleChange={handleChange} handleSubmit={handleSubmit} />} */}

      <Route exact path="/">
        <LandingPage />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/created">
        <Form />
      </Route>

      <Route path="/detail/:id">
        <Detail />
      </Route>

      <Route path="/About">
        <About />
      </Route>
      
    </div>
  );
}

export default App;