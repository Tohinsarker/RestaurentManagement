import React from "react";
import SectionTitle from "../components/SectionTitle";
import fImage from "../../src/assets/home/featured.jpg";
import './featured.css';
const Featured = () => {
  return (
    <div className="featured-item text-white pt-10 my-20 bg-fixed">
      <SectionTitle
        subHeading={"Check It Out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div  className='md:flex justify-center items-center pb-20 px-36 pt-12'>

      <div>
        <img src={fImage} alt="" srcset="" />
      </div>
      <div className="md:ml-10 ">
        <p>Aug 20, 2029</p>
        <p className="uppercase">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          distinctio maiores vitae dolor ratione dolores dolore eum magnam,
          quaerat hic aspernatur totam ex voluptatibus quam esse quae
          repellendus iste non optio quibusdam. Illo amet tempora aut. Quo
          libero cum aperiam!
        </p>
        <button className="btn btn-outline border-0 border-b-4">Order Now</button>
      </div>
      </div>
    </div>
  );
};

export default Featured;
