import React from 'react';
import './App.css';
import Dashboard from './views/Dashboard';
import Navbar from './components/navbar/navbar';
import SponsorBar from './components/sponsorBar/sponsorBar';
import MerchCard from './views/MerchCard/MerchCard';
import SponsorCard from './views/sponsorCard/sponsorCard';
import ToTop from './components/toTop/toTop';
import EmailCard from './views/emailCard/emailCard';

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
    image: require('./assets/committee-photos/Vicki.png'),
  }, {
    name:"Rachel Gibson",
    description:"Treasurer",
    image: require('./assets/committee-photos/Rachel.jpg'),
  }, {
    name:"Hugh campkin",
    description:"Trip Secretary",
    image: require('./assets/committee-photos/Hugh.png'),
  }, {
    name:"Oliver Driver",
    description:"Media & Merch Officer",
    image: require('./assets/committee-photos/Olly.jpg'),
  }, {
    name:"Charlie Stent",
    description:"Social Secretary",
    image: require('./assets/committee-photos/Charlie.png'),
  }, {
    name:"Aarin Popat",
    description:"Social Secretary",
    image: require('./assets/committee-photos/Azza.png'),
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
    name:"Quarter Zip",
    description:"",
    image: require('./assets/merchandise/Quarter-zip.png'),
}, {
    name:"Folie Goose",
    description:"",
    image: require('./assets/merchandise/goose-design.png'),
}, {
    name:"The Snow is Calling",
    description:"",
    image: require('./assets/merchandise/snow-calling.png'),
}];

const [scrollPosition, setScrollPosition] = React.useState(0);
const onScroll = (event) => {
  setScrollPosition(event.nativeEvent.srcElement.scrollTop)
}

  return (
    <div className="App">
      <Navbar scrollToRef={scrollToRef} scrollPosition={scrollPosition} />
      <div id="ScrollView" className="Scrollview" onScroll={onScroll}>
        <div className="block" id="top"/>
        <Dashboard scrollToRef={scrollToRef} />
        <MerchCard id="about" title="ABOUT" text="Welcome to the University Of York Ski and Snowboard Society. Come and get involved in some of the best socials at York, try out one of our training sessions or join us on our trips to the alps! Our trips are held during the Christmas and Easter holidays, ran securely through Wasteland ski, ensuring that everything is sorted for you - hassle free. Think you're up for racing for us? Come down to one of our trainings or message our race captain for more information on the chance of racing nationally." right info={committee}/>
        <MerchCard id="merchandise" title="MERCHANDISE" text="The following merchandise can be bought through the club, by either sending us an email or messaging our social media pages. We offer a range of sizes and like to keep our designs fresh and are printed to a high quality. The following design is in production, so if this is what you're looking for, message our media & merch sec to find out when the release is!" info={merch}/>
        <EmailCard id="contact"/>
        <SponsorCard id="sponsorcard"/>
        <ToTop scrollToRef={scrollToRef} />
        <SponsorBar/>
      </div>
    </div>
  );
}

export default App;
