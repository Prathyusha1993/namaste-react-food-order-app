import React, {useState, useEffect, useContext} from 'react';
// import { MdDarkMode } from "react-icons/md";
// import { MdLightMode } from "react-icons/md";
import '../App.css';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

export const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  // const [mode, setMode] = useState(false);
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  useEffect(() => {},[]);

  // const darkModeHandler = () => {
  //   setMode(!mode);
  //   document.body.classList.toggle('mode');
  // }

  return (
    <div className='flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50'>
        <div className='logo-container'>
            <img className='w-24' src={LOGO_URL} alt='logo' />
        </div>
        <div className='flex items-center'>
            <ul className='flex'>
              {/* <li><button onClick={() => darkModeHandler()}>{mode && <MdLightMode />}{!mode && <MdDarkMode />}</button></li> */}
                <li className='px-4'>Online Status: {onlineStatus ? "✅" : "🛑"}</li>
                <li className='px-4'><Link style={{textDecoration: 'none'}}  to='/'>Home</Link> </li>
                <li className='px-4'><Link style={{textDecoration: 'none'}}  to='/about'>About Us</Link></li>
                <li className='px-4'><Link style={{textDecoration: 'none'}}  to='/contact'>Contact Us</Link></li>
                <li className='px-4'><Link style={{textDecoration: 'none'}}  to='/grocery'>Grocery</Link></li>
                <li className='px-4'><Link style={{textDecoration: 'none'}}  to='/cart'>Cart</Link></li>
                <li className='px-4'><button className='login' onClick={() => {btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')}}>{btnName}</button></li>
                <li className='p-4 font-bold'>{loggedInUser}</li>
            </ul>
        </div>
    </div>
  )
}

export default Header;