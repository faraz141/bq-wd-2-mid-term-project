import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="contact-us">Contact Us</h1>
      <div className="contact-page">
        <h1>Get in Touch</h1>
        <form className="contact-form">
          <label>
            Name:
            <input type="text" />
          </label>
          <label>
            Email:
            <input type="email" />
          </label>
          <label>
            Phone:
            <input type="tel" />
          </label>
          <label>
            Message:
            <textarea />
          </label>
          <button type="submit">Send Message</button>
        </form>
        {/* <div className="contact-info">
          <h2>Office Location</h2>
          <p>xyz</p>
          <h2>Phone Number</h2>
          <p>0342-2773817</p>
          <h2>Email Address</h2>
          <p>info@realestate.com</p>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
