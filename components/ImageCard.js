import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Lozenge } from '../components';

const ImageCard = (props) => (
  <div className="card card-elevation--1 image-card">
    <div className={cx('image-wrapper', { video: props.video })}>
      <LazyLoadImage
        alt={props.alt}
        src={props.image}
        effect="blur"
      />
    </div>
    <div className="spacer" />
    <div className="image-card-details">
      <h4>{props.title}</h4>
      <div className="image-card-meta">
        {
          props.tag &&
          <Lozenge
            label={props.tag}
            color={props.tagColor}
          />
        }
        {
          props.metaDetails &&
          <span className="image-card-meta-details">{props.metaDetails}</span>
        }
      </div>
      {
        props.children &&
        <div className="image-card-footer">
          {props.children}
        </div>
      }
    </div>
  </div>
);

ImageCard.propTypes = {
  alt: PropTypes.string.isRequired,
  children: PropTypes.node,
  image: PropTypes.string.isRequired,
  metaDetails: PropTypes.string,
  tag: PropTypes.string,
  tagColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  video: PropTypes.bool,
};

ImageCard.defaultProps = {
  children: null,
  metaDetails: '',
  tag: '',
  tagColor: '',
  video: false,
};

export default ImageCard;
