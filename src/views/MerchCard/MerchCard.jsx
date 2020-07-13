import React from 'react';
import './MerchCard.css';

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

const [slideIndex, setSlideIndex]=React.useState(0);

const committee = [{
  name:"Alex Sanderson",
  description:"President",
  image: require('../../assets/committee-photos/Alex.png'),
}, {
  name:"Vicki Blake",
  description:"Vice President",
  image: require('../../assets/sponsor-logos/bro_logo.png'),
}, {
  name:"Rachel Gibson",
  description:"Treasurer",
  image: require('../../assets/sponsor-logos/fieldtrip_logo.png'),
}, {
  name:"Hugh campkin",
  description:"Trip Secretary",
  image: require('../../assets/sponsor-logos/fieldtrip_logo.png'),
}, {
  name:"Oliver Driver",
  description:"Media and Merch Officer (and co-creator off this awesome website)",
  image: require('../../assets/sponsor-logos/fieldtrip_logo.png'),
}, {
  name:"Charlie Stent",
  description:"Social Secretary",
  image: require('../../assets/sponsor-logos/fieldtrip_logo.png'),
}, {
  name:"Aarin Popat",
  description:"Social Secretary",
  image: require('../../assets/sponsor-logos/fieldtrip_logo.png'),
}, {
  name:"Elizabeth Baker",
  description:"Race Captain",
  image: require('../../assets/sponsor-logos/fieldtrip_logo.png'),
}, {
  name:"Jack Littlewood",
  description:"Freestyle Captain",
  image: require('../../assets/sponsor-logos/fieldtrip_logo.png'),
}]

const [slideIndex, setSlideIndex]=React.useState(0);

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
                </div>
              </div>
          </div>
        <div className={right ? "triangleLeft" : "triangleRight"} />
      </div>
    </div>
  );
}

export default MerchCard;
