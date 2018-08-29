import React from 'react';
import PropTypes from 'prop-types';

const PageCard = (props) => (
  <div className="card card-elevation--1 page-card">
    {props.children}
  </div>
);

PageCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageCard;
