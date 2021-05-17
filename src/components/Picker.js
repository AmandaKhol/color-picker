import React from 'react';
import '../stylesheets/components/_picker.scss';

const positionTop = '10';
const positionLeft = '0';

const Picker = () => {
  return (
    <div
      className="picker"
      style={{ top: `${positionTop}px`, left: `${positionLeft}px` }}
    ></div>
  );
};

export default Picker;
