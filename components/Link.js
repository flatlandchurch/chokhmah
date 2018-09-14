import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link as RouterLink } from 'react-router-dom';

const Link = (props) => (
  <React.Fragment>
    {
      props.data.externalUrl ?
        <a
          href={props.data.externalUrl}
          className={cx({
            black: props.black,
            cta: props.cta,
            link: !props.cta,
          })}
        >
          {props.data.label}
        </a> :
        <RouterLink
          to={props.data.internalUrl}
          className={cx({
            black: props.black,
            cta: props.cta,
            link: !props.cta,
          })}
          onClick={props.onClick}
        >
          {props.data.label}
        </RouterLink>
    }
  </React.Fragment>
);

Link.propTypes = {
  black: PropTypes.bool,
  cta: PropTypes.bool,
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

Link.defaultProps = {
  black: false,
  cta: false,
  onClick: () => {},
};

export default Link;
