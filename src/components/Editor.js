import React, { useState } from 'react';
import { CompactPicker } from 'react-color';
import DrawingPanel from './DrawingPanel';

const Editor = () => {
  const [panelWidht, setPanelWidth] = useState(16);
  const [panelHeight, setpanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(false);
  const [buttonText, setButtonText] = useState('Start Drawing');
  const [selectedColor, setSelectedColor] = useState('#f44336');

  const initializeDrawingPanel = () => {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    if (buttonText === 'Start Drawing') setButtonText('Reset');
    else setButtonText('Start Drawing');
  };

  const onChangeColor = (color) => {
    setSelectedColor(color.hex);
  };

  return (
    <div id='editor'>
      <h1>Pixel Editor</h1>
      {!hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
      {!hideDrawingPanel && (
        <div id='options'>
          <div className='option'>
            <input
              type='number'
              className='panelInput'
              defaultValue={panelWidht}
              onChange={(e) => setPanelWidth(e.target.value)}
            />
            <span>Width</span>
          </div>
          <div className='option'>
            <input
              type='number'
              className='panelInput'
              defaultValue={panelHeight}
              onChange={(e) => setpanelHeight(e.target.value)}
            />
            <span>Height</span>
          </div>
        </div>
      )}

      <button type='button' className='button' onClick={initializeDrawingPanel}>
        {buttonText}
      </button>

      {hideOptions && (
        <div className='mb-4'>
          <CompactPicker color={selectedColor} onChangeComplete={onChangeColor} />
        </div>
      )}

      {hideOptions && (
        <DrawingPanel width={panelWidht} height={panelHeight} selectedColor={selectedColor} />
      )}
    </div>
  );
};

export default Editor;
