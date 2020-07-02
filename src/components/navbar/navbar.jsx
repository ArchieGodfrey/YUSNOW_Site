import React from 'react';
import "./navbar.css";

function Navbar() {
    return(
        <div className="navbar">
            <img 
                src={require('../../assets/YUSNOW_LOGO.png')} 
                className="image"
                alt="Logo"
            />
            <div className="col">
                <div className="title">
                    {"yusnow".toUpperCase()}
                </div>
                <div className="slogon">
                    {"York University Ski and Snowboard Society"}
                </div>
            </div>
        </div>
    )
}

export default Navbar;