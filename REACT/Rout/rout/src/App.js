import './App.css'
import React from 'react'

import Nav from './components/Nav'
import Home from './components/Home'
import Aulas from './components/Aulas'
import Sobre from './components/Sobre'
import Assistir from './components/Assistir'
import Aula from './components/Aula'
import loginReducers from './reducers/loginReducers'

import { BrowserRouter as Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import PrivateRoute from './components/privateRoute'

const store = createStore (loginReducers) 

function App () {
  return (
    <Provider store={store}>
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

            <PrivateRoute path="/aulas">
              <Aulas/> 
            </PrivateRoute>

            <Route path="/assistir">
              <Assistir/> 
            </Route>

            <Route exact path="/">
              <Home/> 
            </Route>
            
          </Switch>
        </div>
    </Route>
  </Provider>
  );
}

export default App;