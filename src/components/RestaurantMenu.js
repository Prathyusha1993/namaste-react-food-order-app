import React, {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import data from '../utils/FoodMenuJson.json';
import { useParams } from 'react-router-dom';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const [showIndex,setShowIndex] = useState(null);
    const[showItems,setShowItems] = useState(false);

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

    if(resMenuData && resMenuData.length === 0){
        return <Shimmer />;
    };
    console.log('resMenuData data', resMenuData);

  return (
    <div className='text-center'>
       <h1 className='font-bold my-7 text-2xl'>{resMenuData && resMenuData.name}</h1>
       <p className='font-bold text-lg'>{resMenuData && resMenuData.cuisines} Cuisine - {resMenuData && resMenuData.costForTwo} For Two.</p>
       <ul>
        {resMenuData && resMenuData.cards?.map((categoryItem,index) => (
            <RestaurantCategory categoryItem={categoryItem} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)} setShowItems={setShowItems} />
        ))}
       </ul>
    </div>
  )
}

export default RestaurantMenu;