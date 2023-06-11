import { useEffect } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

import "./Carousel.scss";

function Carousel({
  children,
  slidesPerView = 1,
  loop = true,
  navigation = true,
  pagination = { clickable: true },
}) {
  useEffect(() => {
    const prevButtons = document.querySelectorAll(".swiper-button-prev");
    const nextButtons = document.querySelectorAll(".swiper-button-next");

    prevButtons.forEach((prevButton) => {
      prevButton.classList.add("slide-nav-btn");
    });
    nextButtons.forEach((nextButton) => {
      nextButton.classList.add("slide-nav-btn");
    });

    const handleButton = (state) => {
      const buttons = document.querySelectorAll(".slide-nav-btn");
      buttons.forEach((button) => {
        button.classList.toggle("active-pagination-btn", state);
      });
    };

    const sliders = document.querySelectorAll(".swiper");

    sliders.forEach((slider) => {
      slider.addEventListener("mouseout", () => handleButton(false));
      slider.addEventListener("mouseover", () => handleButton(true));
    });

    return () => {
      sliders.forEach((slider) => {
        slider.removeEventListener("mouseout", () => handleButton(false));
        slider.removeEventListener("mouseover", () => handleButton(true));
      });
    };
  }, []);

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={slidesPerView}
      navigation={navigation}
      pagination={pagination}
      loop={loop}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {children.map((item, index) => {
        return <SwiperSlide key={index}>{item}</SwiperSlide>;
      })}
    </Swiper>
  );
}

export default Carousel;
