import React from 'react';
import "./ImageWithButtons.css";

function ImageWithButtons({ array, slide, slideIndex, setSlideIndex }) {

    const nextSlide = (slideIndex, setSlideIndex, array) => (
        slideIndex < array.length - 1 ? setSlideIndex(slideIndex+1) : setSlideIndex(0)
    );

    React.useEffect(() => {
        const interval = setInterval(() => {
          nextSlide(slideIndex, setSlideIndex, array);
        }, 3000)
        return (() => {
            clearInterval(interval);
        })
    }, [slideIndex, setSlideIndex, array])

    return(
        <div className="ImageWithButtons">
           <div className="center" onClick={() => nextSlide(slideIndex, setSlideIndex, array)} style={{cursor:"pointer"}}>
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