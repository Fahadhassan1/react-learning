import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hello from './components/Hello';
import Fruits from './components/Fruits';
import Conditionalcomponents from './components/Conditionalcomponents';
import Button from './components/Button';
import Form from './components/Form';
import FoodSearchAPI from './components/FoodSearchAPI';

function App() {

  const seatNumber = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10'];
  const busObject = {
    
    busName: 'Dewwod',
    busNumber: 123,
    busType: 'AC',
    busDriver: 'Fahad',
    seatNumber: seatNumber,

  }

  return (
    <div className="App">
        <h1>React Tutorial</h1>

        <Hello  busName="Faisal Movers" busNumber='456'  busType='Non AC'  busDriver='Talha'  seatNumber={seatNumber}  busObject={busObject} />

        <Fruits />

        <Conditionalcomponents isLoggedIn={true} />

        <Button />

        <Form />

        <FoodSearchAPI />

    </div>
  )
}

export default App
