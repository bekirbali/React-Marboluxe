import React from "react";

import "../app.css";

import peraPalace from "../assets/peraPalace.jpg";
import havuz from "../assets/poolHeader.jpg";
import ukrain from "../assets/ukrainHeader.jpg";

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
        {/* <SwiperSlide>
          <img src={marmara} alt="marble" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={peraPalace} alt="peraPalace" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={porselen} alt="marble" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={havuz} alt="pool" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ukrain} alt="ukrain" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
