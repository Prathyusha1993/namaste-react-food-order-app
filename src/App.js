import './App.css';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
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
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
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
