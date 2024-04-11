import './App.css'
import React from 'react'

import Nav from './components/Nav'
import Home from './components/Home'
import Aulas from './components/Aulas'
import Sobre from './components/Sobre'

function App () {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      {/* <Aulas> </Aulas> 
      {/* <Sobre> </Sobre> 
      */}
    </div>
  );
}

export default App;