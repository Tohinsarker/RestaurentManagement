import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    console.log('item', item)
    return (
        <div className='flex space-x-4'>
            <div>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[120px]' src={image} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-600'>{price}</p>
        </div>
    );
};

export default MenuItem;