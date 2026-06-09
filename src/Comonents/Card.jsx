import './Testimonials/Testimonial.css';
import React from 'react';

const Card = (props) => {

  return (
    <>
      {props?.employees?.map((pic, index) => {
        console.log('desc',pic.description);
       
        return (  
        <div className="card">  
          <img src={pic.img} />
          <p>Desc: {pic.description}</p>
          </div>
        );
        
      })}
    </>
  );
};
export default Card;
