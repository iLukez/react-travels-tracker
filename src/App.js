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

  const [isAdding, setIsAdding] = useState(false);

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
        key: 1,
        carName: 'Opel Karl',
        kmToLiterRatio: 19.6  
      },
      {
        key: 2,
        carName: 'Renault Clio',
        kmToLiterRatio: 14.7  
      }
    ]
  )

  // Addition of the new travel provided by AddTravelForm

  const addTravel = (newStartingPoint, newEndingPoint, newDistance, newCar, newDate) => {
    // Generation of the travel's key

    let newKey;

    if (travels.length === 0) {
      newKey = 1;
    }
    else {
      newKey = travels.at(-1).key + 1;
    }

    // Capitalization of the car's name

    newCar = newCar.toLowerCase().split(' ');

    for(let i = 0; i < newCar.length; i++) {
      newCar[i] = newCar[i].at(0).toUpperCase() + newCar[i].substring(1);
    }

    newCar = newCar.join(' ');

    // Creation of the new travel object

    const newTravel = {
      key: newKey,
      startingPoint: newStartingPoint,
      endingPoint: newEndingPoint,
      distance: newDistance,
      car: newCar,
      date: newDate
    }

    setTravels([...travels, newTravel]);
  }

  return (
    <Router>
      <div className="container">
        <Header user={user}/>
        <Nav />
        <Button text={isAdding ? '- Delete Current Travel' : '+ Add New Travel'} color={isAdding ? '#db3535' :'#5cc3f7'} onIsAdding={() => setIsAdding(!isAdding)}/>
        {isAdding && <AddTravelForm addTravel={addTravel} carsList={carsList} setIsAdding={() => setIsAdding(!isAdding)}/>}
        <Routes>
          <Route path="/" element={<Travels  travels={travels} carsList={carsList}/>} />
        </Routes>
        <Footer />   
      </div>
    </Router>
  );
}

export default App;