import React from 'react';
import "./navbar.css";

function Navbar() {
    return(
        <div className="navbar">
            <img src={require('../../assets/YUSNOW_LOGO.png')} className="image"/>
        </div>
    )
}

export default Navbar;