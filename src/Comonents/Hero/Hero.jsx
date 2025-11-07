import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="hero-container" className="hero container">
      <div className="hero-text">
        <h1>We Ensure Better Education For A Better World</h1>
        <p>
          Enhance your skills with our certified training programs in physical,
          virtual, and in-house formats. Designed for real-world impact, our
          expert-led courses help you grow professionally and succeed in today’s
          competitive landscape. Explore our training categories below to find
          the perfect solution.
        </p>
        <button className="btn">
          Learn More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
