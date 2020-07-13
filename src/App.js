import React from 'react';
import './App.css';
import Dashboard from './views/Dashboard';
import Navbar from './components/navbar/navbar';
import SponsorBar from './components/sponsorBar/sponsorBar';
import MerchCard from './views/MerchCard/MerchCard';
import SponsorCard from './components/sponsorCard/sponsorCard';
import ToTop from './components/toTop/toTop';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="Scrollview">
        <div className="block" id="top"/>
        <Dashboard/>
        <MerchCard id="about" title="ABOUT" text="This is some text" right />
        <MerchCard id="merchandise" title="MERCHANDISE" text="This is some text" />
        <SponsorCard/>
        <ToTop/>
        <SponsorBar/>
      </div>
    </div>
  );
}

export default App;
