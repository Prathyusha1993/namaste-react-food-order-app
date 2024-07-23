import React from 'react'

const RestaurantCard = (props) => {
    const {resName, cuisine, rating, time, image} = props;
    return (
        <div className='restaurant-card'>
            <img className='res-logo' src={image} alt='res-logo' />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{time}</h4>
        </div>
    )
}

export default RestaurantCard;