import React, {useState, useEffect} from 'react';
import '../App.css';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

export const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus();

  useEffect(() => {},[]);

  return (
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' src={LOGO_URL} alt='logo' />
        </div>
        <div className='nav-items'>
            <ul>
                <li>Online Status: {onlineStatus ? "✅" : "🛑"}</li>
                <li><Link style={{textDecoration: 'none'}}  to='/'>Home</Link> </li>
                <li><Link style={{textDecoration: 'none'}}  to='/about'>About Us</Link></li>
                <li><Link style={{textDecoration: 'none'}}  to='/contact'>Contact Us</Link></li>
                <li><Link style={{textDecoration: 'none'}}  to='/grocery'>Grocery</Link></li>
                <li><Link style={{textDecoration: 'none'}}  to='/cart'>Cart</Link></li>
                <button className='login' onClick={() => {btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')}}>{btnName}</button>
            </ul>
        </div>
    </div>
  )
}

export default Header;