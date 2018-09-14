import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from './Logo';

const Header = (props) => (
  <header>
    <div className="header-logo">
      <Logo homeUrl={props.homeUrl} link={props.logoUseLink} />
    </div>
    <div className="subtitle">{props.subtitle}</div>
    <div className="spacer" />
    <nav>
      {
        props.navItems.map((navItem, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="header-nav-item" key={`${navItem.uri}-${idx}`}>
            {
              props.navUseLink ?
                <Link
                  to={navItem.uri}
                  href={navItem.uri}
                >
                  {navItem.label}
                </Link> :
                <a href={navItem.uri}>
                  {navItem.label}
                </a>
            }
          </div>
        ))
      }
    </nav>
    {
      props.rightButtons.map((button) => (button))
    }
  </header>
);

Header.propTypes = {
  homeUrl: PropTypes.string,
  logoUseLink: PropTypes.bool,
  navItems: PropTypes.array,
  navUseLink: PropTypes.bool,
  rightButtons: PropTypes.array,
  subtitle: PropTypes.string,
};

Header.defaultProps = {
  homeUrl: '',
  logoUseLink: false,
  navItems: [],
  navUseLink: false,
  rightButtons: [],
  subtitle: '',
};

export default Header;
