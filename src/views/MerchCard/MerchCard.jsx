import React from 'react';
import './MerchCard.css';

function MerchCard() {
  return (
    <div className="MerchRoot">
      <div className="container">
        <div className="header">
              MERCH
          </div>
          <div className="bar" />
          <div className="row">
              <div className="image">This is an image</div>
              <div>
                  <div className="text">This is a t shirt</div>
                  <div className="text">This is its price</div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default MerchCard;
