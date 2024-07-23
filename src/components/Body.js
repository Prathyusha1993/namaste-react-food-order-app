import React, { useState } from 'react'
import RestaurantCard from './RestaurantCard';
import resList from './FoodJsonData';

const Body = () => {
    const [foodData, setFoodData] = useState(resList);
    
  return (
    <div className='body'>
        {/* {console.log(foodData[0].name)} */}
        <div className='search'>
            <input />
        </div>
        <div className='restaurant-container'>
            {foodData.map((food) => {
                return <RestaurantCard key={food.id} resName={food.name} cuisine={food.cuisine} rating={food.rating} time={food.deliveryTime} image={food.iamge}/>
            })}
        </div>
    </div>
  )
}

export default Body;