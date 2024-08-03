import React, { useContext } from 'react'
import UserContext from '../utils/UserContext';

const RestaurantCard = (props) => {
    const {resName, cuisine, rating, time, image,cost} = props;
    const {loggedInUser} = useContext(UserContext);
    return (
        <div data-testid = 'resCard' className='m-4 p-4 w-[220px] bg-gray-50 rounded-lg hover:bg-gray-300'>
            <img className='rounded-lg' src={image} alt='res-logo' />
            <h3 className='font-bold py-2 text-md'>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating} stars</h4>
            <h4>Rs.{cost} For TWO</h4>
            <h4>{time}</h4>
            <h4>{loggedInUser}</h4>
        </div>
    )
};

//Higher order component:
//input is a restaurantcard component output will be restaurantcard promoted.

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className='absolute bg-black text-white px-2 rounded-lg m-2'>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;