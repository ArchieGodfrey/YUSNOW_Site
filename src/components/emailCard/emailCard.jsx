import React from 'react';
import './emailCard.css';

function EmailCard() {
    return (
        <div className="emailRoot" id="contact">
            <div className="container">
                <div className="header">CONTACT</div>
                <div className="bar"/>
                <form action="mailto:oliver.driver100@gmail.com" method="post" enctype="text/plain">
                    <input className="input" type="text" name="name" placeholder="Name"/>
                    <input className="input" type="email" name="email" placeholder="Email"/>
                    <textarea className="input" type="text" name="name" rows="5" cols="30" placeholder="Body"/>
                    <button className="buttonMargin">Send</button>
                </form>
            </div>
        </div>
    )
}

export default EmailCard;