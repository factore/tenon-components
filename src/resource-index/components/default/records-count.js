import pluralize from 'pluralize';
import React from 'react';

export default (props) => {
  const { data: { pagination, isFetching }, title } = props;
  const totalEntries = pagination.total_entries || 0;
  let text;

  if (isFetching) {
    text = `Loading ${title}...`;
  } else {
    text = pluralize(title, totalEntries, true);
  }
  return (
    <span className="records-list__count">
      {text}
      {' '}
    </span>
  );
};
