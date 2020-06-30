// We 'import' react so it can use it
import React from 'react';
// We 'import' the 'Dashboard.css' so we can style the page
import './Dashboard.css';
// We 'import' the 'Input' component so we can use it on the page
import Input from '../components/input';

// So this a function with name 'Dashboard' and it returns a div and an Input
function Dashboard() {
  return (
  <div id="container">
    <div className="template">
        BASIC BITCH TEMPLATE
    </div>
    {/* This is how we use components */}
    <Input placeholder="This is called a prop but its basically a parameter" />
  </div>
  );
}

// We 'export' the function so that it can be 'import'ed in the 'App.js' file
export default Dashboard;
