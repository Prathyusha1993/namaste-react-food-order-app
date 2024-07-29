import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import data from '../utils/FoodMenuJson.json';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
    const [searchInput, setSearchInput] = useState('');
    const [foodData, setFoodData] = useState(data.resMenu);
    const [filteredRestaurant, setFilteredRestaurant] = useState(data.resMenu);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        console.log(json);
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return (<h1>Looks like you're offline!! please chcek your network connection.</h1>)


    return foodData.length === 0 ? (<Shimmer />) : (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input className='search-box' type='text' value={searchInput} placeholder='Search...' onChange={(e) => setSearchInput(e.target.value)} />
                    <button onClick={() => { const filteredRes = foodData.filter((res) => res.name.toLowerCase().includes(searchInput)); setFilteredRestaurant(filteredRes); setSearchInput('') }}>Search</button>
                </div>
                <button className='filter-btn' onClick={() => { const topRated = foodData.filter((food) => food.rating > 4); setFilteredRestaurant(topRated) }}>Top Rated Restaurants</button>
            </div>
            <div className='restaurant-container'>
                {filteredRestaurant.map((food) => {
                    return <Link style={{ textDecoration: 'none' }} key={food.id} to={'/restaurants/' + food.id}><RestaurantCard resName={food.name} cuisine={food.cuisine} rating={food.rating} cost={food.costForTwo} time={food.deliveryTime} image={food.iamge} /></Link>
                })}
            </div>
        </div>
    )
}

export default Body;