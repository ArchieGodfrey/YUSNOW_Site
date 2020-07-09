import React from 'react';
import './App.css';
import Dashboard from './views/Dashboard';
import Navbar from './components/navbar/navbar';
import SponsorBar from './components/sponsorBar/sponsorBar';
import MerchCard from './views/MerchCard/MerchCard';
import SponsorCard from './components/sponsorCard/sponsorCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="Scrollview">
        <Dashboard/>
        <MerchCard />
        <SponsorCard/>
        <SponsorBar/>
      </div>
    </div>
  );
}

export default App;
