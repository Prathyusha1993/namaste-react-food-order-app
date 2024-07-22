import './App.css';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';

/**
 * Header Component - logo, Navbar items
 * Body
 *  - search component - search input
 *  - Restaurant container 
 *      - restaurant card
 *          - iamge, rating, cuisine, name, deleivry time, cost 
 * Footer
 *  - copyright
 * - social media links
 *  - contact 
 *  address
 */

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
