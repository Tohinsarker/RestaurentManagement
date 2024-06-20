import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle";
const Category = () => {
  return (
      
<section>
    <SectionTitle
    subHeading={'From 11.00am to 10.00pm'}
    heading={'Order Online'}
    >
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" srcset="" />
        <p className="text-4xl uppercase text-center">Salads</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" srcset="" />
          <p className="text-4xl uppercase text-center">PIZZA</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" srcset="" />
          <p className="text-4xl uppercase text-center">SOUP</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" srcset="" />
          <p className="text-4xl uppercase text-center">DESERTS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" srcset="" />
          <p className="text-4xl uppercase text-center">Salads</p>
        </SwiperSlide>
      </Swiper>
    </SectionTitle>
</section>
  );
};

export default Category;
