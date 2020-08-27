import React from 'react';
import './emailCard.css';

function EmailCard() {
    return (
        <div className="emailRoot" id="contact">
            <div className="container">
                <div className="header">CONTACT</div>
                <div className="bar"/>
                    <div class="row">
                        {/* <div style={{ display:"flex", flex: 2 }}>
                            <div className="contents">
                              <form action="mailto:oliver.driver100@gmail.com" method="post" enctype="text/plain">
                                <input className="input" type="text" name="name" placeholder="Name"/>
                                <input className="input" type="email" name="email" placeholder="Email"/>
                                <textarea className="input" type="text" name="name" rows="10" placeholder="Get into contact with us here..."/>
                                <button className="buttonMargin">Send</button>
                              </form>
                            </div>
                        </div> */}
                        <div className="contents margin">
                            <div className="title">Our infomation</div>
                            <a>
                                <img 
                                    src={require('../../assets/social-media-logos/mail.png')} 
                                    className="image"
                                    alt="Logo"
                                />
                                <div className="text">snow@yusu.org</div>
                            </a>
                            <a href="https://www.facebook.com/YUsnow/" target="_blank" rel="noopener noreferrer">
                                <img 
                                    src={require('../../assets/social-media-logos/facebook_white_logo.png')} 
                                    className="image"
                                    alt="Logo"
                                />
                                <div className="text">facebook.com/YUsnow</div>
                            </a>
                            <a href="https://www.instagram.com/yorkunisnow/" target="_blank" rel="noopener noreferrer">
                                <img 
                                    src={require('../../assets/social-media-logos/instagram_white_logo.png')} 
                                    className="image"
                                    alt="Logo"
                                />
                                <div className="text">instagram.com/yorkunisnow</div>
                            </a>
                        </div> 
                    </div>
                </div>
            </div>
    )
}

export default EmailCard;