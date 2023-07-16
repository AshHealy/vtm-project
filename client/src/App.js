import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar"
import Characters from "./components/Characters";
import CharacterCreation from "./components/CharacterCreation";
import Title from './styles/Title.js';


function App() {
  return (

    <>

      <Title>Vampire The Masquerade V5 Dashboard App</Title>

      <Router>
          <NavBar/>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/characters' element={<Characters/>}/>
              <Route path='/charactercreation' element={<CharacterCreation/>}/>
            </Routes>
        </Router>

    </>


  );
}

export default App;
