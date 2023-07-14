import React, { useState } from "react";
import "./style.scss";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Image from "../images/logo1.png";
import Image2 from "../images/logo2.jpeg";
export const Stats = () => {
  const [counterOn, setCounteron] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounteron(true)}
      onExit={() => setCounteron(false)}
    >
      <div className="stat-head">
        <h1>OUR IMPACT</h1>
        <p>SharingMitra contributing towards making a diffrence</p>
      </div>

      <div className="stats-main">
        <div className="numbers">
          <img src={Image} alt="logo here"></img>
          <br></br>
          {counterOn && (
            <CountUp start={0} end={25000} duration={2} delay={0} />
          )}{" "}
          + <p> Needy Children impacted</p>
        </div>

        <div className="numbers">
          <img src={Image} alt="logo here"></img>
          <br></br>
          {counterOn && (
            <CountUp start={0} end={50000} duration={2} delay={0} />
          )}{" "}
          + <p>People Made Aware</p>
        </div>

        <div className="numbers">
          <img src={Image2} alt="logo here"></img>
          <br></br>
          {counterOn && (
            <CountUp start={0} end={500000} duration={2} delay={0} />
          )}{" "}
          + Kgs <p>Reduced Carbon Footprints </p>
        </div>
      </div>
    </ScrollTrigger>
  );
};
