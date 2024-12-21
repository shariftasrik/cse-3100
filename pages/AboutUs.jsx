import React from "react";
import "./ContactUs.jsx";
import "./AboutUs.css";


function AboutUs() {
  return (
    <div className="about-container">
      <h1>Purrfect Adoption</h1>
      <h2>Our Mission</h2>
      <p>At Purrfect Adoption, our mission is to create a loving bridge between homeless cats and caring families. 
        We strive to provide every feline a safe, 
        nurturing environment and the opportunity to find a forever home where they can thrive and bring joy to their new companions.
      </p>
      <h2>Our History</h2>
      <p>Founded with a deep love for cats, Purrfect Adoption began as a small community initiative to rescue stray and abandoned felines. 
        Over the years, we have grown into a dedicated organization committed to providing shelter, 
        medical care, and loving homes for countless cats, while educating the community about the joy of adoption.
      </p>
      <h2>Our Team</h2>
      <div className="team">
        <div className="team-member">
          <p>Tasrik</p>
          
          <p>Director</p>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;
