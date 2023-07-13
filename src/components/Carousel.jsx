import { Swiper, SwiperSlide } from "swiper/react";
import Image from "../images/carousel/carousel1.jpg";
import Image1 from "../images/carousel/carousel2.jpg";
import Image2 from "../images/carousel/carousel3.jpg";
import Image4 from "../images/carousel/carousel5.jpg";
import Image5 from "../images/carousel/19.png";
import Image6 from "../images/carousel/18.png";
import Image7 from "../images/carousel/23.png";


import "swiper/css";
import "./style.scss"
import { Autoplay, Navigation, Pagination } from "swiper";
const C= () => {
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
            <img src={Image} alt="carousel here" />
          </SwiperSlide>
          <SwiperSlide className="carousel-each">
            <img src={Image1} alt="carousel  here" />
          </SwiperSlide>
          <SwiperSlide className="carousel-each">
            <img src={Image2} alt="carousel  . here" />
          </SwiperSlide>
          <SwiperSlide className="carousel-each">
            <img src={Image4} alt="carousel  . here" />
          </SwiperSlide>
          <SwiperSlide className="carousel-each">
            <img src={Image4} alt="carousel  here" />
          </SwiperSlide>
          <SwiperSlide className="carousel-each">
            <img src={Image5} alt="carousel here" />
          </SwiperSlide>
          <SwiperSlide className="carousel-each">
            <img src={Image6} alt="carousel  here" />
          </SwiperSlide>
          <SwiperSlide className="carousel-each">
            <img src={Image7} alt="carousel  here" />
          </SwiperSlide>
    </Swiper>
  );
};
export default C;