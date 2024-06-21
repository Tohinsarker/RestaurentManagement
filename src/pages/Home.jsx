 import React from 'react';
import Carosel from './Home/Carosel';
import Category from './Home/Category';
import PopularMenu from './PopularMenu';
import Featured from './Featured';
import Testimonials from './Home/Testimonials';
import { Helmet } from 'react-helmet-async';
 
 const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>Restaurent | Home</title>
            </Helmet>
            <Carosel></Carosel>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
 };
 
 export default Home;