import React from "react";
import Image from "../images/India.png";
import "./style.scss";
export const About = () => {
  return (
    <div className="about">
      <img src={Image} alt="India here"></img>
      <div className="about-content">
        <h1>ABOUT US</h1>
        <p>
          {" "}
          We link the donors to beneficiaries and deliver them to an
          organization of your choice. With our transparent delivery process,
          you get to witness your donations are rightfully made. So bring out
          all your excess books, and toys and take a step to make a difference.
        </p>
      </div>
    </div>
  );
};
