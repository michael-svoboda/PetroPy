import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-python';
import './CodeEditorTheme.css';
import EventEmitter from 'events';

const CodeEditor = ({ code, onChange, eventEmitter }) => {
  const editorStyle = {
    // Your existing style object
  };

  const [editorInstance, setEditorInstance] = useState(null);

  useEffect(() => {
    const handleChange = (delta) => {
      if (delta.action === 'insert') {
        //console.log('Insert action detected!');
        //console.log(editorInstance.getValue());
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
      .then(data => console.log('Backend response:', data))
      .catch(error => console.error('Error sending content to backend:', error));
  };
  


  return (
    <div style={editorStyle}>
      <AceEditor
        mode="python"
        theme="monokai"
        fontSize={18}
        width="100%"
        height="500px"
        value={code}
        onChange={onChange}
        id="codeEditor"
        onLoad={handleLoad}
      />
    </div>
  );
};

export default CodeEditor;
