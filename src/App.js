import './App.css';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />
  }
])

export default App;
