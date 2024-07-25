import React, {useState,useEffect} from 'react';
import '../App.css';
import { LOGO_URL } from '../utils/constants';

export const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  useEffect(() => {},[]);

  return (
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' src={LOGO_URL} alt='logo' />
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className='login' onClick={() => {btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')}}>{btnName}</button>
            </ul>
        </div>
    </div>
  )
}

export default Header;