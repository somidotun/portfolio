"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import "./styles.css";
import aboutMe from "@/app/images/AboutMe.jpg";
import Dotun from "@/app/images/Dotun.jpg";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

const Slide = () => {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      effect={"fade"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade]}
      className="mySwiper rounded-xl w-96 md:w-56  md:h-[20.9rem]"
    >
      <SwiperSlide className="rounded-xl w-96 md:w-56  md:h-[20.9rem]">
        <Image
          className="rounded-xl w-96 md:w-60 md:h-[20.9rem]"
          src={Dotun}
          alt="picture of the developer"
        />
      </SwiperSlide>
      <SwiperSlide className="rounded-xl w-96 md:w-60  md:h-[20.9rem]">
        <Image
          className="rounded-xl w-96 md:w-56 md:h-[20.9rem]"
          src={aboutMe}
          alt="picture of the developer"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slide;
