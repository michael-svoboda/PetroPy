
import React from 'react';
import { Codepen, Cpu, FilePlus, LogOut, Moon, Save, Edit } from 'feather-icons-react/build/IconComponents';
import { GitHub } from 'react-feather';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Button from '../components/Button'

const Topbar = () => {

  const handleButtonClick = () => {
  };

  const handleButtonHover = () => {
  };

  const handleGithubClick = () => {
    // Navigate to the desired URL
    window.location.href = 'https://github.com/michael-svoboda/PetroPy';
    // Alternatively, open the link in a new tab/window
    // window.open('https://www.example.com', '_blank');
  };

  const topbarStyles = {
    backgroundColor: '#333',
    color: 'white',
    height: '60px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    boxShadow: '30 15px 55px rgba(0, 0.5, .5, 0.6)',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1',
    justifyContent: 'space-evenly', // This will evenly space the icons
  };

  const buttonStyles = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'white', // Set the color explicitly
  };

  const logoStyles = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
  };

  const menuItemsStyles = {
    display: 'flex',
    justifyContent: 'space-evenly', // This will evenly space the icons
    gap: '80px',
  };

  const menuItemStyle = {
    textDecoration: 'none',
    color: 'white',
    fontWeight: '500',
  };

  return (
    <div style={topbarStyles}>
      <Button
        icon={GitHub}
        onClick={handleGithubClick}
        onHover={handleButtonHover}
      />
      <Button
        icon={Cpu}
        onClick={handleButtonClick}
        onHover={handleButtonHover}
        to = '/formulaBrowser'
      />
      <Button
        icon={Codepen}
        onClick={handleButtonClick}
        onHover={handleButtonHover}
      />
      <Button
        icon={Edit}
        onClick={handleButtonClick}
        onHover={handleButtonHover}
        to = '/'
      />
      <Button
        icon={Moon}
        onClick={handleButtonClick}
        onHover={handleButtonHover}
      />
      <Button
        icon={Save}
        onClick={handleButtonClick}
        onHover={handleButtonHover}
      />
      <Button
        icon={LogOut}
        onClick={handleButtonClick}
        onHover={handleButtonHover}
      />
    </div>
  );
};

export default Topbar;
