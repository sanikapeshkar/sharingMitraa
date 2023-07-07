import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

function Galleryy() {
  return (
    <div>
      <Navbar />
      <Gallery photos={photos} />
      <Footer />
    </div>
  );
}

export default Galleryy;