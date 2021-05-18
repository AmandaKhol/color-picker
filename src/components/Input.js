import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div>
        <label htmlFor="form__label">Color selected: </label>
        <input
          className="form__input"
          id="color-input"
          type="text"
          value={this.props.colorInput}
          onChange={this.props.handleColorInput}
          placeholder="Write the color HEX code"
        />
      </div>
    );
  }
}

export default Input;
