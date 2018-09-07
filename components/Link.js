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
          className={cx('link', {
            black: props.black,
          })}
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
};

Link.defaultProps = {
  black: false,
  cta: false,
};

export default Link;
