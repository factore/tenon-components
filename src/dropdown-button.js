import React from 'react';

module.exports = (props) => {
  const className = props.className || 'dropdown-button';

  return (
    <button onClick={(e) => props.onClick(e)} className={className}>
      {props.children}
    </button>
  );
};
