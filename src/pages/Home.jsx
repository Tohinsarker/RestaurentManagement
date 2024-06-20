 import React from 'react';
import Carosel from './Home/Carosel';
import Category from './Home/Category';
import PopularMenu from './PopularMenu';
import Featured from './Featured';
import Testimonials from './Home/Testimonials';
 
 const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
 };
 
 export default Home;