import './App.css'
import React from 'react'

import Nav from './components/Nav'
import Home from './components/Home'
import Aulas from './components/Aulas'
import Sobre from './components/Sobre'

import { BrowserRouter as Route, Switch } from 'react-router-dom'

function App () {
  return (
    <Route>
      <div className="App">
        <Nav/> 
        <Switch>
          <Route exact path="/">
            <Home/> 
          </Route>

          <Route path="/aulas/a">
            <div className="page">Conteudo</div>
          </Route>

          <Route path="/aulas">
            <Aulas/> 
          </Route>

          <Route path="/sobre">
            <Sobre/> 
          </Route>

        </Switch>
      </div>
    </Route>
  );
}

export default App;