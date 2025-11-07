import React from "react";
import "./About.css";
import graduation from '../../assets/graduation.jpg'

const About = () => {
  return (
    <div id='about-us' className="about">
      <div className="about-left">
        <img className="ayee" src={graduation} alt="about-img" />
        <img src="play.svg" alt="" />
      </div>
      <div className="about-right">
        <h3> ABOUT UNIVERSITY </h3>
        <h4>Naturing Tomorrow's Leaders Today</h4>
        <p2>Embark on our tansformative educational journey with our univesity's comprehensive education programs. Our cutting curriculum is designed to empower students with the knowledge ,skills, and experiences neede to excel in the dynamic field of education. </p2>
        <p2>With a focus on ninnovation, hands on learning, and person mentorshtip,our programs prepare aspiring educators to make meaningful impact in classrooms,schoolsm and cimmunities.</p2>
        <p2>Whether you aspire to become a tieacher, administrator,counselor,or educational leader, or diverse range of programs offers the perfecct pathway to achieve you goals and unlock your full potential in shaping the future of education.</p2>
      </div>
    </div>
     
  );
};

export default About;
