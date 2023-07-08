import React from "react";
import Image from "../images/orphan.jpg";
import Image1 from "../images/oldage.jpeg";
import Image2 from "../images/BLIND.jpg";
import "./style.scss";
export const Groups = () => {
  return (
    <div className="group-main">
      {" "}
      <div className="Groups-header">
        <h1>SERVING TO THE DIFFERENT AREAS OF SOCIETY</h1>
      </div>
      <div className="Groups">
        <div className="container">
          <img src={Image} alt="image here"></img>
          <h2>ORPHANAGES</h2>
          <p>
            Children are our future of our nation. More than 4% of these children are orphaned
            at a very young age. Hence are forced to grow up without a
            remarkable childhood.​ Donate your excess books, and toys and gift
            them a little of your childhood.
          </p>
        </div>
        <div className="container">
          <img src={Image1} alt="image here"></img>
          <h2>ELDERLY HOMES</h2>
          <p>
            Senior citizens are not a burden just disregarded by some. Here’s
            your opportunity to offer them compassion. Donate to Senior citizens
            and be a part of an enduring effort that promotes the well-being of
            elder citizens by providing them with the necessities of life.
          </p>
        </div>
        <div className="container">
          <img src={Image2} alt="image here"></img>
          <h2>BLIND SCHOOL</h2>
          <p>
            There is nothing wrong with being different! If anything, it just
            makes you unique! Special consideration for them will go a long way
            to make them feel valued. Hand out your excess books, and toys to
            children with special needs. Bring a smile to their innocent faces.
          </p>
        </div>
      </div>
    </div>
  );
};
