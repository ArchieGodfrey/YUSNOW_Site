// We 'import' react so it can use it
import React from 'react';
// We 'import' the 'Dashboard.css' so we can style the page
import './Dashboard.css';

// So this a function with name 'Dashboard' and it returns a div and an Input
function Dashboard({ changeScreen }) {
  const [showImage, setShowImage] = React.useState(0); 
  return (
  <div id="container">
    <img
      className="image"
      style={{ opacity: showImage}}
      src={require('../assets/YUSNOW_LOGO.png')}
      alt="Logo"
    />
    <p className="para">
      Welcome
    </p>
    <div className="row">
      <button onClick={() => setShowImage(1 - showImage)}>{showImage === 0 ? 'Show' : 'Hide'}</button>
      <button className="margin" onClick={() => changeScreen(false)}>Return Home</button>
    </div>
  </div>
  );
}

// We 'export' the function so that it can be 'import'ed in the 'App.js' file
export default Dashboard;
