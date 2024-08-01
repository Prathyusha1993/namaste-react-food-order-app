import React from 'react'

const CategoryItemList = ({ items }) => {
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
                            <button className='bg-black text-white text-sm shadow-lg rounded-lg mx-11 px-1s' >ADD + </button>
                        </div>
                        <img src={item.image} alt='' className='w-full' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategoryItemList;