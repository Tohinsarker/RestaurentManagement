import React, { useState } from "react";
import orderImg from "../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../hooks/useMenu";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category==='dessert')
    const soup = menu.filter(item => item.category==='soup')
    const salad = menu.filter(item => item.category==='salad')
    const pizza = menu.filter(item => item.category==='pizza')
    const offered = menu.filter(item => item.category=='offered')
    
  return (
    <div>
      <Cover img={orderImg} title={"Order food"}></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUP</Tab>
          <Tab>DESSERT</Tab>
          <Tab>DRINKS</Tab>
       
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
