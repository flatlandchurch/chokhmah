import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Lozenge from './Lozenge';

const label = (value) => {
  switch (value) {
    case 'sermon_search': return 'Sermon';
    case 'event_search': return 'Event';
    case 'series_search': return 'Series';
    case 'blog_search': return 'Blog';
    case 'page_search': return 'Page';
    default: return '';
  }
};

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
    <div className="card-content">
      <p>{props.title}</p>
      <Lozenge label={label(props.type)} />
    </div>
  </div>
);

SearchCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchCard;
