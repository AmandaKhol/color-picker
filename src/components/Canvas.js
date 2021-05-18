import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Picker from './Picker';
import '../stylesheets/components/_canvas.scss';
import pickerDetector from '../services/pickerDetector';
import gradientCanvasGenerator from '../services/gradientCanvas';
import { heightCanvas, widthCanvas } from '../utils/constants';

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    gradientCanvasGenerator(canvasRef, props.color);
  }, [props.color]);

  const handleColorSelected = (event) => {
    const pickerData = pickerDetector(canvasRef, event);
    props.handleColorPicker(
      pickerData.colorHex,
      pickerData.positionY,
      pickerData.positionX
    );
  };

  return (
    <div className="color__panel">
      <Picker positionPicker={props.positionPicker}></Picker>
      <canvas
        className="color__panel--canvas"
        ref={canvasRef}
        width={String(widthCanvas)}
        height={String(heightCanvas)}
        onClick={handleColorSelected}
      ></canvas>
    </div>
  );
};

export default Canvas;

Canvas.propTypes = {
  color: PropTypes.string,
  positionPicker: PropTypes.shape({
    positionX: PropTypes.string,
    positionY: PropTypes.string,
  }),
  handleColorPicker: PropTypes.func,
};
