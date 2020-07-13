// We 'import' react so it can use it
import React from 'react';
// We 'import' the 'Dashboard.css' so we can style the page
import './toTop.css';

// So this a function with name 'Dashboard' and it returns a div and an Input
function ToTop() {
  return (
    <div className="toTopRoot">
        <a href="#top"><button className="buttonMargin">Top</button></a>
    </div>
    
  );
}

// We 'export' the function so that it can be 'import'ed in the 'App.js' file
export default ToTop;
