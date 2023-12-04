// Formula2.js

import React, { useEffect } from 'react';
import 'katex/dist/katex.min.css';
import './Formula.css';
import { BlockMath } from 'react-katex';

const Formula2 = ({ latexString }) => {
  const mathStyle = {
    fontSize: '32px',
    color: 'white',
    // Add other styles as needed
  };
  
  const containerStyle = {
    height: '400px', // Set the desired height for the scrollable box
    overflowY: 'auto',
    padding: '10px', // Add padding for better appearance
  };

  useEffect(() => {
    // Log for debugging purposes
    console.log('latexStringF2 updated:', latexString);
  }, [latexString]);

  // Use an empty string if latexString is undefined
  const sanitizedLatexString = latexString || '';

  return (
    <div style={mathStyle}>
      <BlockMath math={sanitizedLatexString} classname="formula1" />
    </div>
  );
};

export default Formula2;
