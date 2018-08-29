import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import router from '../utils/router';

const handleNavigation = (url, cb) => (e) => {
  e.preventDefault();
  router(url);
  cb();
};

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
        <a
          href={props.data.internalUrl}
          onClick={handleNavigation(props.data.internalUrl, props.onClick)}
          className={cx('link', {
            black: props.black,
          })}
        >
          {props.data.label}
        </a>
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
