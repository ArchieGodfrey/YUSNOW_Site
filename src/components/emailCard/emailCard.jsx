import React from 'react';
import './emailCard.css';

function EmailCard() {
    return (
        <div className="emailRoot" id="contact">
            <div className="container">
                <div className="header">CONTACT</div>
                <div className="bar"/>
                    <div style={{display:"flex"}}>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            <div className="contents">
                                <form action="mailto:oliver.driver100@gmail.com" method="post" enctype="text/plain">
                                    <div>
                                    <input className="input" type="text" name="name" size="50" placeholder="Name"/>
                                    </div>
                                    <div>
                                    <input className="input" type="email" name="email" size="50" placeholder="Email"/>
                                    </div>
                                    
                                    <div>
                                    <textarea className="input" type="text" name="name" rows="10" cols="100" placeholder="Body"/>
                                    </div>
                                    
                                    <button className="buttonMargin">Send</button>
                                </form>
                            </div>
                        </div>
                        <div className="contents">
                            <div className="title">Our infomation</div>
                            <div className="text">snow@yusu.org</div>
                            <a href="https://www.facebook.com/YUsnow/" target="_blank" rel="noopener noreferrer">
                                <img 
                                    src={require('../../assets/social-media-logos/facebook_white_logo.png')} 
                                    className="image"
                                    alt="Logo"
                                />
                            </a>
                            <a href="https://www.instagram.com/yorkunisnow/" target="_blank" rel="noopener noreferrer">
                                <img 
                                    src={require('../../assets/social-media-logos/instagram_white_logo.png')} 
                                    className="image"
                                    alt="Logo"
                                />
                            </a>
                        </div> 
                    </div>
                </div>
            </div>
    )
}

export default EmailCard;