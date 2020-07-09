import React from 'react';
import "./sponsorCard.css";
import ImageWithButtons from '../ImageWithButtons/ImageWithButtons';

function SponsorCard() {
    const sponsors = [{
        name:"chillys",description:"Hello",image: require('../../assets/sponsor-logos/chillys_logo.png')
    }, {
        name:"bro",description:"Hello",image: require('../../assets/sponsor-logos/bro_logo.png')
    }, {
        name:"fieldtrip",description:"Hello",image: require('../../assets/sponsor-logos/fieldtrip_logo.png')
    }]

    const [slideIndex, setSlideIndex]=React.useState(0);

    return(
        <div className="sponsorCard">
           <div className="container">
               <div className="textContainer">
                <div>
                    {sponsors[slideIndex].name}
                </div>
                <div>
                    {sponsors[slideIndex].description}
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