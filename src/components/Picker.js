import React from 'react';
import '../stylesheets/components/_picker.scss';

const Picker = (props) => {
  const { positionX, positionY } = props.positionPicker;
  const top = positionX - 10;
  const left = positionY - 10;
  return (
    <div
      className="picker"
      style={{ top: `${top}px`, left: `${left}px` }}
    ></div>
  );
};

export default Picker;
