import React from 'react';
import "./navbar.css";

function Navbar({ scrollToRef, scrollPosition}) {
    return(
        <div className="navbar" style={scrollPosition > 100 ? { backgroundColor: `rgba(30,30,30,${(scrollPosition - 100) * 0.0015})`} : {}}>
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
              <div className="buttonBar" style={{ opacity: (scrollPosition - 100) * 0.0015 }}>
                  <div class="button" onClick={() => scrollToRef('about')}>
                        <a class="custom-underline">About</a>
                  </div>
                  <div class="button" onClick={() => scrollToRef('merchandise')}>
                        <a class="custom-underline">Merchandise</a>
                  </div>
                  <div class="button" onClick={() => scrollToRef('contact')}>
                        <a class="custom-underline">Contact</a>
                  </div>
                  <div class="button" onClick={() => scrollToRef('sponsorcard')}>
                        <a class="custom-underline">Sponsors</a>
                  </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;