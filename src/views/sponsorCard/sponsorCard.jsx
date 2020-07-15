import React from 'react';
import "./sponsorCard.css";
import ImageWithButtons from '../../components/ImageWithButtons/ImageWithButtons';

function SponsorCard() {
    const sponsors = [{
        name:"Chillys",
        description:"Chilly's Bottles are a revolutionary new water bottle, built using double wall vacuum insulation, meaning they will keep cold drinks cold for up to 24 hours, and hot drinks hot for up to 18 hours.\n\n They're stylish and environmentally friendly, and due to their size you'll want to take your Chilly's bottle with you everywhere. \n\n As we all need to drink, Chilly’s Bottles really are aimed at everyone! It is the perfect bottle for taking to school, university and work. It is also fantastic for picnics, day trips, holidays and sports activities.",
        image: require('../../assets/sponsor-logos/chillys_logo.png'),
        link:"www.chillysbottles.com"
    }, {
        name:"Bro!",
        description:"Founded on the core principals of having fun and riding with your buddies – bro! clothing offers a unique selection of soft goods for all your action sports needs. At a time when action sports are progressing at such a huge rate, we’ve noticed people putting a lot of pressure on themselves to stomp that newest trick, get sponsored, and turn pro. bro! is about stepping back from all of that, riding with your buddies and having fun!",
        image: require('../../assets/sponsor-logos/bro_logo.png'),
        link:"www.brocerystore.com"
    }, {
        name:"Fieldtrip",
        description:"Fieldtip, our event sponsor for the year, provides the vibes thaat is of course expected of YUSNOW. With house, techno and disco music, you can see fieldtrip playing at some of our socials throughout the year!",
        image: require('../../assets/sponsor-logos/fieldtrip_logo.png'),
        link:"www.facebook.com/FIeldTripYork"
    }, {
        name:"Friski",
        description:"Friski Wear is a rider owned, winter lifestyle and technical wear company born in the UK with it’s heart in the Alps. Taking inspiration from simple and functional design that works on and off the mountain our range embodies this and we work hard to ensure each product fits with our ethos and our message.",
        image: require('../../assets/sponsor-logos/FRISKI.png'),
        link:"www.friskiwear.com"
    }, {
        name:"Joss",
        description:"The energy drink powder to keep your night flowing. Order on the Extra Joss webshop! Joss energy powder works well even as a mixer, so load up on VodkaJoss when you're cruising the mountain slopes and bars!",
        image: require('../../assets/sponsor-logos/Joss.png'),
        link:"www.extrajoss.eu"
    }, {
        name:"Panda Optics",
        description:"Panda optics combine the latest technology and most innovative designs in order to optimise skiers/boarders vision and comfort, whether it be competing as one of our British athletes, wading through waist deep powder, strolling round town or hitting the Apres ski.",
        image: require('../../assets/sponsor-logos/panda.png'),
        link:"www.pandaoptics.co.uk"
    }, {
        name:"POW",
        description:"Protect Our Winters - POW inspire and eqip UK based outdoor communities to take positive action to address the climate crisis ansd to accelerate the transition to a carbon neutral society.",
        image: require('../../assets/sponsor-logos/POW.png'),
        link:"protectourwinters.uk"
    }, {
        name:"Ski Bartlett",
        description:"Established in 1965, Ski Bartlett is one of the UK's most popular independent specialist ski shop with over 50 years of experience. During this period we've built up a great reputation for our technical custom boot fitting service. We stock one of the largest ranges of skis, boots, clothing and equipment available in the UK and cater for EVERY ability level, age and style of skier. Stocking an extensive range of ski boots from manufacturers such as Atomic, Salomon, Rossignol, Full Tilt, Fischer, Head, Lange, Dynafit, Scarpa, Dalbello and more means that we can always find a boot to suit your foot shape. So whether your passion is racing, freestyle, freeride, touring, telemark or recreational skiing, we can custom fit you with a boot to suit your style.",
        image: require('../../assets/sponsor-logos/SkiBartlett.png'),
        link:"skibartlett.com"
    }, {
        name:"Sputnik",
        description:"Sputnik was born at the dizzy heights of Wycombe Summit Dry Ski Slope back in the winter of 1999/2000. Here Sputnik quickly became involved with the UK dry slope scene, gaining a great reputation for a friendly shop vibe, amazing products and the best honest advice around. Sputnik still stands and takes pride in its reputation. Thanks to all our customers and hard work, we are one of the few rider run and rider owned shops continuing to bring you the freshest in snowboard technology and those hard to find items, all with a big smile and at great prices.",
        image: require('../../assets/sponsor-logos/Sputnik.png'),
        link:"www.sputniksnowboardshop.com"
    }, {
        name:"STAR",
        description:"Student Action For Refugees - STAR is a national charity of 34,000 students welcoming refugees to the UK. Together we help volunteer at local refugee projects, campaign to improve the lives of refugees and educate people about refugees and asylum.",
        image: require('../../assets/sponsor-logos/STAR.png'),
        link:"www.star-network.org.uk/index.php"
    }, {
        name:"Wasteland Ski",
        description:"Wasteland Ski are the event producers of the Alps. Running various alpine events for university groups, their seasoned experts will be our portal to the great trips held this year. Wasteland create unique experiences through exceptional production, talent and immersive experiences.",
        image: require('../../assets/sponsor-logos/Wasteland.png'),
        link:"wastelandski.com"
    }]

    const [slideIndex, setSlideIndex]=React.useState(0);

    return(
        <div className="sponsorCard" id="sponsorcard">
            <div className="container">
                <div className="title">
                    {sponsors[slideIndex].name}
                </div>
                <div className="bar"/>
                <div className="row">
                    <div className="textContainer">
                        <div className="description">
                            {sponsors[slideIndex].description}
                        </div>
                        <a className="link" href={`https://${sponsors[slideIndex].link}`} target="_blank" rel="noopener noreferrer">
                            Check them out at: <u>{sponsors[slideIndex].name}</u>
                        </a>
                    </div>
                    <ImageWithButtons
                        className="imageContainer"
                        array={sponsors}
                        slideIndex={slideIndex}
                        setSlideIndex={setSlideIndex}
                        slide={
                        <div className="imageWindow">
                            <img
                                src={sponsors[slideIndex].image}
                                className="image"
                                alt="Logo"
                            />
                        </div>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default SponsorCard;