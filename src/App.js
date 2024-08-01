import './App.css';
import React, { lazy, Suspense, useState, useEffect } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));

const App = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //make an api call get userinfo data and update it
    const data = {name: 'Prathyusha Kurigala'};
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className='app'>
      <Header />
      <Outlet />
     
    {/* This wil  change only for that paarticular component
      <UserContext.Provider value={{loggedInUser: userName}}>  
      <Header />
      </UserContext.Provider>
      <Outlet /> */}
    </div>
    </UserContext.Provider>
    </Provider>
    
  );
};

export const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      },
      {
        path:'/cart',
        element: <Cart />
      },
      {
        path:'/restaurants/:resId',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
])

export default App;
