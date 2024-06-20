import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("./reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading={"What our clients say"}
        heading={"Testimonials"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
   

        {reviews.map((rev) => (
         <SwiperSlide>
           <div className="w-1/2 mx-auto">
           <p>{rev.name}</p>
           <p>{rev.details}</p>
           </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
