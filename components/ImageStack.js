import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import cx from 'classnames';

import { Markdown, Action } from '../components';

const ImageStack = (props) => (
  <div className={cx('stack-item image', { square: props.square })}>
    <div className={cx('stack-image')}>
      <LazyLoadImage
        alt={props.title}
        src={props.image}
        effect="blur"
      />
    </div>
    <div className="stack-content">
      <h3>{props.title}</h3>
      <Markdown content={props.content} />
      {
        props.action &&
          <Action data={props.action} />
      }
    </div>
  </div>
);

ImageStack.propTypes = {
  action: PropTypes.object,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  square: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

ImageStack.defaultProps = {
  action: null,
  square: false,
};

export default ImageStack;
