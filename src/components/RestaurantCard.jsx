import React from 'react'

const RestaurantCard = ({resName, cuisine}) => {
    return (
        <div className='restaurant-card'>
            <img className='res-logo' src='https://cookingfromheart.com/wp-content/uploads/2020/10/Avakaya-Biryani-4-500x500.jpg' alt='res-logo' />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.4 Stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

export default RestaurantCard;