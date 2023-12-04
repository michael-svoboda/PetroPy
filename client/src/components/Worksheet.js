import React from 'react';
import 'katex/dist/katex.min.css';
import './Formula.css';
import { BlockMath } from 'react-katex';

const Work = ({ formulaString }) => {
  const mathStyle = {
    fontSize: '20px',
    color: 'white',
    // Add other styles as needed
  };

  return (
    <div style={mathStyle}>
      <BlockMath math={formulaString} classname="formula2" />
    </div>
  );
};

const Worksheet = ({formulaList = []}) => {
  const containerStyle = {
    height: '400px', // Set the desired height for the scrollable box
    overflowY: 'auto',
    padding: '10px', // Add padding for better appearance
    color: 'linear-gradient(to bottom, rgba(171, 178, 191, 1) 0%, rgba(171, 178, 191, 0.75) 25%, rgba(171, 178, 191, 0.75) 75%, rgba(171, 178, 191, 1) 100%)',
  };

  const gradientOverlay = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(to bottom, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.75) 25%, rgba(43, 43, 43, 0.75) 75%, rgba(43, 43, 43, 0) 100%)',
    pointerEvents: 'none',
  };

  const hideScrollbarStyle = `
    ::-webkit-scrollbar {
      width: 0 !important;
      height: 0 !important;
    }
  `;

  return (
    <div>
      {/* Add the style tag for hiding the scrollbar */}
      <style>{hideScrollbarStyle}</style>

      {/* Block LaTeX */}
      <div style={containerStyle}>
        <div onClick={() => console.log('Clicked 1')}>
          {/* <Work formulaString="\mathtt{\mu} = \frac{0.00708 [131.2 ft] [1.0 m D] \left([2900.0 psi] - [2320.0 psi]\right)}{[137.5344 stbday] \log{\left(\frac{[1640.0 ft]}{[0.328 ft]} \right)}}" />
          <Work formulaString="\mathtt{\mu} = \frac{0.00708 [131.2 ft] [1.0 m D] \left([2900.0 psi] - [2320.0 psi]\right)}{[137.5344 stbday] \log{\left(\frac{[1640.0 ft]}{[0.328 ft]} \right)}}" />
          <Work formulaString="\mathtt{\mu} = \frac{0.00708 [131.2 ft] [1.0 m D] \left([2900.0 psi] - [2320.0 psi]\right)}{[137.5344 stbday] \log{\left(\frac{[1640.0 ft]}{[0.328 ft]} \right)}}" />
          <Work formulaString="\mathtt{\mu} = \frac{0.00708 [131.2 ft] [1.0 m D] \left([2900.0 psi] - [2320.0 psi]\right)}{[137.5344 stbday] \log{\left(\frac{[1640.0 ft]}{[0.328 ft]} \right)}}" />
          <Work formulaString="\mathtt{\mu} = \frac{0.00708 [131.2 ft] [1.0 m D] \left([2900.0 psi] - [2320.0 psi]\right)}{[137.5344 stbday] \log{\left(\frac{[1640.0 ft]}{[0.328 ft]} \right)}}" />
          <Work formulaString="\mathtt{\mu} = \frac{0.00708 [131.2 ft] [1.0 m D] \left([2900.0 psi] - [2320.0 psi]\right)}{[137.5344 stbday] \log{\left(\frac{[1640.0 ft]}{[0.328 ft]} \right)}}" />
          <Work formulaString="\mathtt{\mu} = \frac{0.00708 [131.2 ft] [1.0 m D] \left([2900.0 psi] - [2320.0 psi]\right)}{[137.5344 stbday] \log{\left(\frac{[1640.0 ft]}{[0.328 ft]} \right)}}" />
          <Work formulaString="\mathtt{\mu} = 0.46" /> */}
          {formulaList.map((formula, index) => (
          <Work key={index} formulaString={formula} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Worksheet;
