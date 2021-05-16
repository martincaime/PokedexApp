import React from 'react';
import NavBar from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import About from './components/About.jsx';
import Details from './components/Details.jsx';
import MyTeam from './components/MyTeam.jsx';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={NavBar}/>
      <Route path='/about' component={About}/>
      <Route path='/pokemon/:pokemonId' component={Details}/>
      <Route path='/myteam' component={MyTeam}/> 
      <Route exact path='/' component={Cards}/>
    </div>
  );
}

export default App;