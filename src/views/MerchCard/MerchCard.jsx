import React from 'react';
import './MerchCard.css';

function MerchCard({ title, text, imageComponent, right, id }) {
  return (
    <div className={right ? "MerchRoot justifyContent" : "MerchRoot"} id={id}>
      <div className={right ? "rowReverse" : "row"}>
        <div className={right ? "container alignItems" : "container"}>
          <div className={right ? "MerchRoot justifyContent" : "MerchRoot"}>
            <div className={right ? "rowReverse" : "row"}>
              <div className="header">
                    {title}
                </div>
                <div className="bar" />
                <div className="row">
                    {imageComponent && (
                    imageComponent
                    )}
                    <div>
                        <div className="text">{text}</div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        <div className={right ? "triangleLeft" : "triangleRight"} />
      </div>
    </div>
  );
}

export default MerchCard;
