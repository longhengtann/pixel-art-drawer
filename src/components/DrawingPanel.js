import React, { useEffect, useRef, useState } from 'react';
import Row from './Row';

const DrawingPanel = ({ width, height, selectedColor }) => {
  const panelRef = useRef();
  const rows = [];
  const [exportButtonComponent, setExportButtonComponent] = useState();

  useEffect(async () => {
    const { exportComponentAsPNG } = await import('react-component-export-image');

    setExportButtonComponent(
      <button type='button' onClick={() => exportComponentAsPNG(panelRef)} className='button'>
        Export as PNG
      </button>
    );
  }, []);

  for (let i = 0; i < height; i += 1) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }

  return (
    <div id='drawingPanel'>
      <div id='pixels' ref={panelRef}>
        {rows}
      </div>
      {exportButtonComponent}
    </div>
  );
};

export default DrawingPanel;
