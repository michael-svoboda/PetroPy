// Sidebar.js

import React from 'react';

import { Home, Info, Layers, Mail} from 'feather-icons-react'; 
import IconButton from '@mui/material/IconButton';

const Sidebar = () => {
  const sidebarContainerStyles = {
    height: '100%',
    width: '80px',
    position: 'fixed',
    top: '0',
    left: '-80px',
    backgroundColor: '#333',
    transition: 'left 0.3s ease-in-out',
    zIndex: '1',
  };

  const sidebarStyles = {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const listItemStyles = {
    marginBottom: '10px',
    color: 'white',
    cursor: 'pointer',
    padding: '10px',
    width: '100%',
    textAlign: 'center',
    transition: 'background-color 0.3s ease-in-out',
  };

  const listItemHoverStyles = {
    backgroundColor: '#555',
  };

  const toggleSidebar = () => {
    const sidebarContainer = document.getElementById('sidebarContainer');
    sidebarContainer.style.left = sidebarContainer.style.left === '0px' ? '-80px' : '0px';
  };

  return (
    <div
      id="sidebarContainer"
      style={sidebarContainerStyles}
      onMouseEnter={toggleSidebar}
      onMouseLeave={toggleSidebar}
    >
      <div style={sidebarStyles}>
        <Home size={32} />
        <Info size={32} />
        <Layers size={32} />
        <Mail size={32} />

      </div>
    </div>
  );
};

export default Sidebar;
