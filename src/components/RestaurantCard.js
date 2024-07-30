import React from 'react'

const RestaurantCard = (props) => {
    const {resName, cuisine, rating, time, image,cost} = props;
    return (
        <div className='m-4 p-4 w-[220px] bg-gray-50 rounded-lg hover:bg-gray-300'>
            <img className='rounded-lg' src={image} alt='res-logo' />
            <h3 className='font-bold py-2 text-md'>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating} stars</h4>
            <h4>Rs.{cost} For TWO</h4>
            <h4>{time}</h4>
        </div>
    )
}

export default RestaurantCard;