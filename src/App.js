import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Travels from "./components/Travels";
import Nav from "./components/Nav";
import AddTravelButton from "./components/AddTravelButton";
import AddTravelForm from "./components/AddTravelForm";
import AddCarButton from "./components/AddCarButton";
import AddCarForm from "./components/AddCarForm"
import Cars from "./components/Cars";
import { useState , useEffect} from "react";
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {

  const [user, setUser] = useState({
    id: 1,
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

  // Addition of the new car provided by AddCarForm

  const addCar = (carName, kmLRatio) => {
    // Generation of the new car name

    let newKey;

    if (carsList.length === 0) {
      newKey = 1;
    }
    else {
      newKey = carsList.at(-1).key + 1;
    }

    // Capitalization of the car name

    carName = carName.toLowerCase().split(' ');

    for(let i = 0; i < carName.length; i++) {
      carName[i] = carName[i].at(0).toUpperCase() + carName[i].substring(1);
    }

    carName = carName.join(' ');

    // Creation of the new car object

    const newCar = {
      key: newKey,
      carName: carName,
      kmToLiterRatio: kmLRatio
    }

    setCarsList([...carsList, newCar])
  }

  const removeTravel = (key) => {
    let newTravels = travels.filter((travel) => travel.key !== key)
    setTravels(newTravels);
  }

  const removeCar = (key) => {
    let newCarsList = carsList.filter((cars) => cars.key !== key)
    setCarsList(newCarsList);
  }

  const location = useLocation();

  useEffect(() => {
    setIsAdding(false);
  }, [location]);

  return (
    <div className="container">
      <Header user={user}/>
      <Nav />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <AddTravelButton text={isAdding ? '- Delete Travel' : '+ Add New Travel'} color={isAdding ? '#db3535' :'#5cc3f7'} onIsAdding={() => setIsAdding(!isAdding)}/>
              {isAdding && <AddTravelForm addTravel={addTravel} carsList={carsList} setIsAdding={() => setIsAdding(!isAdding)}/>}
              <Travels  travels={travels} carsList={carsList} removeTravel={removeTravel}/>
            </>
          }
        />
        <Route path='/cars'
          element={
            <>
              <AddCarButton text={isAdding ? '- Delete Car' : '+ Add New Car'} color={isAdding ? '#db3535' :'#5cc3f7'} onIsAdding={() => setIsAdding(!isAdding)}/>
              {isAdding && <AddCarForm addCar={addCar} setIsAdding={() => setIsAdding(!isAdding)}/>}
              <Cars carsList={carsList} removeCar={removeCar}/>
            </>
          }
        />
      </Routes>
      <Footer />   
    </div>
  );
}

export default App;