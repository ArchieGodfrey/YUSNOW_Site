// We 'import' react so it can use it
import React from 'react';
// We 'import' the 'Dashboard.css' so we can style the page
import './Dashboard.css';

// So this a function with name 'Dashboard' and it returns a div and an Input
function Dashboard() {
  return (
    <div className="dashboard">
        <div 
                  
                  className="imageContainer"
                  
              >
        <img 
                  src={require('../assets/YUSNOW_LOGO.png')} 
                  className="mainImage"
              />
        </div>
      <div className="buttonBar">
        <button>Merchandise</button>
        <button>Calendar</button>
        <button>Sponsors</button>
      </div>
      <div className="welcomeMessage">
        {"Welcome to the University of York Ski and Snowboard Society!"}
      </div>
    </div>
    
  );
}

// We 'export' the function so that it can be 'import'ed in the 'App.js' file
export default Dashboard;
