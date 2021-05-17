import React, { useState } from 'react';
import '../stylesheets/components/_color-selected.scss';
import '../stylesheets/components/_form.scss';
import '../stylesheets/layout/_main.scss';
import Canvas from './Canvas';
import Hue from './Hue';

const App = () => {
  const [colorSelected, setColorSelected] = useState('#ff0000');
  const [colorInput, setColorInput] = useState('#ff0000');
  const [colorStartGradient, setColorStartGradient] = useState('#ff0000');
  const [positionPicker, setPositionPicker] = useState(['0', '300']);

  const handleColorHue = (color) => {
    setColorInput(color);
    setColorSelected(color);
    setColorStartGradient(color);
    setPositionPicker(['0', '300']);
  };

  const handleColorInput = (ev) => {
    setColorInput(ev.target.value);
    setColorStartGradient(ev.target.value);
  };
  const handleColorPicker = (color, x, y) => {
    setColorSelected(color);
    setColorInput(color);
    setPositionPicker([x, y]);
  };
  return (
    <main className="main">
      <h1>Color picker</h1>
      <p>Please, select your color or write the HEX code</p>
      <form className="form" action="">
        <label htmlFor="form__label">Color selected: </label>
        <input
          className="form__input"
          id="color-input"
          type="text"
          value={colorInput}
          onChange={handleColorInput}
          placeholder="Write the color HEX code"
        />
      </form>
      <div
        className="div__color--selected"
        style={{ backgroundColor: colorSelected }}
      >
        The color div {colorInput}
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
