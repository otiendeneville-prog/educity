import React, { useState } from "react";
import "./Campus.css";
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import piza from "../../assets/piza.jpg";


const Campus = () => {
 
  
  return (
    <div id="campus" className="campus">
      <div className="gallery">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img className="image4" src={piza} alt="" />
      </div>
      <button>
        See More here{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
          color="black"
        >
          <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
        </svg>
      </button>
    </div>
  );
};

export default Campus;
