import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Button = (props) => (
  <button
    className={cx(props.context, {
      link: props.link,
      block: props.block,
    })}
    tabIndex={0}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.string.isRequired,
  context: PropTypes.oneOf([
    'primary',
    'default',
    'black',
    'subtle',
    'error',
    'warning',
  ]),
  link: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  block: false,
  context: 'default',
  link: false,
  onClick: () => {},
};

export default Button;
