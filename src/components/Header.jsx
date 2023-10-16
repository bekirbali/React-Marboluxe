import React from "react";

import "../app.css";

import peraPalace from "../assets/peraPalace.jpg";
import marmara from "../assets/marmaraMermer.jpg";
import porselen from "../assets/porselen.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

const Header = () => {
  return (
    <div className="h-[calc(80vh-30px)]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={marmara} alt="marble" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={peraPalace} alt="marble" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={porselen} alt="marble" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
