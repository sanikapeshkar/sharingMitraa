import { Swiper, SwiperSlide } from "swiper/react";
import Image from "../images/carousel/carousel1.jpg";
import Image1 from "../images/carousel/carousel2.jpg";
import Image2 from "../images/carousel/carousel3.jpg";
import Image3 from "../images/carousel/carousel4.jpg";
import Image4 from "../images/carousel/carousel5.jpg";
import { CAROUSEL } from "./constant";
import "swiper/css";
import "./style.scss"
import { Autoplay, Navigation, Pagination } from "swiper";
export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 900,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      navigation
      modules={[Pagination, Navigation, Autoplay]}
      className="carousel-main"
    >
      {/* {CAROUSEL.map((key, i) => {
        return (
          <SwiperSlide className="carousel-each">
            <img src={key.img} alt="carousel image here" />
          </SwiperSlide>
        );
      })} */}

<SwiperSlide className="carousel-each">
            <img src={Image} alt="carousel image here" />
          </SwiperSlide>
          <SwiperSlide className="carousel-each">
            <img src={Image1} alt="carousel image here" />
          </SwiperSlide>
          <SwiperSlide className="carousel-each">
            <img src={Image2} alt="carousel image here" />
          </SwiperSlide>
          <SwiperSlide className="carousel-each">
            <img src={Image3} alt="carousel image here" />
          </SwiperSlide>
          <SwiperSlide className="carousel-each">
            <img src={Image4} alt="carousel image here" />
          </SwiperSlide>
          <SwiperSlide className="carousel-each">
            <img src={Image} alt="carousel image here" />
          </SwiperSlide>
          <SwiperSlide className="carousel-each">
            <img src={Image1} alt="carousel image here" />
          </SwiperSlide>
    </Swiper>
  );
};
