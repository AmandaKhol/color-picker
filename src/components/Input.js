import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/components/_color-input.scss';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    let color = ev.target.value;
    if (!color.includes('#', 0)) {
      color = '#' + color;
    }
    this.props.handleColorInput(color);
  }

  render() {
    return (
      <div className="color__input">
        <label htmlFor="color__input--label">Color selected: </label>
        <input
          className="color__input--input"
          id="color-input"
          type="text"
          value={this.props.colorInput}
          onChange={this.handleChange}
          placeholder="Write the color HEX code"
        />
      </div>
    );
  }
}

export default Input;

Input.propTypes = {
  colorInput: PropTypes.string,
  handleColorInput: PropTypes.func,
};
