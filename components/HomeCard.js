import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const HomeCard = (props) => (
  <div className="card card-elevation--1 home-card">
    <LazyLoadImage
      alt={props.title}
      src={props.image}
      effect="blur"
    />
    <div className="home-card-content">
      <p><strong>{props.title}</strong></p>
      <p>{props.description}</p>
    </div>
  </div>
);

HomeCard.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HomeCard;
