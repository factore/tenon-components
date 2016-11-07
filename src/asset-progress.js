import React from 'react';

module.exports = ({ file }) => {
  return (
    <div className="progress progress--striped progress--is-active">
      <div
        className="progress__bar"
        role="progressbar"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: 0 }}>
        <span className="sr-only"> {file.name} </span>
      </div>
    </div>
  );
};
