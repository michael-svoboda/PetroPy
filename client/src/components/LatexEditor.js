import React, { useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-javascript';
import './CodeEditorTheme.css'; // Import your CSS file for styling

const LatexEditor = ({ codeL, onChangeL, workSheetTextChange, latexString }) => {
  const editorStyle = {
    width: '95%',
    height: '75%',
    border: '1px solid #888',
    borderRadius: '2px',
    padding: '10px',
    fontFamily: 'monospace',
    fontSize: '22px',
    margin: '10px 0',
    background: '#2b2b2b',
    color: '#abb2bf',
  };

  const [aceEditorInstance, setAceEditorInstance] = React.useState(null);

  useEffect(() => {
    const handleChange = (delta) => {

      if (delta.action === 'insert') {
        //console.log('Inserting text...');
        const newText = aceEditorInstance.getValue();
        if (newText.includes('\n')) {
          //console.log('Enter key pressed!')
          //console.log('TEXT: ', aceEditorInstance.getValue())
          if (newText.includes('insert')) {
            console.log('Insert action with the phrase "insert" detected!');
            console.log('Worksheet Latex String: ', latexString)
            // Call your workSheetTextChange function here
            workSheetTextChange(latexString);
          }
      }
      }
    };

    if (aceEditorInstance) {
      aceEditorInstance.session.on('change', handleChange);

      return () => {
        aceEditorInstance.session.off('change', handleChange);
      };
    }
  }, [aceEditorInstance, latexString, workSheetTextChange]);

  const handleLoad = (editor) => {
    setAceEditorInstance(editor);
  };

  const insertF2Worksheet = () => {
    // Your logic for inserting into the F2 worksheet goes here
    console.log('Inserting into F2 worksheet...');
  };

  

  return (
    <div style={editorStyle}>
      <AceEditor
        mode="python"
        theme="monokai"
        fontSize={20}
        width="100%"
        height="100%"
        value={codeL}
        onChange={onChangeL}
        style={{ backgroundColor: 'rgba(25, 25, 25, 0.18)' }}
        setOptions={{
          showGutter: false,
          showPrintMargin: false,
        }}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default LatexEditor;
