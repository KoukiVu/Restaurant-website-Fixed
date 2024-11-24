import React, { useState } from 'react';
import '../css/checkout.css';
import axios from 'axios';
import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function CheckoutPage() {
  // Use state to track the form values
  const [orderName, setOrderName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [apt, setApt] = useState('');
  const [zip, setZip] = useState('');
  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create order data from state values
    const orderData = {
      orderName: orderName,
      address: address,
      city: city,
      state: state,
      apt: apt,
      zip: zip,
      firstName: firstName,
      lastName: lastName,
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
        <h1 className="Checkout">Checkout</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
         
         <h2 class="orderInfo">Address information</h2>
      <div class="input-group">
           <span class="input-group-text">Name for order</span>
          <input type="text" aria-label="First name" class="form-control" 
          value={orderName}
          onChange={(e) => setOrderName(e.target.value)}/>

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
            {/* Add more states as needed */}
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
        
        <h2 class="cardInfo">Card information</h2>

        <div class="input-group">
           <span class="input-group-text">First and last name</span>
          <input type="text" aria-label="First name" class="form-control" 
          value={firstName}
          onChange={(e) => setFName(e.target.value)}/>

          <input type="text" aria-label="Last name" class="form-control"
          value={lastName} 
          onChange={(e) => setLName(e.target.value)}/>
        </div>

        <div className="row g-2">
  <div className="col-md-6">
    <label htmlFor="inputCardNum" className="form-label">    Card Number</label>
    <input
      type="text"
      className="form-control"
      id="inputCardNum"
      value={cardNumber}
      onChange={(e) => setCardNumber(e.target.value)}
    />
  </div>

  <div className="col-md-6">
    <label htmlFor="inputCvv" className="form-label">CVV</label>
    <input
      type="text"
      className="form-control"
      id="inputCvv"
      value={cvv}
      onChange={(e) => setCvv(e.target.value)}
    />
  </div>

</div>


<div className="col-12 d-flex justify-content-between align-items-center">
  <button type="submit" className="btn btn-primary">Order</button>
  <CustomLink className="goBack" to="/OrderMenu">Go back</CustomLink>
</div>

      </form>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end:true })
  return (
    <li className={`nav-item ${isActive ? "active" : ""}`}>
          <Link to={to} {...props}>
          {children}
          </Link>
      </li>
  )
}


