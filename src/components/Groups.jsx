import React from "react";
import Image from "../images/orphan.jpg"
import "./style.scss"
export const Groups = () => {
  return (
    <div className="group-main"> <div className="Groups-header">
        <h1>SERVING TO THE DIFFERENT AREAS OF SOCIETY</h1>
      </div>
    <div className="Groups">
     

      <div className="container">
        <img src={Image} alt="image here"></img>
        <h2>ORPHANAGES</h2>
        <p>
          Children are our future. More than 4% of these children are orphaned
          at a very young age. Hence are forced to grow up without a remarkable
          childhood. ​ Donate your excess books, and toys and gift them a little
          of your childhood.
        </p>
      </div>
      <div className="container">
        <img src={Image} alt="image here"></img>
        <h2>ORPHANAGES</h2>
        <p>
          Children are our future. More than 4% of these children are orphaned
          at a very young age. Hence are forced to grow up without a remarkable
          childhood. ​Donate your excess books, and toys and gift them a little
          of your childhood.
        </p>
      </div>
      <div className="container">
        <img src={Image} alt="image here"></img>
        <h2>ORPHANAGES</h2>
        <p>
          Children are our future. More than 4% of these children are orphaned
          at a very young age. Hence are forced to grow up without a remarkable
          childhood. ​ Donate your excess books, and toys and gift them a little
          of your childhood.
        </p>
      </div>
    </div>
    </div>
  );
};
