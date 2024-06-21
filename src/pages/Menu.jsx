import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import bgMenu from '../assets/menu/banner3.jpg';
import MenuCategory from '../components/MenuCategory';
import useMenu from '../hooks/useMenu';
import SectionTitle from '../components/SectionTitle';

import dessetimg from '../assets/menu/dessert-bg.jpeg';
import pizzaimg from '../assets/menu/pizza-bg.jpg';
const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category==='dessert')
    const soup = menu.filter(item => item.category==='soup')
    const salad = menu.filter(item => item.category==='salad')
    const pizza = menu.filter(item => item.category==='pizza')
    const offered = menu.filter(item => item.category=='offered')
    
    console.log(soup)
    return (
        <div>
            <Helmet>
                <title>Restaurent | Menu</title>
            </Helmet>
         
            <Cover  img={bgMenu} title='our menu'></Cover>
           <SectionTitle
           subHeading="Don't Miss"
           heading="Today's Offer"
           ></SectionTitle>
            <MenuCategory
             items={desserts}
             title='Dessert'
             img={dessetimg}
             ></MenuCategory>
        


        {/* offered menu items  */}
      <MenuCategory items={offered}></MenuCategory>

      {/* desseret items  */}
      <MenuCategory 
      items={desserts} 
      title='Dessert'
      img={dessetimg}
      ></MenuCategory>

      {/* pizza  */}
      <MenuCategory items={pizza} title={'pizza'} img={pizzaimg}></MenuCategory>
        </div>
    );
};

export default Menu;