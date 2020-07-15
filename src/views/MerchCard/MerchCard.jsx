import React from 'react';
import './MerchCard.css';
import ImageWithButtons from '../../components/ImageWithButtons/ImageWithButtons';

function MerchCard({ title, text, imageComponent, right, id, info}) {
const [slideIndex, setSlideIndex]=React.useState(0);
//const [slideIndexAbout, setSlideIndexAbout]=React.useState(0);
  return (
    <div className={right ? "MerchRoot justifyContent" : "MerchRoot"} id={id}>
      <div className={right ? "rowReverse" : "row"}>
        <div className={right ? "container alignItems" : "container"}>
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
                    <div className={right ? "aboutContainer" : "merchContainer"}>
                    <ImageWithButtons
                      array={info}
                      slideIndex={slideIndex}
                      setSlideIndex={setSlideIndex}
                      slide={
                        <div className={right ? "rotateContainerRight" : "rotateContainerLeft"}>
                          <img
                              src={info[slideIndex].image}
                              className="image"
                              alt="Logo"
                          />
                          <div className="name">
                            {info[slideIndex].name}
                          </div>
                          <div className="description">
                            {info[slideIndex].description}
                          </div>
                        </div>
                      }/>
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
