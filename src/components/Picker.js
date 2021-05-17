import React from 'react';
import '../stylesheets/components/_picker.scss';

const Picker = (props) => {
  const top = props.top - 10;
  const left = props.left - 10;
  return (
    <div
      className="picker"
      style={{ top: `${top}px`, left: `${left}px` }}
    ></div>
  );
};

export default Picker;
