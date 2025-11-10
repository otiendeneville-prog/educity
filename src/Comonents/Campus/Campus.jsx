import React, { useState } from "react";
import "./Campus.css";
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
// import { useState } from "react";

const Campus = () => {
  const [message, setMessage] = useState("");
  const handleClick = () => {
    <p> the message is{message} </p>;
    setMessage(
      "What you the world like butterflies so the world right or wrong like  keeping getting lost in the sky are you letting you down ain't letting you down brcarry you around ain't letting you down,why though we stop and i know you scared name a time you don't have to be afraid "
    );
  };
  return (
    <div id="campus" className="campus">
      <div className="gallery">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img className="image4" src={gallery4} alt="" />
      </div>
      <button onClick={handleClick}>
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
      {message && <p>{message}</p>}
    </div>
  );
};

export default Campus;
