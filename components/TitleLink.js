import React from 'react';
import PropTypes from 'prop-types';

import router from '../utils/router';

const TitleLink = (props) => {
  const handleNavigation = (url) => (e) => {
    e.preventDefault();
    router(url);
  };

  return (
    <h4>
      {
        props.internalUrl ?
          <a
            href={props.internalUrl}
            onClick={handleNavigation(props.internalUrl)}
          >
            {props.label}
          </a> :
          <a href={props.externalUrl}>
            {props.label}
          </a>
      }
    </h4>
  );
};

TitleLink.propTypes = {
  externalUrl: PropTypes.string,
  internalUrl: PropTypes.string,
  label: PropTypes.string.isRequired,
};

TitleLink.defaultProps = {
  externalUrl: '',
  internalUrl: '',
};

export default TitleLink;
