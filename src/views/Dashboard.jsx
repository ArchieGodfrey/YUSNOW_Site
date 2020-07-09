// We 'import' react so it can use it
import React from 'react';
// We 'import' the 'Dashboard.css' so we can style the page
import './Dashboard.css';

// So this a function with name 'Dashboard' and it returns a div and an Input
function Dashboard() {
  return (
    <div className="dashboard">
        <div className="imageContainer"/>

      <div className="buttonBar">
        <button className="buttonMargin">Merchandise</button>
        <button className="buttonMargin">Calendar</button>
        <button className="buttonMargin">Sponsors</button>
      </div>
      <div className="welcomeMessage">
        {"Welcome to the University of York Ski and Snowboard Society!"}
      </div>
    </div>
    
  );
}

// We 'export' the function so that it can be 'import'ed in the 'App.js' file
export default Dashboard;
