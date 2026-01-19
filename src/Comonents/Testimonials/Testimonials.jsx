import React from "react";
import "./Testimonial.css";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";
import Card from "../Card";

const Testimonials = () => {
  const employees = [
    {
      img: pic1,
      description:
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      img: pic2,
      description:
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      img: pic3,
      description:
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
  {
    img: pic4,
    description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ipsa sunt nihil explicabo ea. Id tempora neque tenetur! Voluptates aliquam dolor dolorum modi laborum voluptate doloremque atque nesciunt eaque eligendi!"
  }
  ];
  return (
    <div id="testimonials"className="pics">
      <Card employees={employees} />;
      <Card/>
    </div>
  );
};

export default Testimonials;
