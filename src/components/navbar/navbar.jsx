import React from 'react';
import "./navbar.css";

function Navbar({ scrollToRef, showButtons}) {
    return(
        <div className="navbar">
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
            {showButtons && (
              <div className="buttonBar">
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