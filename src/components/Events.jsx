import React from "react";
import "./style.scss";
import Image from "../images/carousel/carousel2.jpg";
import Image1 from "../images/bhadewadi.jpg";
import Image2 from "../images/diwali.jpg";
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
          contentStyle={{ background: " ", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #FF007F" }}
          date={<img src={Image1} alt="here " width="400px"></img>}
          iconStyle={{ background: "#FF007F", color: "#fff" }}
          icon=""
        >
          <h2>Empowering Dreams: SharingMitra's Transformative Donation Drive at Bhandewadi</h2>
          <p>
            SharingMitra's dedication to making a difference continued beyond ,
            as they conducted a highly successful donation camp in August 2022
            at Bhandewadi, an alum near Nagpur District. This camp aimed to
            support the education and well-being of underprivileged children and
            orphans. During the donation camp, SharingMitra provided a range of
            essential resources to the children. They generously donated books,
            recognizing the power of education in transforming lives. These
            books opened doors to knowledge, imagination, and a world of
            possibilities for the children, empowering them to dream big and
            pursue their aspirations.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="2010 - 2011"
          date={<img src={Image} alt="here " width="400px"></img>}
          iconStyle={{ background: "#FF007F", color: "#fff" }}
          icon=""
        >
          <h2>"Building Bright Futures: SharingMitra's Impactful Donation Drive at the Municipal School"</h2>
          <p>
            In addition to organizing a memorable celebration, they also
            conducted a donation camp at a municipal school located in the
            outskirts of Nagpur, Maharashtra. This camp aimed to provide the
            underprivileged children with essential resources and educational
            materials to enhance their learning experience. During the donation
            camp, SharingMitra distributed a wide range of items that would
            benefit the children in various ways. They generously donated toys,
            which would not only bring joy to the children but also contribute
            to their cognitive and emotional development through play. The books
            provided opened doors to knowledge and imagination, empowering the
            children with valuable educational resources.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="2008 - 2010"
          date={<img src={Image2} alt="here " width="500px"></img>}
          iconStyle={{ background: "#FF007F", color: "#fff" }}
          icon=""
        >
          <h2>Illuminating Lives: SharingMitra's Joyful Diwali Celebration at Government Municipal School</h2>
          <p>
            SharingMitra, a community organization dedicated to spreading joy
            and happiness, organized a heartwarming Diwali celebration at a
            municipal school. This special event was designed to bring smiles to
            the faces of needy children who, due to various circumstances, were
            unable to experience the traditional joy of bursting firecrackers
            during the festival. The volunteers at SharingMitra put in
            tremendous effort to ensure that the festival of lights truly became
            a festival of happiness for these children.
          </p>
        </VerticalTimelineElement>
   
      </VerticalTimeline>
      <br></br>
    </div>
  );
}

export default Event;
