// We 'import' react so it can use it
import React from 'react';
// We 'import' the 'Dashboard.css' so we can style the page
import './Dashboard.css';

// So this a function with name 'Dashboard' and it returns a div and an Input
function Dashboard() {
  return (
    <div className="dashboard" id="dashboard">
        <div className="imageContainer"/>

      <div className="buttonBar">
        <a href="#about"><button className="buttonMargin">About</button></a>
        <a href="#merchandise"><button className="buttonMargin">Merchandise</button></a>
        <a href="#sponsorcard"><button className="buttonMargin">Sponsors</button></a>
      </div>
      <div className="welcomeMessage">
        {"Welcome to the University of York Ski and Snowboard Society"}
      </div>
    </div>
    
  );
}

// We 'export' the function so that it can be 'import'ed in the 'App.js' file
export default Dashboard;
