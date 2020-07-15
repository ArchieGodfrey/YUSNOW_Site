import React from 'react';
import "./ImageWithButtons.css";

function ImageWithButtons({ array, slide, slideIndex, setSlideIndex }) {

    const nextSlide = (slideIndex, setSlideIndex, array) => (
        slideIndex < array.length - 1 ? setSlideIndex(slideIndex+1) : setSlideIndex(0)
    );

    return(
        <div className="ImageWithButtons">
           <div className="center" onClick={() => nextSlide(slideIndex, setSlideIndex, array)}>
               {slide}
           </div>
           <div className="center">
            {array.map((_, index)=>(
                index===slideIndex?(
                    <div className="filledCircle" />
                ) : (
                    <div className="emptyCircle" onClick={() => setSlideIndex(index)} />
                )
            ))}
           </div>
        </div>
    )
}

export default ImageWithButtons;