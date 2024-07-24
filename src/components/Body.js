import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/FoodJsonData';

const Body = () => {
    const [foodData, setFoodData] = useState(resList);
    //the aove line is nothing but array destructuring
    // const arr = useState(resList);
    // const [foodData, setFoodData] = arr;
    //const foodData = arr[0];
    //const setFoodData = arr[1];
    
  return (
    <div className='body'>
        <div className='filter'>
            {/* <input /> */}
            <button className='filter-btn' onClick={() => {setFoodData(foodData.filter((food) => food.rating > 4))}}>Top Rated Restaurants</button>
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