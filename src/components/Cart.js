import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryItemList from './CategoryItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className='text-center m-5 p-5'>
       <h1 className='text-2xl font-bold'>Cart</h1>
       <div className='w-6/12 m-auto'>
       <button className='p-2 m-2 bg-black text-white border rounded-lg' onClick={handleClearCart}>Clear Cart</button>
       {cartItems.length === 0 && <h1>Your cart is empty add items to cart</h1>}
        <CategoryItemList items={cartItems} />
       </div>
    </div>
  )
}

export default Cart;