import React from "react";
import "./style.scss";
import Image from "../images/carousel/carousel2.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Event() {
  return (
    <div className="Events">
      <h1>OUR EVENTS </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: " #FF007F", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #FF007F" }}
          date={<img src={Image} alt="image here " width="400px"></img>}
          iconStyle={{ background: "#FF007F", color: "#fff" }}
          icon=""
        >
          <h2>Donation at Bhandewadi</h2>
          <p>
            SharingMitra conducted a Donation camp in August 2022 at Bhandewadi
            which is a alum near Nagpur District. We donated Books,laptops and
            various stationary items to the kids and orphage . It was a
            succesful event interacting with them .
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="2010 - 2011"
          date={<img src={Image} alt="image here " width="400px"></img>}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon=""
        >
          <h2>Donation at Municipal School</h2>
          <p>
            SharingMitra conducted a Donation camp at a municipal school
            situated in outskirts of the city Nagpur Maharashtra. It donated
            Toys,Books and electronic items .
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="2008 - 2010"
          date={<img src={Image} alt="image here " width="500px"></img>}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon=""
        >
          <h2>Diwali at Government Municipal School </h2>
          <p>
            We sharingMitra at celebrated diwali at municipal school with needy
            children who were deprived of the priviledges of firecrackers.
            Festival of light was lit with happiness of needy children .
          </p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<img src={Image} alt="image here " width="500px"></img>}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon=""
        >
          <h2> Title of the Event </h2>
          <p>
          SharingMitra conducted a Donation camp in August 2022 at Bhandewadi which is a alum near Nagpur District. We donated Books,laptops and various stationary items to the kids and orphage . It was a succesful event interacting with them .
        </p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
      <br></br>
    </div>
  );
}

export default Event;
