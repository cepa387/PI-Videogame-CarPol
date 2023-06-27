import { Route } from 'react-router-dom/cjs/react-router-dom.min';
// import { useEffect} from "react";
// import { useDispatch } from "react-redux";
import './App.css';
import Home from './views/Home/Home';
import LandingPage from './views/LandingPage/LandingPage';
import Form from './views/Form/Form';
import Detail from './views/Detail/Detail';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';

// import { getVideogames } from "../src/redux/actions";

function App() {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getVideogames())
  // }, [dispatch]);


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
        <NavBar />
        <Form />
      </Route>

      <Route path="/detail/:id">
        <NavBar />
        <Detail />
      </Route>

      <Route path="/About">
        <NavBar />
        <About />
      </Route>

    </div>
  );
}

export default App;