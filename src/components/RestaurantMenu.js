import React, {useEffect} from 'react';
import Shimmer from './Shimmer';
import data from '../utils/FoodMenuJson.json';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resMenuData = data.resMenu.find((res) => res.id.toString() === resId);

    // const resInfo = useRestaurantMenu(resId);

    useEffect(() => {
        fetchMenu()
    },[]);

    const fetchMenu = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        console.log(json);
    };

    if(resMenuData.length === 0){
        return <Shimmer />;
    };
    console.log('resMenuData data', resMenuData);

  return (
    <div className='menu'>
       <h1>{resMenuData.name}</h1>
       <h2>Menu</h2>
       <p>{resMenuData.cuisines} - {resMenuData.costForTwo} For Two.</p>
       <ul>
        {resMenuData.itemCards.map((item) => (
            <li>{item.name} - {item.price} - {item.description}.</li>
        ))}
       </ul>
    </div>
  )
}

export default RestaurantMenu;