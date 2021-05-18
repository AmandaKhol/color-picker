import React, { useState } from 'react';
import '../stylesheets/components/_color-selected.scss';
import '../stylesheets/components/_form.scss';
import '../stylesheets/layout/_main.scss';
import Canvas from './Canvas';
import Hue from './Hue';
import Input from './Input';

const App = () => {
  const [colorSelected, setColorSelected] = useState('#ff0000');
  const [colorInput, setColorInput] = useState('#ff0000');
  const [colorStartGradient, setColorStartGradient] = useState('#ff0000');
  const [positionPicker, setPositionPicker] = useState({
    positionX: '0',
    positionY: '300',
  });

  const handleColorHue = (color) => {
    setColorInput(color);
    setColorSelected(color);
    setColorStartGradient(color);
    setPositionPicker({
      positionX: '0',
      positionY: '300',
    });
  };

  const handleColorInput = (ev) => {
    setColorInput(ev.target.value);
    setColorStartGradient(ev.target.value);
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
      <h1>Color picker</h1>
      <p>Please, select your color using the canvas or write the HEX code</p>
      <Input
        colorInput={colorInput}
        handleColorInput={handleColorInput}
      ></Input>
      <div
        className="div__color--selected"
        style={{ backgroundColor: colorSelected }}
      >
        {colorInput}
      </div>
      <Hue handleColorHue={handleColorHue}></Hue>
      <Canvas
        color={colorStartGradient}
        handleColorPicker={handleColorPicker}
        positionPicker={positionPicker}
      ></Canvas>
    </main>
  );
};

export default App;
