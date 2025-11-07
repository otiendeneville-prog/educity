import React from "react";
import "./Footer.css";
import tik from "../../assets/tik.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <ul>
          <span>
            <h3>Send Us a message</h3>
            <p>
              Feel free to reach out to us or contact,in the,Our contacts below
              <br />is genune and we will highly appreacite your contribution <br />
              and wait for feedback which then won't dissapoint.
            </p>

            <p>Contacts</p>
            <li> Phone: +254 :798597024</li>
            <li> Phone: +254 01016932815</li>
            <label>email : </label>
            <input type="text" placeholder="Type in your email"/>
          </span>
          <span>
            <p>Follow Us On</p>
            <li>
              <img src={tik} alt="" />
              Ticktok
            </li>
            <li>Twitter</li>
            <li>WhatsAPP</li>
          </span>
          <span>
            <h5>These are our platforms</h5>
            <li>Educity Website</li>
            <li>Educity E-learnig and e-library</li>
            <li>Student Portal</li>
            <li>Educity Scolarship and &amp;Funding </li>
            <li>Teaching &amp; Examination Timetable</li>
          </span>
          <span>
            <h5 className="intouch">Get in Touch:</h5>
            <label className="lable">phone Number</label>
            <input className="number" type="text"placeholder="enter your phone number" /><br />
            <label className="lable">Email</label>
            <input type="text" placeholder="Type in your email" />
          </span>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
