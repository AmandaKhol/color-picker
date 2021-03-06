import React, { useState } from 'react';
import '../stylesheets/components/_color-picker.scss';
import '../stylesheets/layout/_main.scss';
import { widthCanvas } from '../utils/constants';
import Canvas from './Canvas';
import Hue from './Hue';
import Input from './Input';

const App = () => {
  const [colorSelected, setColorSelected] = useState('#ff0000');
  const [colorInput, setColorInput] = useState('#ff0000');
  const [colorStartGradient, setColorStartGradient] = useState('#ff0000');
  const [positionPicker, setPositionPicker] = useState({
    positionX: '0',
    positionY: '' + widthCanvas,
  });

  const handleColorHue = (color) => {
    setColorInput(color);
    setColorSelected(color);
    setColorStartGradient(color);
    setPositionPicker({
      positionX: '0',
      positionY: '' + widthCanvas,
    });
  };

  const handleColorInput = (color) => {
    setColorInput(color);
    setColorStartGradient(color);
    setColorSelected(color);
    setPositionPicker({
      positionX: '0',
      positionY: '' + widthCanvas,
    });
  };
  const handleColorPicker = (color, x, y) => {
    setColorSelected(color);
    setColorInput(color);
    setPositionPicker({
      positionX: '' + x,
      positionY: '' + y,
    });
  };

  return (
    <main className="main">
      <h1 className="title">Color picker</h1>
      <h3 className="title__h3">
        Please, select your color using the picker on the canvas or write the
        HEX code
      </h3>
      <Input
        colorInput={colorInput}
        handleColorInput={handleColorInput}
      ></Input>

      <Hue handleColorHue={handleColorHue}></Hue>

      <section className="color__picker">
        <div
          className="color__picker--selected"
          style={{ backgroundColor: colorSelected }}
        ></div>
        <Canvas
          color={colorStartGradient}
          handleColorPicker={handleColorPicker}
          positionPicker={positionPicker}
        ></Canvas>
      </section>
    </main>
  );
};

export default App;
