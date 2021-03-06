/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Icon = () => (
  <svg version="1.1" viewBox="0 0 279.083 51.333" id="logo">
    <g id="logo-name">
      <rect x="53.333" fill="none" width="248" height="51.333" />
      <g enableBackground="new">
        <path
          fill="#808080"
          d="M64.283,22.703h10.366v7.299H64.283V51.1h-8.03V0.001h21.242v7.3H64.283V22.703z"
        />
        <path
          fill="#808080"
          d="M81.365,0.001h8.03v43.798h13.212V51.1H81.365V0.001z"
        />
        <path
          fill="#808080"
          d="M132.099,51.1h-8.103l-1.387-9.271h-9.854l-1.387,9.271h-7.373l8.176-51.099h11.752L132.099,51.1z M113.776,34.895h7.738l-3.869-25.842L113.776,34.895z"
        />
        <path
          fill="#808080"
          d="M133.486,0.001h24.819v7.3h-8.395V51.1h-8.029V7.301h-8.395V0.001z"
        />
        <path
          fill="#808080"
          d="M161.809,0.001h8.029v43.798h13.213V51.1h-21.242V0.001z"
        />
        <path
          fill="#808080"
          d="M212.542,51.1h-8.103l-1.387-9.271h-9.855l-1.387,9.271h-7.373l8.176-51.099h11.753L212.542,51.1z M194.22,34.895h7.737l-3.869-25.842L194.22,34.895z"
        />
        <path
          fill="#808080"
          d="M223.42,14.09V51.1h-7.228V0.001h10.074l8.249,30.585V0.001h7.153V51.1h-8.249L223.42,14.09z"
        />
        <path
          fill="#808080"
          d="M247.436,0.001h12.701c8.03,0,11.973,4.453,11.973,12.629v25.841c0,8.176-3.942,12.629-11.973,12.629 h-12.701V0.001z M255.465,7.301v36.499h4.526c2.555,0,4.088-1.312,4.088-4.963V12.265c0-3.649-1.533-4.964-4.088-4.964H255.465z"
        />
      </g>
    </g>
    <g id="logo-glyph">
      <rect fill="#808080" width="51.499" height="16.333" />
      <rect y="17.5" fill="#808080" width="51.499" height="16.333" />
      <rect y="35" fill="#808080" width="16.332" height="16.332" />
      <rect x="17.583" y="35" fill="#ACC35B" width="33.916" height="16.332" />
    </g>
  </svg>
);

const Logo = (props) => (
  <React.Fragment>
    {
      props.link ?
        <Link
          to={props.homeUrl || '/'}
          href={props.homeUrl || '/'}
        >
          <Icon />
        </Link> :
        <a href={props.homeUrl || '/'}>
          <Icon />
        </a>
    }
  </React.Fragment>
);

Logo.propTypes = {
  homeUrl: PropTypes.string.isRequired,
  link: PropTypes.bool,
};

Logo.defaultProps = {
  link: false,
};

export default Logo;
