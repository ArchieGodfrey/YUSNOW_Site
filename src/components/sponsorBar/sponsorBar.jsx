import React from 'react';
import "./sponsorBar.css";

function SponsorBar() {
    return(
        <div className="sponsorBar">
            <div className="background">
                <img 
                    src={require('../../assets/YUSNOW_LOGO.png')} 
                    className="image"
                    alt="Logo"
                />
                <img 
                    src={require('../../assets/sponsor-logos/fieldtrip_logo.png')} 
                    className="image"
                    alt="Logo"
                />
                <img 
                    src={require('../../assets/sponsor-logos/bro_logo.png')} 
                    className="image"
                    alt="Logo"
                />
                <img 
                    src={require('../../assets/sponsor-logos/chillys_logo.png')} 
                    className="image"
                    alt="Logo"
                />
            </div>
        </div>
    )
}

export default SponsorBar;