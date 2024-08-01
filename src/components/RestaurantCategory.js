import React from 'react'
import CategoryItemList from './CategoryItemList';

const RestaurantCategory = ({ categoryItem, showItems, setShowIndex }) => {

    const handleHideShow = () => {
        setShowIndex();
    };
   
    return (
        <div>
            {/* HEader */}
            <div className='w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4'>
                <div onClick={handleHideShow} className='flex justify-between cursor-pointer'>
                    <span className='font-bold text-lg'>{categoryItem.title} ({categoryItem.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {/* accordian  body*/}
                {showItems && <CategoryItemList items={categoryItem.itemCards} />}
            </div>

        </div>
    )
}

export default RestaurantCategory;