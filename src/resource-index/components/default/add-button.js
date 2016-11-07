import React from 'react';

export default (props) => {
  return (
    <a className="fab fab--bottom-right" href={props.newPath}>
      <i className="material-icon">add</i>
    </a>
  );
};
