import React from 'react';
import PropTypes from 'prop-types';

import Icons from '../icons';

const Icon = (props) => {
  const SelectedIcon = Icons[props.children] || (() => (<div />));

  return (
    <SelectedIcon />
  );
};

Icon.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Icon;
