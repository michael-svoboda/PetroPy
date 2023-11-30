import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/mode-python';
import './CodeEditorTheme.css'; // Import your CSS file for styling

const CodeEditor = ({ code, onChange }) => {
  const editorStyle = {
    width: '97%', // Adjust the width as needed
    height: '95%', // Adjust the height as needed
    border: '1px solid #888', // Dark grey border
    borderRadius: '2px',
    padding: '10px',
    fontFamily: 'monospace',
    fontSize: '22px', // Adjust the font size as needed
    margin: '10px 0', // Adjust the margin as needed
    background: '#2b2b2b', // Dark background color
    color: '#abb2bf', // Light text color
  };

  return (
    <div style={editorStyle}> {/* Wrap the AceEditor with a div for applying styles */}
      <AceEditor
        mode="python"
        theme="monokai"
        fontSize={18}
        width="100%"
        height="100%"
        value={code}
        onChange={onChange}
      />
    </div>
  );
};

export default CodeEditor;
