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
import swal from 'sweetalert';
import { useState , useEffect} from "react";
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {

  const [user, setUser] = useState({
    id: 1,
    name: 'Luca',
    surname: 'Donadel',
    age: 17
  });

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

  const findTravelCost = (travel) => {
    const carUsed = carsList.find( (c) => {
      if (travel.car === c.carName) {
        return true;
      }
      return false;
    })

    const travelCost = (travel.distance / carUsed.kmToLiterRatio) * gasCostPerLiter;

    return travelCost.toFixed(2);
  }

  const [travels, setTravels] = useState(
    // The cost is calculated and assigned here so that it stays the same even if the car is removed by the user
    [
      {
        key: 1,
        startingPoint: 'Sacile',
        endingPoint: 'Orsago',
        distance: 8.9,
        car: 'Opel Karl',
        date: '30/06/2022',
        get cost() {
          return findTravelCost(this);
        }
      },
      {
        key: 2,
        startingPoint: 'Orsago',
        endingPoint: 'Caneva',
        distance: 6.5,
        car: 'Opel Karl',
        date: '30/06/2022',
        get cost() {
          return findTravelCost(this);
        }
      },
      {
        key: 3,
        startingPoint: 'Caneva',
        endingPoint: 'Sacile',
        distance: 6.6,
        car: 'Opel Karl',
        date: '30/06/2022',
        get cost() {
          return findTravelCost(this);
        }
      },
      {
        key: 4,
        startingPoint: 'Sacile',
        endingPoint: 'Orsago',
        distance: 6.6,
        car: 'Renault Clio',
        date: '31/06/2022',
        get cost() {
          return findTravelCost(this);
        }
      }
    ]
  )

  const [isAdding, setIsAdding] = useState(false);  // This variable indicates whether the add travel/car forms are active or not
  const [gasCostPerLiter, setGasCostPerLiter] = useState(2.01);

  const generateKey = (list) => {
    // Generate a key to be used for a new element of a list
    if (list.length === 0) {
       return 1;
    }
    return list.at(-1).key + 1;
  }

  const capitalizeStrWords = (string) => {
    // Capitalize each words of a string (separated by ' ')
    string = string
             .toLowerCase()
             .split(' ');

    for(let i = 0; i < string.length; i++) {
      string[i] = string[i].at(0).toUpperCase() + string[i].substring(1);
    }
    string = string.join(' ');

    return string;
  }

  const addTravel = (newStartingPoint, newEndingPoint, newDistance, newCar, newDate) => {
    let newKey;

    newKey = generateKey(travels);
    newCar = capitalizeStrWords(newCar);
    
    const newTravel = {
      key: newKey,
      startingPoint: newStartingPoint,
      endingPoint: newEndingPoint,
      distance: newDistance,
      car: newCar,
      date: newDate,
      get cost() {
        return findTravelCost(this);
      }
    }

    setTravels([...travels, newTravel]);
  }

  const addCar = (carName, kmLRatio) => {
    let newKey;

    newKey = generateKey(carsList);
    carName = capitalizeStrWords(carName);

    const newCar = {
      key: newKey,
      carName: carName,
      kmToLiterRatio: kmLRatio
    }

    setCarsList([...carsList, newCar])
  }

  const removeTravel = (key) => {
    swal({
      title: "Are you sure you want to remove the travel?",
      text: "Once deleted, you will not be able to recover it",
      icon: "warning",
      buttons: ['Cancel', 'Delete'],
    })
    .then((willDelete) => {
      if (willDelete === true) {
        let newTravels = travels.filter((travel) => travel.key !== key)
        setTravels(newTravels);
      };
    })
    
  }

  const removeCar = (key) => {
    swal({
      title: "Are you sure you want to remove the car?",
      text: "Once deleted, you will not be able to recover it",
      icon: "warning",
      buttons: ['Cancel', 'Delete'],
    })
      .then((willDelete) => {
        if (willDelete === true) {
          let newCarsList = carsList.filter((cars) => cars.key !== key)
          setCarsList(newCarsList);
        }
      })
  }

  // Used to close the form on Route change
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
              <AddTravelButton isAdding={isAdding}  invertIsAdding={() => setIsAdding(!isAdding)}/>
              {isAdding && <AddTravelForm addTravel={addTravel} carsList={carsList} invertIsAdding={() => setIsAdding(!isAdding)}/>}
              <Travels  travels={travels} carsList={carsList} gasCostPerLiter={gasCostPerLiter} removeTravel={removeTravel}/>
            </>
          }
        />
        <Route path='/cars'
          element={
            <>
              <AddCarButton isAdding={isAdding} invertIsAdding={() => setIsAdding(!isAdding)}/>
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