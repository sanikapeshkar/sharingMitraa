import React from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import "./stylepage.scss";
import blog1 from "../images/thankyou.jpg";

function Blogs() {
  return (
    <>
      <Navbar /> <h1>BLOGS</h1>
      <div className="blog-main">
        <div className="blog">
          <img
            src={blog1}
            alt="Sunset in the mountains"
            style={{ height: "400px", width: "100%" }}
          />

          <div className="blog-content">
            <div className="title">
              The Profound Impact of NGOs: Unveiling the Power of Sharing
            </div>
            <p className="desc1">
              The world is vast, brimming with diverse cultures, peoples, and
              problems. As myriad as our world's challenges are, so too are the
              dedicated individuals and organizations committed to tackling
              them. Among these, non-governmental organizations (NGOs) play a
              pivotal role, with their contribution often underappreciated or
              unnoticed.
            </p>

            <a
              href="https://medium.com/@team_11186/immverse-ai-immortalizing-humanity-across-eras-with-generative-ai-f04e8003b92d"
              target="_blank"
            >
              Read More...{" "}
            </a>
          </div>
        </div>
        <div className="blog">
          <img
            src={blog1}
            alt="Sunset in the mountains"
            style={{ height: "400px", width: "100%" }}
          />

          <div className="blog-content">
            <div className="title">
              The Profound Impact of NGOs: Unveiling the Power of Sharing
            </div>
            <p className="desc1">
              The world is vast, brimming with diverse cultures, peoples, and
              problems. As myriad as our world's challenges are, so too are the
              dedicated individuals and organizations committed to tackling
              them. Among these, non-governmental organizations (NGOs) play a
              pivotal role, with their contribution often underappreciated or
              unnoticed.
            </p>

            <a
              href="https://medium.com/@team_11186/immverse-ai-immortalizing-humanity-across-eras-with-generative-ai-f04e8003b92d"
              target="_blank"
            >
              Read More...{" "}
            </a>
          </div>
        </div>
        <div className="blog">
          <img
            src={blog1}
            alt="Sunset in the mountains"
            style={{ height: "400px", width: "100%" }}
          />

          <div className="blog-content">
            <div className="title">
              The Profound Impact of NGOs: Unveiling the Power of Sharing
            </div>
            <p className="desc1">
              The world is vast, brimming with diverse cultures, peoples, and
              problems. As myriad as our world's challenges are, so too are the
              dedicated individuals and organizations committed to tackling
              them. Among these, non-governmental organizations (NGOs) play a
              pivotal role, with their contribution often underappreciated or
              unnoticed.
            </p>

            <a
              href="https://medium.com/@team_11186/immverse-ai-immortalizing-humanity-across-eras-with-generative-ai-f04e8003b92d"
              target="_blank"
            >
              Read More...{" "}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blogs;
