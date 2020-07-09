import React from 'react';
import "./sponsorCard.css";

function nextSlide(slideIndex, setSlideIndex, sponsors) {
    if (slideIndex < sponsors.length - 1) {
        setSlideIndex(slideIndex+1)
    } else {
        setSlideIndex(0)
    }
    console.log(slideIndex)
}

function SponsorCard() {
    const sponsors = [{
        name:"chillys",description:"Hello",image:""
    }, {
        name:"bro",description:"Hello",image:""
    }, {
        name:"fieldtrip",description:"Hello",image:""
    }]
    const [slideIndex, setSlideIndex]=React.useState(0)
    return(
        <div className="sponsorCard">
           <div className="container">
                <div className="slides" onClick={() => nextSlide(slideIndex, setSlideIndex, sponsors)}>
                    {sponsors[slideIndex].name}
                    
                </div>
                <div className="row">
                    {sponsors.map((sponsor, index)=>(
                        index===slideIndex?(
                            <div className="filledCircle">
                                
                            </div>
                        ) : (
                            <div className="emptyCircle" onClick={() => setSlideIndex(index)} >

                            </div>
                        )
                    ))}
                </div>
           </div>
        </div>
    )
}

export default SponsorCard;