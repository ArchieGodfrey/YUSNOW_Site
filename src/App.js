import React from 'react';
import './App.css';
import Dashboard from './views/Dashboard';
import Navbar from './components/navbar/navbar';
import SponsorBar from './components/sponsorBar/sponsorBar';
import MerchCard from './views/MerchCard/MerchCard';
import SponsorCard from './components/sponsorCard/sponsorCard';
import ToTop from './components/toTop/toTop';



function App() {
  const scrollToRef = (id) => {
    document.getElementById('ScrollView').scrollTo({ top: document.getElementById(id).offsetTop - 150, behavior: 'smooth'});
  }
  return (
    <div className="App">
      <Navbar/>
      <div id="ScrollView" className="Scrollview">
        <div className="block" id="top"/>
        <Dashboard/>
        <MerchCard id="about" title="ABOUT" text="Welcome to the University of York Ski and Snowboard society. We are an inclusive club that offers some of the best socials on campus, ski races and most importantly... bi-annual ski trips for our members!" right />
        <MerchCard id="merchandise" title="MERCHANDISE" text="This is some text" />
        <SponsorCard id="sponsorcard"/>
        <ToTop scrollToRef={scrollToRef} />
        <SponsorBar/>
      </div>
    </div>
  );
}

export default App;
