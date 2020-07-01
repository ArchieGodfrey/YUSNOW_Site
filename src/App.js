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
      {showDashboard ? (
        <Dashboard showImage={showDashboard} changeScreen={(show) => setShowDashboard(show)} />
      ) : (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={() => setShowDashboard(!showDashboard)}>
            Go to Dashboard
          </button>
        </header>
      )}
    </div>
  );
}

export default App;
