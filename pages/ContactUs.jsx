import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-container">
      <h1>Purrfect Adoption</h1>
      <h2>Contact Us</h2>
      <p>
      Feel free to reach out to us for any inquiries or assistance!
      </p>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Your Name" />
        <label>Phone</label>
        <input type="tel" placeholder="Your Phone" />
        <label>Email</label>
        <input type="email" placeholder="Your Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
