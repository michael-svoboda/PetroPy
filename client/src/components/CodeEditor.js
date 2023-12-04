import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-python';
import './CodeEditorTheme.css';
import EventEmitter from 'events';
import Formula2 from'./Formula2';

const CodeEditor = ({ code, onChange, eventEmitter, onLatexStringChange }) => {
   const editorStyle = {
    width: '95%', // Adjust the width as needed
    height: '95%', // Adjust the height as needed
    border: '1px solid #888', // Dark grey border
    borderRadius: '2px',
    padding: '10px',
    fontFamily: 'monospace',
    fontSize: '22px', // Adjust the font size as needed
    margin: '10px 0', // Adjust the margin as needed
    background: 'rgba(43, 43, 43, 0.8)',
    color: '#abb2bf', // Light text color
  };

  const [editorInstance, setEditorInstance] = useState(null);
  //const[latexString, setLatexString] = useState('test');

  useEffect(() => {
    const handleChange = (delta) => {
      if (delta.action === 'insert') {
        //console.log('Insert action detected!');
        console.log(editorInstance.getValue());
        // Check if the inserted text includes the 'Enter' key press
          const insertedText = delta.lines.join('\n');
          if (insertedText.includes('\n')) {
            console.log('Enter key pressed!');
            sendContentToBackend(editorInstance.getValue());

            // Additional logic for handling 'Enter' key press
          }
        
        // Additional logic for handling 'insert' action
      }
    };

    const handleSelectionChange = (e) => {
      //console.log('Selection changed:', e);
      // Additional logic for handling selection changes
    };

    const handleCursorChange = (e) => {
      //console.log('Cursor changed:', e);
      // Additional logic for handling cursor changes
    };

    if (editorInstance) {
      // Listen for content changes
      editorInstance.session.on('change', handleChange);

      // Listen for selection changes
      editorInstance.session.selection.on('changeSelection', handleSelectionChange);

      // Listen for cursor changes
      editorInstance.session.selection.on('changeCursor', handleCursorChange);

      // Clean up the event listeners when the component unmounts
      return () => {
        editorInstance.session.off('change', handleChange);
        editorInstance.session.selection.off('changeSelection', handleSelectionChange);
        editorInstance.session.selection.off('changeCursor', handleCursorChange);
        

      };
    }
  }, [editorInstance]);

  const handleLoad = (editor) => {
    // Set the editor instance
    setEditorInstance(editor);
  };

  const sendContentToBackend = (content) => {
    // Replace this with your logic to send the content to the backend
    console.log('Sending content to backend:', content);
  
    // Example using fetch API:
    fetch('http://localhost:5000/task/user_input', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),  // Pass content as JSON in the request body
    })
      .then(response => response.json())
      .then(data =>{
        console.log(data)
        const latexString = data.latex_string;
        console.log('Value: ', data.latex_string)
        console.log('Type: ', typeof data.latex_string)
        onLatexStringChange(latexString);
        console.log('New string: ', latexString)
      })
      .catch(error => console.error('Error sending content to backend:', error));
  };
  


  return (
    <div style={editorStyle}>
      <AceEditor
        mode="python"
        theme="monokai"
        fontSize={20}
        width="100%"
        height="100%"
        value={code}
        onChange={onChange}
        id="codeEditor"
        onLoad={handleLoad}
        style={{ backgroundColor: 'rgba(25, 25, 25, 0.18)' }} // Adjust the values for your desired transparency
        setOptions={{ // Additional options for Ace Editor
          showGutter: false,
          showPrintMargin: false,
        }}
      />
    </div>
  );
};

export default CodeEditor;
