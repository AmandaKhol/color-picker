import React, { useEffect, useRef } from 'react';
import '../stylesheets/components/_canvas.scss';
import Picker from './Picker';
import rgbToHex from '../services/rgbToHex';

const height = 100;
const width = 300;

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = props.color;
    context.fillRect(0, 0, width, height);

    //create gradient
    const grd = context.createLinearGradient(0, 0, width, 0);
    grd.addColorStop(0, `rgba(255, 255, 255, 1)`);
    grd.addColorStop(1, `rgba(255, 255, 255, 0)`);

    // Fill with gradient
    context.fillStyle = grd;
    context.fillRect(0, 0, width, height);

    const grd2 = context.createLinearGradient(0, 0, 0, height);
    grd2.addColorStop(0, `rgba(0, 0, 0, 0)`);
    grd2.addColorStop(1, `rgba(0, 0, 0, 1)`);

    context.fillStyle = grd2;
    context.fillRect(0, 0, width, height);
  });

  const handleColorSelected = (event) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log('x: ' + x + ' y: ' + y);
    const pixel = context.getImageData(x, y, 1, 1);

    const data = pixel.data;
    /*  const rgba =
      'rgba(' +
      data[0] +
      ', ' +
      data[1] +
      ', ' +
      data[2] +
      ', ' +
      data[3] / 255 +
      ')'; */
    const hex =
      '#' + ('000000' + rgbToHex(data[0], data[1], data[2])).slice(-6);
    console.log(event.clientX);
    props.handleColorPicker(hex, String(y), String(x));
  };

  return (
    <div className="color-panel">
      <Picker
        top={props.positionPicker[0]}
        left={props.positionPicker[1]}
      ></Picker>
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
