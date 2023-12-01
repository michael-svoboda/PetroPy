import React, { useState, useEffect } from 'react';
import CodeEditor from '../components/CodeEditor';
import LatexEditor from '../components/LatexEditor';
import TopBar from '../components/TopBar';
import Row from 'react-bootstrap/Row';
import Formula2 from '../components/Formula2';
import Worksheet from '../components/Worksheet';
import EventEmitter from 'events';

const MainPage = () => {
  const [latexText, setLatexText] = useState('');
  const [inputText, setInputText] = useState('');
  const eventEmitter = new EventEmitter(); // Create a single instance of EventEmitter

  useEffect(() => {
    const handleEnterKeyPress = () => {
      console.log('Enter key pressed!');
      // Add your logic to handle 'Enter' key press
    };

    eventEmitter.on('enterKeyPressed', handleEnterKeyPress);

    return () => {
      eventEmitter.off('enterKeyPressed', handleEnterKeyPress);
    };
  }, [eventEmitter]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleLatexChange = (event) => {
    setLatexText(event.target.value);
  };

  const handleLatexStringChange = (latexString) => {
    setLatexText(latexString);
    console.log('Successfully changed LatexString in MainPage', latexString)
  };

  return (
    <div className="mainPageContainer">
      <div className="leftSide">
        {/* Pass onLatexStringChange to the CodeEditor component */}
        <CodeEditor
          code={inputText}
          onChange={(newCode) => setInputText(newCode)}
          eventEmitter={eventEmitter}
          onLatexStringChange={handleLatexStringChange}
        />
      </div>
      <div className="rightSide">
        <div style={{ height: '100%' }}>
          <Row style={{ height: '20%', flexGrow: 1 }}>
            {/* Pass the latexText state to the Formula2 component */}
            <Formula2 latexString={latexText} /><Formula2 />
          </Row>
          <Row style={{ height: '20%' }}>
            <LatexEditor code={inputText} onChange={(newCode) => setInputText(newCode)} />
          </Row>
          <Row style={{ height: '20%', flexGrow: 1 }}>
            <Worksheet />
          </Row>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
