import React, { useEffect, useRef } from 'react';
import pickerDetector from '../services/pickerDetector';
import hueCanvasGenerator from '../services/hueCanvas';

const Hue = (props) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    hueCanvasGenerator(canvasRef);
  });

  const handleColorSelected = (event) => {
    const pickerData = pickerDetector(canvasRef, event);
    props.handleColorHue(pickerData.colorHex);
  };
  return (
    <canvas
      className="hue"
      ref={canvasRef}
      height="30px"
      width="300px"
      onClick={handleColorSelected}
    ></canvas>
  );
};

export default Hue;
