import React, { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
import './Formula.css';
import { BlockMath } from 'react-katex';

const Formula = ({latexString}) => {
  const [tokens, setTokens] = useState([]);
  const [key, setKey] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [latexEditString, setLatexEditString] = useState('');

  const mathStyle = {
    fontSize: '32px',
    color: 'white',
    // Add other styles as needed
  };

  const generateTokens = () => {
   
    const formulaString = latexString;
    const cleanFormulaString = formulaString.replace(/[{}\\]/g, '');
    const tokenizedFormula = cleanFormulaString.split(' ');

    let tokenIndex = 0;
    let currentTokensString = '';

    const intervalId = setInterval(() => {
      if (tokenIndex < tokenizedFormula.length) {
        const newToken = tokenizedFormula[tokenIndex];
        const modifiedToken = newToken.replace(/mathtt|log|frac|left|right|[{()}]/g, '');
        const tokenWithParentheses = `(${modifiedToken})`;

        setTokens((prevTokens) => [...prevTokens, tokenWithParentheses]);
        currentTokensString += tokenWithParentheses + ' ';
        setKey((prevKey) => prevKey + 1);

        if (tokenIndex === 0) {
          setLatexEditString(tokenWithParentheses);
        } else {
            setLatexEditString((prevLatexString) => {
                let newLatexString = prevLatexString + tokenWithParentheses;
            
                if (tokenIndex > 7) {
                  const oldIndex = tokenIndex - 8;
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
        setLatexEditString(formulaString);

        // Clear tokens after 5 seconds
        setTimeout(() => {
          setTokens([]);
        }, 10);
      }
    }, 110);

    return () => clearInterval(intervalId);
  };

  useEffect(() => {
     if (typeof latexString === undefined){
      latexEditString = '';
    } else {
      setLatexEditString(latexString)
    }
  }, [latexString]);

  const handleAreaClick = () => {
    setRefresh((prevState) => !prevState);
  };

  return (
    <div onClick={handleAreaClick} style = {mathStyle}>
      <BlockMath key={key} math={latexString} classname = 'formula1' />
    </div>
  );
};

export default Formula;
