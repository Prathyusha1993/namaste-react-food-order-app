import React from 'react'
import RestaurantCard from './RestaurantCard';

const Body = () => {
  return (
    <div className='body'>
        <div className='search'>
            <input />
        </div>
        <div className='restaurant-container'>
            <RestaurantCard resName='Meghana Food' cuisine='North Indian, south Indian' rating='4.4' time='38 minutes' />
            <RestaurantCard resName='KFC' cuisine='Fast Food' rating='4.4' time='38 minutes' />
            <RestaurantCard resName='Mc Donalds' cuisine='Fast Food' rating='4.4' time='38 minutes' />
            <RestaurantCard resName='Kathmandu' cuisine='Nepalase' rating='4.4' time='38 minutes' />
        </div>
    </div>
  )
}

export default Body;