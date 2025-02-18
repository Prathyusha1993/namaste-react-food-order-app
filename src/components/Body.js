import React, { useState, useEffect, useContext } from 'react';
import RestaurantCard, {withPromotedLabel} from './RestaurantCard';
import data from '../utils/FoodMenuJson.json';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
    const [searchInput, setSearchInput] = useState('');
    const [foodData] = useState(data.resMenu);
    const [filteredRestaurant, setFilteredRestaurant] = useState(data.resMenu);
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const {loggedInUser, setUserName} = useContext(UserContext); 

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        console.log(json);
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return (<h1>Looks like you're offline!! please chcek your network connection.</h1>);

    return foodData.length === 0 ? (<Shimmer />) : (
        <div className='body'>
            <div className='filter flex'>
                <div className='search m-4 p-4'>
                    <input className='border border-solid border-black'
                        type='text' 
                        data-testid='searchInput'
                        value={searchInput}
                        placeholder='Search...'
                        onChange={(e) => setSearchInput(e.target.value)} />
                    <button className='px-4 py-1  bg-green-100 m-4 rounded-lg'
                        onClick={() => { const filteredRes = foodData.filter((res) => res.name.toLowerCase().includes(searchInput)); setFilteredRestaurant(filteredRes); setSearchInput('') }}>
                        Search</button>
                </div >
                <div className='search m-4 p-4 flex items-center'><button className='px-4 py-2 bg-gray-100 rounded-lg' onClick={() => { const topRated = foodData.filter((food) => food.rating > 4); setFilteredRestaurant(topRated) }}>Top Rated Restaurants</button></div>
                <div className='search m-4 p-4 flex items-center'>
                    <label>UserName : </label>
                    <input className='border border-black p-2 rounded-lg' value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
                </div>
            </div>
            <div className='flex flex-wrap'>
                {filteredRestaurant.map((food) => {
                    return <Link style={{ textDecoration: 'none' }} key={food.id} to={'/restaurants/' + food.id}>
                        {food.promoted ? (<RestaurantCardPromoted 
                            resName={food.name}
                            cuisine={food.cuisine}
                            rating={food.rating}
                            cost={food.costForTwo}
                            time={food.deliveryTime}
                            image={food.image} 
                            />) : (<RestaurantCard 
                            resName={food.name}
                            cuisine={food.cuisine}
                            rating={food.rating}
                            cost={food.costForTwo}
                            time={food.deliveryTime}
                            image={food.image} />)}
                        
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Body;