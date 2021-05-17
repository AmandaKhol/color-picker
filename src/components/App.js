import React, { useState } from 'react';
import '../stylesheets/components/_color-selected.scss';
import '../stylesheets/components/_form.scss';
import '../stylesheets/layout/_main.scss';

const App = () => {
  const [colorSelected, setColorSelected] = useState('#ae3f');

  const handleChangeColor = () => {};
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
          value={colorSelected}
          onChange={handleChangeColor}
          placeholder="Write the color HEX code"
        />
      </form>
      <div
        className="div__color--selected"
        style={{ backgroundColor: colorSelected }}
      >
        The color div {colorSelected}
      </div>
    </main>
  );
};

export default App;
