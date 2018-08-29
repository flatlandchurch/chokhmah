import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Markdown, Action } from '../components';

const ImageStack = (props) => (
  <div className="stack-item image">
    <div className="stack-image">
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
  title: PropTypes.string.isRequired,
};

ImageStack.defaultProps = {
  action: null,
};

export default ImageStack;
