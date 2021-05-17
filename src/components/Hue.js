import React, { useEffect, useRef } from 'react';
import rgbToHex from '../services/rgbToHex';

const Hue = (props) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d');

    let gradient = canvas
      .getContext('2d')
      .createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#ff0000');
    gradient.addColorStop(1 / 6, '#ffff00');
    gradient.addColorStop((1 / 6) * 2, '#00ff00');
    gradient.addColorStop((1 / 6) * 3, '#00ffff');
    gradient.addColorStop((1 / 6) * 4, '#0000ff');
    gradient.addColorStop((1 / 6) * 5, '#ff00ff');
    gradient.addColorStop(1, '#ff0000');
    canvas.getContext('2d').fillStyle = gradient;
    canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);

    gradient = canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    canvas.getContext('2d').fillStyle = gradient;
    canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);
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
    console.log({ pixel });
    props.handleColorHue(hex);
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
