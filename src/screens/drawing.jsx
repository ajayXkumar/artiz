import React from "react";
import data from "../arts";
import "./illu.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function Illu() {
  const filteredData = data.filter((item) => item.category === "drawing");

  return (
    <div className="container">
      <p className="heading">DRAWING</p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {filteredData.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              className="img"
              src={item.image}
              alt={`Illustration ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}

export default Illu;
