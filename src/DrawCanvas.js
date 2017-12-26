import React from 'react';
import './DrawCanvas.css'

const nodeCount = [];
for (var i=0; i < 576; i++) {
  nodeCount.push(<div className='node'></div>);
}

const DrawCanvas = () => {
  return (<div className='canvas'>{ nodeCount }</div>);
};

export default DrawCanvas;
