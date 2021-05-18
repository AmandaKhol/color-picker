import React, { useEffect, useRef } from 'react';
import Picker from './Picker';
import '../stylesheets/components/_canvas.scss';
import pickerDetector from '../services/pickerDetector';
import gradientCanvasGenerator from '../services/gradientCanvas';

const height = 100;
const width = 300;

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    gradientCanvasGenerator(canvasRef, props.color);
  });

  const handleColorSelected = (event) => {
    const pickerData = pickerDetector(canvasRef, event);
    props.handleColorPicker(
      pickerData.colorHex,
      pickerData.positionY,
      pickerData.positionX
    );
  };

  return (
    <div className="color-panel">
      <Picker positionPicker={props.positionPicker}></Picker>
      <canvas
        className="canvas"
        ref={canvasRef}
        width={String(width)}
        height={String(height)}
        onClick={handleColorSelected}
      ></canvas>
    </div>
  );
};

export default Canvas;
