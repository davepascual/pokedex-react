import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/NavBar'
import Home from './pages/Home';
import Pokemons from './pages/Pokemons';
import PokemonDetails from './pages/PokemonDetails';
import { BrowserRouter , Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
      <div className="container">
        <Switch>
          <Route path='/' exact>
              <Home/>
          </Route>
          <Route path='/pokemons' exact>
              <Pokemons/>
          </Route>
          <Route path='/pokemon/:pokemonName' exact>
              <PokemonDetails/>
          </Route>
          
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


