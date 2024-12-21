import React from 'react';
import './Donate.css'; 

const Donate = () => {
  return (
    <div className="donate-page">
      <h1 className="donate-title">Make a Difference!</h1>
      <p className="donate-text">
        Your contributions help us care for and find loving homes for our furry friends. Every little bit counts!
      </p>

      <div className="donation-options">
        <h2>Ways to Donate</h2>
        <ul>
          <li>🐾 Donate via Credit/Debit Card</li>
          <li>🐾 Provide Supplies</li>
        </ul>
      </div>

      <form className="donation-form">
        <h2>Donate Now</h2>
        <label htmlFor="amount">Donation Amount:</label>
        <input type="number" id="amount" name="amount" placeholder="Enter amount" />

        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />
        
        <button type="submit" className="donate-button">Donate</button>
      </form>
    </div>
  );
};

export default Donate;
