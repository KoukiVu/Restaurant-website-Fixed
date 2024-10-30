import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from "./NavBar"
import About from './Pages/About'
import Menu from './Pages/Menu'
import Home from './Pages/Home'
import Order from './OnlineOrder/Order'
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
        <Route path="/Order" element={<Order />} />
      </Routes>
      </>
 
{/* <div>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="food">Select Food:</label>
          <select id="food" name="food" value={food} onChange={(e) => setFood(e.target.value)}>
            <option value="pizza">Pizza</option>
            <option value="burger">Burger</option>
            <option value="pasta">Pasta</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="drink">Select Drink:</label>
          <select id="drink" name="drink" value={drink} onChange={(e) => setDrink(e.target.value)}>
            <option value="coke">Coke</option>
            <option value="water">Water</option>
            <option value="juice">Juice</option>
          </select>
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">State</label>
          <select
            id="inputState"
            className="form-select"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Choose...</option>
            <option value="NY">New York</option>
            <option value="CA">California</option>
            <option value="TX">Texas</option>
            <option value="FL">Florida</option>
          </select>
        </div>

        <div className="Apt">
          <label htmlFor="inputApt" className="form-label">Apt, Floor, Suite, Building, Company</label>
          <input
            type="text"
            className="form-control"
            id="inputApt"
            value={apt}
            onChange={(e) => setApt(e.target.value)}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">Zip</label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Order</button>
        </div>
      </form>
    </div> */}
    
 </div>
  );
}

export default App;
