/* global Tenon */
import React from 'react';
import classNames from 'classnames';

Tenon.RI.ItemVersionRecord = ({ record }) => {
  const className = classNames({
    'record': true,
    'record--flat': true
  });

  return (
    <div className={className}>
      <div className="record__details">
        <div className="record__title">
          {record.title}
        </div>

        <div className="record__title record__title--smallest">
          Created by {record.user_email}
          <br/>
          {record.formatted_date}
        </div>
      </div>

      <div className="record__actions">
        <a href={record.load_version_path} className="action-text">
          Load
        </a>
      </div>
    </div>
  );
};
