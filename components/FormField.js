import React from 'react';
import PropTypes from 'prop-types';

const FormField = (props) => (
  <div className="form-field">{props.children}</div>
);

FormField.propTypes = {
  children: PropTypes.any.isRequired,
};

export default FormField;
