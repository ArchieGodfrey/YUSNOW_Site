import React from 'react';
import './App.css';
import Dashboard from './views/Dashboard';
import Navbar from './components/navbar/navbar';
import MerchCard from './views/MerchCard/MerchCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="Scrollview">
        <MerchCard />
        <MerchCard />
      </div>
    </div>
    
  );
}

export default App;
