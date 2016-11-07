import React from 'react';
import classNames from 'classnames';
import ErrorMessages from './resource-index/components/default/error-messages';

module.exports = (props) => {
  const { label, type, errors } = props;
  const errorClassNames = classNames({
    'input-block__field-with-errors': errors
  });

  return (
    <div className="input-block">
      <label className="input-block__label">{label}</label>

      <div className={errorClassNames}>
        <input
          className="input-block__text-field"
          type={type || 'text'}
          { ...props } />

        <ErrorMessages errors={errors} />
      </div>
    </div>
  );
};
