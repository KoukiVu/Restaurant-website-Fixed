import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from "./NavBar"
import Footer from "./Footer"
import About from './Pages/About'
import Menu from './Pages/Menu'
import Home from './Pages/Home'
import Order from './OnlineOrder/OrderMenu'
import Checkout from './OnlineOrder/CheckoutPage'
import Reservation from './Pages/ReservationHome'
import { Route, Routes } from "react-router-dom"

function App() {
  // Use state to track the form values
  const [food, setFood] = useState('');
  const [drink, setDrink] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [apt, setApt] = useState('');
  const [zip, setZip] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create order data from state values
    const orderData = {
      food: food,
      drink: drink,
      address: address,
      city: city,
      state: state,
      apt: apt,
      zip: zip,
    };

  axios.post('http://localhost:5000/submit-order', orderData)
    .then(response => {
      console.log('Order submitted:', response.data);
    })
    .catch(error => {
      console.error('Error submitting order:', error);
    });

    
};
  return (
   
 <div>
      <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        
      </Routes>

      <Routes>
          <Route path="/OrderMenu" element={<Order />} />
          <Route path="/CheckoutPage" element={<Checkout />}/>
          <Route path="/reservation" element={<Reservation />} />
      </Routes>
      </>

      <Footer />
    
 </div>
  );
}

export default App;
