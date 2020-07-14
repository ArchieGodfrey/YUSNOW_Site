import React from 'react';
import './MerchCard.css';
import ImageWithButtons from '../../components/ImageWithButtons/ImageWithButtons';

function MerchCard({ title, text, imageComponent, right, id }) {
  const merch = [{
    name:"Quarter-Zip",
    description:"Limited quantity! this quarter-zip is high quality and is YUSNOW branded.",
    image: require('../../assets/sponsor-logos/chillys_logo.png'),
}, {
    name:"Tee 1",
    description:"This is a t-shirt which comes in grey",
    image: require('../../assets/sponsor-logos/bro_logo.png'),
}, {
    name:"Tee 2",
    description:"This is a t-shirt which comes in pink",
    image: require('../../assets/sponsor-logos/fieldtrip_logo.png'),
}]

const [slideIndexMerch, setSlideIndexMerch]=React.useState(0);

const committee = [{
  name:"Alex Sanderson",
  description:"President",
  image: require('../../assets/committee-photos/Alex.jpg'),
}, {
  name:"Vicki Blake",
  description:"Vice President",
  image: require('../../assets/committee-photos/Vicki.jpg'),
}, {
  name:"Rachel Gibson",
  description:"Treasurer",
  image: require('../../assets/committee-photos/Rachel.jpg'),
}, {
  name:"Hugh campkin",
  description:"Trip Secretary",
  image: require('../../assets/committee-photos/Hugh.jpg'),
}, {
  name:"Oliver Driver",
  description:"Media and Merch Officer (and co-creator off this awesome website)",
  image: require('../../assets/committee-photos/Olly.jpg'),
}, {
  name:"Charlie Stent",
  description:"Social Secretary",
  image: require('../../assets/committee-photos/Charlie.jpg'),
}, {
  name:"Aarin Popat",
  description:"Social Secretary",
  image: require('../../assets/committee-photos/Azza.jpg'),
}, {
  name:"Elizabeth Baker",
  description:"Race Captain",
  image: require('../../assets/committee-photos/Elizabeth.jpg'),
}, {
  name:"Jack Littlewood",
  description:"Freestyle Captain",
  image: require('../../assets/committee-photos/Jack.jpg'),
}]

const [slideIndexAbout, setSlideIndexAbout]=React.useState(0);

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
                      array={committee}
                      slideIndexAbout={slideIndexAbout}
                      setSlideIndexAbout={setSlideIndexAbout}
                      slide={
                        <div className="rotateContainer">
                          <img
                              src={committee[slideIndexAbout].image}
                              className="image"
                              alt="Logo"
                          />
                          <div className="name">
                            {committee[slideIndexAbout].name}
                          </div>
                          <div className="description">
                            {committee[slideIndexAbout].description}
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
