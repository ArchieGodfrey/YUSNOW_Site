import React from 'react';
import "./navbar.css";

function Navbar({ scrollToRef, scrollPosition}) {
    return(
        <div className="navbar" style={scrollPosition > 600 ? { backgroundColor: `rgba(255,0,0,${(scrollPosition - 600) * 0.01})`} : {}}>
            <div style={{display:"flex"}}>
                <img 
                    src={require('../../assets/YUSNOW_LOGO.png')} 
                    className="image"
                    alt="Logo"
                    onClick={() => scrollToRef('top')}
                />
                <div className="block"/>
                <div className="col">
                    <div className="title">
                        {"yusnow".toUpperCase()}
                    </div>
                    <div className="slogon">
                        {"York University Ski and Snowboard Society"}
                    </div>
                </div>
            </div>
            {scrollPosition > 600 && (
              <div className="buttonBar" style={{ opacity: (scrollPosition - 600) * 0.01 }}>
                <button className="buttonMargin" onClick={() => scrollToRef('about')}>About</button>
                <button className="buttonMargin" onClick={() => scrollToRef('merchandise')}>Merchandise</button>
                <button className="buttonMargin" onClick={() => scrollToRef('contact')}>Contact</button>
                <button className="buttonMargin" onClick={() => scrollToRef('sponsorcard')}>Sponsors</button>
              </div>
            )}
        </div>
    )
}

export default Navbar;