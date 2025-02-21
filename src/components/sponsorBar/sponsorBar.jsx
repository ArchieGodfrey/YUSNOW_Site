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
                <img 
                    src={require('../../assets/sponsor-logos/FRISKI.png')} 
                    className="image"
                    alt="Logo"
                />
                <img 
                    src={require('../../assets/sponsor-logos/Joss.png')} 
                    className="image"
                    alt="Logo"
                />
                <img 
                    src={require('../../assets/sponsor-logos/panda.png')} 
                    className="image"
                    alt="Logo"
                />
                <img 
                    src={require('../../assets/sponsor-logos/POW.png')} 
                    className="image"
                    alt="Logo"
                />
                <img 
                    src={require('../../assets/sponsor-logos/SkiBartlett.png')} 
                    className="image"
                    alt="Logo"
                />
                <img 
                    src={require('../../assets/sponsor-logos/Sputnik.png')} 
                    className="image"
                    alt="Logo"
                />
                <img 
                    src={require('../../assets/sponsor-logos/STAR.png')} 
                    className="image"
                    alt="Logo"
                />
                <img 
                    src={require('../../assets/sponsor-logos/Wasteland.png')} 
                    className="image"
                    alt="Logo"
                />
                <img
                    src={require('../../assets/sponsor-logos/Absolute-snow.png')}
                    className="image"
                    alt="Logo"
                />
                <img 
                    src={require('../../assets/sponsor-logos/Afterjam-white.png')}
                    className="image"
                    alt="Logo"
                />
            </div>
        </div>
    )
}

export default SponsorBar;