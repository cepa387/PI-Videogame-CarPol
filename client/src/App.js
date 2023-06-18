import { Route, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './views/Home/Home';
import LandingPage from './views/LandingPage/LandingPage';
import Form from './views/Form/Form';
import Detail from './views/Detail/Detail';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';

function App() {

  const location = useLocation();

  return (
    <div className="App">

      {location.pathname !== "/" && <NavBar/>}

      <Route exact path="/">
        <LandingPage />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/created">
        <Form />
      </Route>

      <Route path="/detail">
        <Detail />
      </Route>

      <Route path="/About">
        <About />
      </Route>

    </div>
  );
}

export default App;
