import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { score, hex } from 'wcag-contrast';

const handleKeyDown = (cb) => (e) => {
  const { key } = e.nativeEvent;
  if (key === 'Enter' || key === ' ') {
    e.preventDefault();
    cb(e);
  }
};

const Lozenge = (props) => {
  const canUseWhite = score(hex('#FFF', props.color || '#dadde2')) === 'AAA';
  return (
    props.removable ?
      <span
        className={cx('lozenge', { white: canUseWhite, removable: props.removable })}
        style={{ background: props.color || '#dadde2' }}
        onClick={props.onRemove}
        onKeyDown={handleKeyDown(props.onRemove)}
        role="button"
        tabIndex={0}
      >
        {props.label}
      </span> :
      <span
        className={cx('lozenge', { white: canUseWhite, removable: props.removable })}
        style={{ background: props.color || '#dadde2' }}
      >
        {props.label}
      </span>
  );
};

Lozenge.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  removable: PropTypes.bool,
  onRemove: PropTypes.func,
};

Lozenge.defaultProps = {
  color: '#dadde2',
  removable: false,
  onRemove: null,
};

export default Lozenge;
