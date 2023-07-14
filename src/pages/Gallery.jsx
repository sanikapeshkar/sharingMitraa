import React from "react";
// import Gallery from "react-photo-gallery";
// import { photos } from "./photos";
import { Navbar } from "../components/Navbar";
import Image1 from "../images/carousel/carousel1.jpg";
import Image2 from "../images/carousel/carousel3.jpg";
import Image3 from "../images/Gallery/18.png";
import Image4 from "../images/Gallery/20.png";
import Image5 from "../images/carousel/19.png";
import Image6 from "../images/Gallery/16.jpg";
import Image8 from "../images/Gallery/14.jpg";
import Image9 from "../images/bhadewadi.jpg";
import Image10 from "../images/Gallery/12.jpg";
import "./stylepage.scss";
import Footer from "../components/Footer";
function Galleryy() {
  return (
    <div>
      <Navbar />
      <div>
        <div  className="gallery">
          <a target="_blank"  >
            <img
              src={Image1}
              alt="Cinque Terre"
              width="30%"
              height="200px"
            ></img>
          </a>
          <div  className="desc"></div>
        </div>
        <div  className="gallery">
          <a target="_blank"  >
            <img
              src={Image2}
              alt="Cinque Terre"
              width="30%"
              height="200px"
            ></img>
          </a>
          <div  className="desc">Sharing Mitra Team making a change</div>
        </div>
        <div  className="gallery">
          <a target="_blank"  >
            <img
              src={Image10}
              alt="Cinque Terre"
              width="30%"
              height="200px"
            ></img>
          </a>
          <div  className="desc">Donating toys to needy children</div>
        </div>
        <div  className="gallery">
          <a target="_blank"  >
            <img
              src={Image4}
              alt="Cinque Terre"
              width="30%"
              height="200px"
            ></img>
          </a>
          <div  className="desc">Collecting Books for Donation Camps </div>
        </div>
        <div  className="gallery">
          <a target="_blank"  >
            <img
              src={Image5}
              alt="Cinque Terre"
              width="30%"
              height="200px"
            ></img>
          </a>
          <div  className="desc">Activities at Bhandewadi to interact with children </div>
        </div>
        <div  className="gallery">
          <a target="_blank"  >
            <img
              src={Image6}
              alt="Cinque Terre"
              width="30%"
              height="200px"
            ></img>
          </a>
          <div  className="desc">Anay Ramakrishnan donating at Municipal school </div>
        </div>
        <div  className="gallery">
          <a target="_blank"  >
            <img
              src={Image9}
              alt="Cinque Terre"
              width="30%"
              height="200px"
            ></img>
          </a>
          <div  className="desc">Donation at Bhandewadi school</div>
        </div>
        <div  className="gallery">
          <a target="_blank" >
            <img
              src={Image8}
              alt="Cinque Terre"
              width="30%"
              height="200px"
            ></img>
          </a>
          <div className="desc"></div>
        </div>
        <div  className="gallery">
          <a target="_blank">
            <img
              src={Image3}
              alt="Cinque Terre"
              width="30%"
              height="200px"
            ></img>
          </a>
          <div  className="desc">Donation at Government Municipal Schoool</div>
        </div>
      </div>

    </div>
  
  );
}

export default Galleryy;
