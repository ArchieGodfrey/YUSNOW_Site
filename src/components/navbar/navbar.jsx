import React from 'react';
import "./navbar.css";

function Navbar({ scrollToRef, scrollPosition}) {
    return(
        <div className="navbar" style={scrollPosition > 400 ? { backgroundColor: `rgba(30,30,30,${(scrollPosition - 400) * 0.0015})`} : {}}>
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
            {scrollPosition > 400 && (
              <div className="buttonBar" style={{ opacity: (scrollPosition - 400) * 0.0015 }}>
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