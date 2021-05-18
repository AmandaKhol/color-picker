import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import pickerDetector from '../services/pickerDetector';
import hueCanvasGenerator from '../services/hueCanvas';
import { heightHue, widthHue } from '../utils/constants';

const Hue = (props) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    hueCanvasGenerator(canvasRef);
  }, []);

  const handleColorSelected = (event) => {
    const pickerData = pickerDetector(canvasRef, event);
    props.handleColorHue(pickerData.colorHex);
  };
  return (
    <canvas
      className="hue"
      ref={canvasRef}
      height={'' + heightHue}
      width={'' + widthHue}
      onClick={handleColorSelected}
    ></canvas>
  );
};

export default Hue;

Hue.propTypes = {
  handleColorHue: PropTypes.func,
};
