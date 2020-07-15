import React from 'react';
import './emailCard.css';

function EmailCard() {
    return (
        <div className="emailRoot" id="contact">
            <div className="container">
                <div className="header">Contact</div>
                <div className="bar"/>
                <div className="contents">
                    <form action="mailto:oliver.driver100@gmail.com" method="post" enctype="text/plain">
                        <div className="text">Name:</div>
                        <input className="input" type="text" name="name"/>

                        <div className="text">Email:</div>
                        <input className="input" type="email" name="email"/>

                        <div className="text">Body:</div>
                        <input className="input" type="text" name="name"/>
                        
                        <button className="buttonMargin">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmailCard;