import React from "react";
import { Navbar } from "../components/Navbar";
import { Main } from "../components/Main";
import Footer from "../components/Footer";
import { Stats } from "../components/Stats";
import { Groups } from "../components/Groups";
import Carousel from "../components/Carousel";
import Event from "../components/Events";
import "./stylepage.scss";
import { About } from "../components/About";
export const Home = () => {
  return (
    <div>
      <div className="header">
        <Navbar />

        <div className="header-inner">
          <Main />
        </div>
      </div>
      <Stats />
      <About />
      <Groups />
      <Event />
      <Carousel />
      <Footer />
    </div>
  );
};
