import React from 'react'
import { useDispatch } from 'react-redux';
import {addItems, removeItems} from '../utils/cartSlice';

const CategoryItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItems(item));
    };

    const handleRemoveItem = (item) => {
        dispatch(removeItems(item));
    }

    console.log(items);
    return (
        <div>
            {items.map((item) => (
                <div key={item.name} className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>
                    
                    <div className='w-9/12'>
                        <div className='py-2'>
                            <span>{item.name}</span>
                            <span>- ₹{item.price}</span>
                        </div>
                        <p className='text-sm'>{item.description}</p>
                    </div>
                    <div className='w-2/12'>
                    <div className='absolute'>
                            <button className='bg-black text-white text-sm shadow-lg rounded-lg mx-4 px-1' 
                            onClick={() => handleAddItem(item)} > + </button>
                            <button className='bg-black text-white text-sm shadow-lg rounded-lg mx-4 px-1' 
                            onClick={() => handleRemoveItem(item)} > - </button>
                        </div>
                        <img src={item.image} alt='' className='w-full' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategoryItemList;