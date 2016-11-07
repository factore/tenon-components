import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

Tenon.RI.AssetList = (props) => {
  const { Record, LoadMoreButton }  = props.childComponents;
  const { deleteRecord, updateRecord, toggleExpandedRecord } = props.handlers;
  const { records, isFetching, query } = props.data;
  const { updateQuery } = props.actions;
  const { expandedRecordIds } = props.ui;
  let output;

  if (records.length === 0 && !isFetching) {
    output = <li>No {props.title.toLowerCase()} found.</li>;
  } else {
    output = records.map((record) => {
      return (
        <Record
          { ...props }
          record={record}
          key={record.id}
          isExpanded={expandedRecordIds.indexOf(record.id) !== -1}
          onDelete={(e) => deleteRecord(e, record)}
          onUpdate={(e, payload) => updateRecord(e, record, payload)}
          onToggleExpand={(e) => toggleExpandedRecord(e, record)} />
      );
    });
  }

  return (
    <div className="record-list">
      <div className="asset-search-field">
        <input
          type="text"
          value={query.q || ''}
          onChange={(e) => updateQuery({ q: e.target.value, page: 1 })}
          placeholder="Search" />
      </div>

      <ul>
        <ReactCSSTransitionGroup
          transitionName="fade-"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}>
          {output}
        </ReactCSSTransitionGroup>

      </ul>

      <div className="spacer"></div>

      <LoadMoreButton { ...props } />
    </div>
  );
};
