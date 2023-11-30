import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import TopBar from './components/TopBar';

import React, { useState } from 'react';

function App() {
  const [code, setCode] = useState('// Write your code here');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    };
  return (
    <div className="App">
      <TopBar/>
      <MainPage/>
    </div>
  );
}

export default App;
