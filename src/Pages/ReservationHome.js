import React, { useState } from 'react';
import '../css/reservation.css';
import axios from 'axios'

export default function ReservationHome() {
    // Use state to track the form values
  const [table, setTable] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState('');
  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create order data from state values
    const orderData = {
      table: table,
      time: time,
      people: people,
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
         <h1 className="Reservation">Reservation</h1>

         <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="table">Select Table:</label>
          <select id="table" name="table" value={table} onChange={(e) => setTable(e.target.value)}>
            <option value="vip">VIP table</option>
            <option value="any">Any table</option>
          </select>
        </div>

        <div class="input-group">
           <span class="input-group-text">First and last name</span>
          <input type="text" aria-label="First name" class="form-control" 
          value={firstName}
          onChange={(e) => setFName(e.target.value)}/>

          <input type="text" aria-label="Last name" class="form-control"
          value={lastName} 
          onChange={(e) => setLName(e.target.value)}/>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputTime" className="form-label">Time</label>
          <input
            type="text"
            className="form-control"
            id="inputTime"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputPeople" className="form-label">Number of people</label>
          <select
            id="inputPeople"
            className="form-select"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          >
            <option value="">Choose...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>


        <div className="col-12">
          <button type="submit" className="btn btn-primary">Reserve</button>
        </div>
      </form>
    </div>

   
 );

}