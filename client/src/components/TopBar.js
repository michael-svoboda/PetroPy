
import React from 'react';
import { Codepen, Cpu, FilePlus, LogOut, Moon, Save } from 'feather-icons-react/build/IconComponents';
import { GitHub } from 'react-feather';

const Topbar = () => {
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

      <div style={menuItemsStyles}>
        <GitHub size={30} />
        <Cpu size={30} />
        <Codepen size={30} />
        <Moon size={30} />
        <Save size={30} />
        <LogOut size={30} />
      </div>
    </div>
  );
};

export default Topbar;
