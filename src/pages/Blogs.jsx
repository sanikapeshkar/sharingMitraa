import React from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import "./stylepage.scss";
import blog1 from "../images/thankyou.jpg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";

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
              href="https://medium.com/@sharingmitra5/the-power-of-giving-the-impact-of-sharing-mitra-on-communities-in-need-c47129a00423"
              target="_blank"
            >
              Read More...{" "}
            </a>
          </div>
        </div>
        <div className="blog">
          <img
            src={blog2}
            alt="Sunset in the mountains"
            style={{ height: "400px", width: "100%" }}
          />

          <div className="blog-content">
            <div className="title">
              The Power of Giving: The Impact of Sharing Mitra on Communities in
              Need
            </div>
            <p className="desc1">
              Every act of giving has a story. Every donation carries with it a
              promise of change, of hope, and of better days to come. Today, we
              want to delve into the journey of Sharing Mitra, an NGO that has
              harnessed the power of giving and channeled it towards supporting
              orphanages and old age homes.
            </p>

            <a
              href="https://medium.com/@sharingmitra5/the-power-of-giving-the-impact-of-sharing-mitra-on-communities-in-need-c47129a00423"
              target="_blank"
            >
              Read More...{" "}
            </a>
          </div>
        </div>
        <div className="blog">
          <img
            src={blog3}
            alt="Sunset in the mountains"
            style={{ height: "400px", width: "100%" }}
          />

          <div className="blog-content">
            <div className="title">
              In the Heart of Action: A Diwali Celebration to Remember at
              Sharing Mitra
            </div>
            <p className="desc1">
              There's nothing quite as rewarding as witnessing the spark in a
              child's eyes when they experience pure joy. At Sharing Mitra, we
              had the privilege of observing this firsthand during our recent
              Diwali celebration event at a municipal school, where we joined
              hands with orphaned children to celebrate the Festival of Lights.
            </p>

            <a
              href="https://medium.com/@sharingmitra5/in-the-heart-of-action-a-diwali-celebration-to-remember-at-sharing-mitra-6172375f481"
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
