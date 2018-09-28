import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import cx from 'classnames';

import Action from './Action';

const Jumbotron = (props) => (
  <div
    className={cx('jumbotron-container', {
      'no-bg': !props.image,
    })}
  >
    {
      props.image &&
        <div className="jumbotron-image">
          <LazyLoadImage
            src={props.image}
            alt={props.title}
            effect="opacity"
          />
        </div>
    }
    <div className="jumbotron-meta">
      <h1
        className={cx('page-title', {
          white: props.image,
        })}
      >
        {props.title}
      </h1>
      {
        props.byline &&
          <p className="byline">{props.byline}</p>
      }
      {
        Boolean(Object.keys(props.action).length) &&
          <Action data={props.action} black={false} />
      }
    </div>
  </div>
);

Jumbotron.propTypes = {
  action: PropTypes.object,
  byline: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Jumbotron.defaultProps = {
  action: {},
  byline: '',
  image: '',
};

export default Jumbotron;
