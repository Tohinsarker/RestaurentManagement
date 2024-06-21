import React from "react";
import MenuItem from "../Shared/MenuItem";
import Cover from "../Shared/Cover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="PT-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item) => (
          <MenuItem item={item}></MenuItem>
        ))}
      </div>

      
    </div>
  );
};

export default MenuCategory;
