import React, {useState,useEffect} from 'react';
import Shimmer from './Shimmer';
import resMenu from '../utils/FoodMenuJson';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(resMenu);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu()
    },[]);

    const fetchMenu = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        console.log(json);
    };

    if(resInfo.length === 0){
        return <Shimmer />;
    };
    console.log(resMenu);

    const {name, cuisines, costForTwo} = resInfo[0];

  return (
    <div className='menu'>
        <h1>{name}</h1>
        <h2>Menu</h2>
        <p>{cuisines.join(", ")} - {costForTwo}</p>
        <ul>
            {resMenu[0]?.itemCards.map((item) => {
                return (
                    <li key={item.id}>{item.name} - {item.price}</li>
                )
            })}
        </ul>

        {/* {resMenu?.map((item) => {
            return (
                <div>
                <h1>{item.name}</h1>
                <h3>Menu</h3>
                <p>{item.cuisines} - {item.costForTwo}</p>
                <ul>
                    <li>{item.itemCards[0].name} - {item.itemCards[0].price}</li>
                </ul>
                </div>
            )
        })} */}
    </div>
  )
}

export default RestaurantMenu;