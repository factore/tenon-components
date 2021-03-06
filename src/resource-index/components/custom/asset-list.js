import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default (props) => {
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
