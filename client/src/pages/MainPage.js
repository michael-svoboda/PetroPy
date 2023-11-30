import React, { useState } from 'react';
import CodeEditor from '../components/CodeEditor';
import LatexEditor from '../components/LatexEditor';
import TopBar from '../components/TopBar';
import Row from 'react-bootstrap/Row';
import Formula from '../components/Formula';
import Worksheet from '../components/Worksheet';

const MainPage = () => {
  const [latexText, setLatexText] = useState('');
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleLatexChange = (event) => {
    setLatexText(event.target.value);
  };

  const editorStyle = {
    width: '50%', // Adjust the width as needed
    height: '500px', // Adjust the height as needed
    border: '1px solid #888', // Dark grey border
    borderRadius: '5px',
    padding: '10px',
    fontFamily: 'monospace',
    fontSize: '18px', // Adjust the font size as needed
    margin: '20px 0', // Adjust the margin as needed
    background: '#2b2b2b', // Dark background color
    color: '#abb2bf', // Light text color
  };

  const imageStyle = {
    width: '100%', // Adjust the width as needed
    height: 'auto',
    marginBottom: '20px', // Adjust the margin as needed
  };

  return (
    <div className="mainPageContainer">
      {/* Left side - Code editor taking up half of the screen */}
      <div className="leftSide">
        <CodeEditor code={inputText} onChange={(newCode) => setInputText(newCode)} />
      </div>

      {/* Right side - LaTeX boxes */}
      <div className="rightSide">
        {/* Top right - LaTeX box with dynamic content */}



            

            <div style={{ height: '100%' }}>

              <Row style={{height: '20%', flexGrow: 1}}> 
                  <Formula ></Formula>
              </Row> 
              <Row style={{height: '20%'}}> 
                  <LatexEditor code={inputText} onChange={(newCode) => setInputText(newCode)} />
              </Row> 
              <Row style={{height: '20%', flexGrow: 1}}> 
                  <Worksheet ></Worksheet>
              </Row> 
            </div>


      </div>
    </div>
  );
};

export default MainPage;
