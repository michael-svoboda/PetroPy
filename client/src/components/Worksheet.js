import React, { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
import './Formula.css';
import { BlockMath } from 'react-katex';

const Work = ({ formulaString }) => {
  const [tokens, setTokens] = useState([]);
  const [key, setKey] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [latexString, setLatexString] = useState('');

  const mathStyle = {
    fontSize: '20px',
    color: 'white',
    // Add other styles as needed
  };

  const generateTokens = () => {
    const cleanFormulaString = formulaString.replace(/[{}\\]/g, '');
    const tokenizedFormula = cleanFormulaString.split(' ');

    let tokenIndex = 0;

    const intervalId = setInterval(() => {
      if (tokenIndex < tokenizedFormula.length) {
       
        const newToken = tokenizedFormula[tokenIndex];
        const modifiedToken = newToken.replace(/mathtt|log|frac|left|right|[{()}]/g, '');
        const tokenWithParentheses = `(${modifiedToken})`;
        
          
        setKey((prevKey) => prevKey + 1);
        if (tokenIndex === 0) {
            setLatexString(tokenWithParentheses);
          } else {
            setLatexString((prevLatexString) => {
              let newLatexString = prevLatexString + tokenWithParentheses;
          
              if (tokenIndex > 8) {
                const oldIndex = tokenIndex - 9;
                const oldTokenMod = tokenizedFormula[oldIndex];
                const oldToken = oldTokenMod.replace(/mathtt|log|frac|left|right|[{()}]/g, '');
                const oldTokenWithParentheses = `(${oldToken})`;
          
                newLatexString = prevLatexString.replace(oldTokenWithParentheses, '');
                newLatexString = newLatexString + tokenWithParentheses;
                
                return newLatexString;
              }
          
              return newLatexString;
            });
          }
          
        tokenIndex++;

      } else {
        clearInterval(intervalId);
        setLatexString(formulaString);

        // Clear tokens after 5 seconds
        setTimeout(() => {
          setTokens([]);
        }, 10);
      }
    }, 140);

    return () => clearInterval(intervalId);
  };

  useEffect(() => {
    return generateTokens();
  }, [refresh, formulaString]);

  const handleAreaClick = () => {
    setRefresh((prevState) => !prevState);
  };

  return (
    <div onClick={handleAreaClick} style = {mathStyle}>
      <BlockMath key={key} math={latexString} classname = 'formula2'/>
    </div>
  );
};

const Worksheet = () => {
  return (
    <div>
      {/* Block LaTeX */}
      <div onClick={() => console.log('Clicked 1')}>
        <Work formulaString="\mathtt{\mu} = \frac{0.00708 [131.2 ft] [1.0 m D] \left([2900.0 psi] - [2320.0 psi]\right)}{[137.5344 stbday] \log{\left(\frac{[1640.0 ft]}{[0.328 ft]} \right)}}" />
        <Work formulaString="\mathtt{\mu} = 0.46" />
      </div>
    </div>
  );
};

export default Worksheet;
