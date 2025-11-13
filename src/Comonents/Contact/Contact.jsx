import React from "react";
import "./Contact.css";
import email from "../../assets/email.png";
import phoe from "../../assets/phoe.png";
import location from "../../assets/location.png";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("X" + data.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-col">
        <h3>Send Us a message</h3>
        <p>
          Feel free to reach out to our contact form or find our contact,
          <br />
          information below.Your feedback, questions and suggestions are,
          <br />
          important to us as we strive,
          <br /> to provide exeptional servieces to our University community
        </p>
        <ul className="ul">
          <li>
            <img src={email} alt="" />
            Contact@GreatStack.dev
          </li>
          <li>
            <img src={phoe} alt="" />
            +1 123-456-7890
          </li>
          <li>
            <img src={location} alt="" />
            77 Massachuttes Ave, Campbridge,
            <br />
            MA 02139,United States
          </li>
        </ul>
      </div>
      <div className="contact col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="text"
            name="phonr"
            placeholder="Enter your mobile number"
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now
          </button>
        </form>
        {result && <span className="form-result">{result}</span>}
      </div>
    </div>
  );
};

export default Contact;
