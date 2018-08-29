import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { score, hex } from 'wcag-contrast';

const Lozenge = (props) => {
  const canUseWhite = score(hex('#FFF', props.color || '#dadde2')) === 'AAA';
  return (
    <span
      className={cx('lozenge', { white: canUseWhite })}
      style={{ background: props.color || '#dadde2' }}
    >
      {props.label}
    </span>
  );
};

Lozenge.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
};

Lozenge.defaultProps = {
  color: '#dadde2',
};

export default Lozenge;
