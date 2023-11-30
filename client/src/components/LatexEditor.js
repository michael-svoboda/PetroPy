import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-javascript';
import './CodeEditorTheme.css'; // Import your CSS file for styling

const LatexEditor = ({ codeL, onChangeL }) => {
  const editorStyle = {
    width: '95%', // Adjust the width as needed
    height: '75%', // Adjust the height as needed
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
        mode="javascript"
        theme="monokai"
        fontSize={20}
        width="100%"
        height="100%"
        value={codeL}
        onChange={onChangeL}
      />
    </div>
  );
};

export default LatexEditor;
