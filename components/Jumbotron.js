import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import cx from 'classnames';

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
    </div>
  </div>
);

Jumbotron.propTypes = {
  byline: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Jumbotron.defaultProps = {
  byline: '',
  image: '',
};

export default Jumbotron;
