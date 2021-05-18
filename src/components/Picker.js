import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/components/_picker.scss';
import { heightCanvas } from '../utils/constants';

const Picker = (props) => {
  const { positionX, positionY } = props.positionPicker;
  const top = positionX - 10;
  const left = positionY - 10;
  let borderColor = 'black';

  if (top > heightCanvas / 2) {
    borderColor = 'white';
  }
  return (
    <div
      className="picker"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        border: `2px solid ${borderColor}`,
      }}
    ></div>
  );
};

export default Picker;

Picker.propTypes = {
  positionPicker: PropTypes.shape({
    positionX: PropTypes.string,
    positionY: PropTypes.string,
  }),
};
