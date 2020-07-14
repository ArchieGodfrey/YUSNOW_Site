import React from 'react';
import "./sponsorCard.css";
import ImageWithButtons from '../ImageWithButtons/ImageWithButtons';

function SponsorCard() {
    const sponsors = [{
        name:"Chillys",
        description:"Chilly's Bottles are a revolutionary new water bottle, built using double wall vacuum insulation, meaning they will keep cold drinks cold for up to 24 hours, and hot drinks hot for up to 18 hours.\n\n They're stylish and environmentally friendly, and due to their size you'll want to take your Chilly's bottle with you everywhere. \n\n As we all need to drink, Chilly’s Bottles really are aimed at everyone! It is the perfect bottle for taking to school, university and work. It is also fantastic for picnics, day trips, holidays and sports activities.",
        image: require('../../assets/sponsor-logos/chillys_logo.png'),
        link:"www.chillysbottles.com"
    }, {
        name:"Bro!",
        description:"Hello",
        image: require('../../assets/sponsor-logos/bro_logo.png'),
        link:"www.brocerystore.com"
    }, {
        name:"Fieldtrip",
        description:"Hello",
        image: require('../../assets/sponsor-logos/fieldtrip_logo.png'),
        link:""
    }, {
        name:"Friski",
        description:"Hello",
        image: require('../../assets/sponsor-logos/FRISKI.png'),
        link:""
    }, {
        name:"Joss",
        description:"Hello",
        image: require('../../assets/sponsor-logos/Joss.png'),
        link:""
    }, {
        name:"Panda",
        description:"Hello",
        image: require('../../assets/sponsor-logos/panda.png'),
        link:""
    }, {
        name:"POW",
        description:"Hello",
        image: require('../../assets/sponsor-logos/POW.png'),
        link:""
    }, {
        name:"Ski Bartlett",
        description:"Hello",
        image: require('../../assets/sponsor-logos/SkiBartlett.png'),
        link:""
    }, {
        name:"Sputnik",
        description:"Hello",
        image: require('../../assets/sponsor-logos/Sputnik.png'),
        link:""
    }, {
        name:"STAR",
        description:"Hello",
        image: require('../../assets/sponsor-logos/STAR.png'),
        link:""
    }, {
        name:"Wasteland",
        description:"Hello",
        image: require('../../assets/sponsor-logos/Wasteland.png'),
        link:""
    }]

    const [slideIndex, setSlideIndex]=React.useState(0);

    return(
        <div className="sponsorCard" id="sponsorcard">
           <div className="container">
               <div className="textContainer">
                <div className="title">
                    {sponsors[slideIndex].name}
                </div>
                <div className="description">
                    {sponsors[slideIndex].description}
                </div>
                <div className="link">
                    {sponsors[slideIndex].link}
                </div>
               </div>
               <ImageWithButtons
                    array={sponsors}
                    slideIndex={slideIndex}
                    setSlideIndex={setSlideIndex}
                    slide={
                        <img
                            src={sponsors[slideIndex].image}
                            className="image"
                            alt="Logo"
                        />
                    }
                />
           </div>
        </div>
    )
}

export default SponsorCard;