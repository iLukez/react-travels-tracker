import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Travels from "./components/Travels";
import Nav from "./components/Nav";
import Button from "./components/Button";
import AddTravelForm from "./components/AddTravelForm";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  const [user, setUser] = useState({
    name: 'Luca',
    surname: 'Donadel',
    age: 17
  });

  const [addTravel, setAddTravel] = useState(false);

  const [travels, setTravels] = useState(
    [
      {
        key: 1,
        startingPoint: 'Sacile',
        endingPoint: 'Orsago',
        distance: 8.9,
        car: 'Opel Karl',
        date: '30/06/2022'
      },
      {
        key: 2,
        startingPoint: 'Orsago',
        endingPoint: 'Caneva',
        distance: 6.5,
        car: 'Opel Karl',
        date: '30/06/2022'
      },
      {
        key: 3,
        startingPoint: 'Caneva',
        endingPoint: 'Sacile',
        distance: 6.6,
        car: 'Opel Karl',
        date: '30/06/2022'
      },
      {
        key: 4,
        startingPoint: 'Sacile',
        endingPoint: 'Orsago',
        distance: 6.6,
        car: 'Renault Clio',
        date: '31/06/2022'
      }
    ]
  )

  const [carsList, setCarsList] = useState(
    [
      {
        carName: 'Opel Karl',
        kmToLiterRatio: 19.6  
      },
      {
        carName: 'Renault Clio',
        kmToLiterRatio: 14.7  
      }
    ]
  )

  const changeAddState = (addTravel) => !addTravel

  return (
    <Router>
      <div className="container">
        <Header user={user}/>
        <Nav />
        <Button text={addTravel ? '- Delete Current Travel' : '+ Add New Travel'} color={addTravel ? '#db3535' :'#5cc3f7'} onAddTravel={() => setAddTravel(!addTravel)}/>
        {addTravel && <AddTravelForm />}
        <Routes>
          <Route path="/" element={<Travels  travels={travels} carsList={carsList}/>} />
        </Routes>
        <Footer />   
      </div>
    </Router>
  );
}

export default App;