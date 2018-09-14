import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SearchCard = (props) => (
  <div
    className="card card-elevation--1 search-card"
    onClick={props.onClick}
    onKeyDown={(e) => { if (e.nativeEvent.key === 'Enter') { props.onClick(); } }}
    tabIndex={0}
    role="button"
  >
    <div className="card-image">
      <LazyLoadImage
        alt={props.title}
        src={props.image}
        effect="blur"
      />
    </div>
    <p>{props.title}</p>
  </div>
);

SearchCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchCard;
