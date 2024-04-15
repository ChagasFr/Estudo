import './App.css'
import React from 'react'

import Nav from './components/Nav'
import Home from './components/Home'
import Aulas from './components/Aulas'
import Sobre from './components/Sobre'
import Assistir from './components/Assistir'
import Aula from './components/Aula'

import { BrowserRouter as Route, Switch } from 'react-router-dom'

function App () {
  return (
    <Route>
      <div className="App">
        <Nav/> 
        <Switch>

          <Route path="/sobre">
            <Sobre/> 
          </Route>

          <Route path="/aulas/:id">
            <Aula/>
          </Route>

          <Route path="/aulas">
            <Aulas/> 
          </Route>

          <Route path="/assistir">
            <Assistir/> 
          </Route>

          <Route exact path="/">
            <Home/> 
          </Route>
          
        </Switch>
      </div>
    </Route>
  );
}

export default App;