import './App.css';
import MainPage from './pages/MainPage';
import FormulaBrowser from './pages/FormulaBrowser';
import TopBar from './overlay_components/TopBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React, { useState } from 'react';


function App() {
  const [code, setCode] = useState('// Write your code here');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <Router>
      <div className="App">
        <TopBar />
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/formulaBrowser" element={<FormulaBrowser/>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
