import React from 'react';
import './App.css';
import Dashboard from './views/Dashboard';
import Navbar from './components/navbar/navbar';
import SponsorBar from './components/sponsorBar/sponsorBar';
import MerchCard from './views/MerchCard/MerchCard';
import SponsorCard from './components/sponsorCard/sponsorCard';
import ToTop from './components/toTop/toTop';
import EmailCard from './components/emailCard/emailCard';


function App() {
  const scrollToRef = (id) => {
    document.getElementById('ScrollView').scrollTo({ top: document.getElementById(id).offsetTop - 150, behavior: 'smooth'});
  }
  const committee = [{
    name:"Alex Sanderson",
    description:"President",
    image: require('./assets/committee-photos/Alex.jpg'),
  }, {
    name:"Vicki Blake",
    description:"Vice President",
    image: require('./assets/committee-photos/Vicki.jpg'),
  }, {
    name:"Rachel Gibson",
    description:"Treasurer",
    image: require('./assets/committee-photos/Rachel.jpg'),
  }, {
    name:"Hugh campkin",
    description:"Trip Secretary",
    image: require('./assets/committee-photos/Hugh.jpg'),
  }, {
    name:"Oliver Driver",
    description:"Media and Merch Officer",
    image: require('./assets/committee-photos/Olly.jpg'),
  }, {
    name:"Charlie Stent",
    description:"Social Secretary",
    image: require('./assets/committee-photos/Charlie.jpg'),
  }, {
    name:"Aarin Popat",
    description:"Social Secretary",
    image: require('./assets/committee-photos/Azza.jpg'),
  }, {
    name:"Elizabeth Baker",
    description:"Race Captain",
    image: require('./assets/committee-photos/Elizabeth.jpg'),
  }, {
    name:"Jack Littlewood",
    description:"Freestyle Captain",
    image: require('./assets/committee-photos/Jack.jpg'),
  }]
  const merch = [{
    name:"Quarter-Zip",
    description:"",
    image: require('./assets/merchandise/Quarter-zip.jpg'),
}, {
    name:"Tee 1",
    description:"",
    image: require('./assets/merchandise/Grey-tee-temp.jpg'),
}, {
    name:"Tee 2",
    description:"",
    image: require('./assets/merchandise/Pink_Tee.jpg'),
}]
  return (
    <div className="App">
      <Navbar scrollToRef={scrollToRef}/>
      <div id="ScrollView" className="Scrollview">
        <div className="block" id="top"/>
        <Dashboard scrollToRef={scrollToRef} />
        <MerchCard id="about" title="ABOUT" text="Welcome to the University of York Ski and Snowboard society. We are an inclusive club that offers some of the best socials on campus, ski races and most importantly... bi-annual ski trips for our members!" right info={committee}/>
        <MerchCard id="merchandise" title="MERCHANDISE" text="The following merchandise can be bought through the club, by either sending us an email or messaging our social media pages." info={merch}/>
        <EmailCard id="contact"/>
        <SponsorCard id="sponsorcard"/>
        <ToTop scrollToRef={scrollToRef} />
        <SponsorBar/>
      </div>
    </div>
  );
}

export default App;
