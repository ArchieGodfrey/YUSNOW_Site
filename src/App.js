import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './views/Dashboard';
import Navbar from './components/navbar/navbar';

function App() {
  const [showDashboard, setShowDashboard] = React.useState(false); 
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
    </div>
    
  );
}

export default App;
