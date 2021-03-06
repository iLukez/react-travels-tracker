import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Travels from "./components/Travels";
import Nav from "./components/Nav";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  const [user, setUser] = useState({
    name: 'Luca',
    surname: 'Donadel',
    age: 17
  });

  const [travels, setTravels] = useState([
    {
      id: 1,
      startingPoint: 'Sacile',
      endingPoint: 'Orsago',
      distance: 8.9,
      car: 'Opel Karl',
      date: '30th June 2022'
    },
    {
      ite: 2,
      startingPoint: 'Orsago',
      endingPoint: 'Caneva',
      distance: 6.5,
      car: 'Opel Karl',
      date: '30th June 2022'
    },
    {
      id: 3,
      startingPoint: 'Caneva',
      endingPoint: 'Sacile',
      distance: 6.6,
      car: 'Opel Karl',
      date: '30th June 2022'
    },
    {
      id: 4,
      startingPoint: 'Sacile',
      endingPoint: 'Orsago',
      distance: 6.6,
      car: 'Renault Clio',
      date: '31th June 2022'
    }])

  return (
    <Router>
      <div className="container">
        <Header user={user}/>
        <Nav />
        <Routes>
          <Route path="/" element={<Travels  travels={travels}/>} />
        </Routes>
        <Footer />   
      </div>
    </Router>
  );
}

export default App;