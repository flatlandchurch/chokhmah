/* global btoa */

import React from 'react';
import PropTypes from 'prop-types';

import { Link } from '../components';

const Menu = (props) => (
  <React.Fragment>
    <nav className="menu menu-mobile">
      {props.mobileNavButtons}
      {
        Object.keys(props.menuItems).map((key) => (
          <React.Fragment key={key}>
            {
              Boolean(props.menuItems[key].length) &&
              <div className="menu-section" key={key}>
                {
                  key !== '_' &&
                    <h6>{`${key[0].toUpperCase()}${key.slice(1)}`}</h6>
                }
                {
                  props.menuItems[key].map((menuItem, index) => (
                    <div className="menu-item" key={btoa(menuItem.uri + index)}>
                      <Link
                        data={{
                          internalUrl: menuItem.uri,
                          label: menuItem.label,
                        }}
                        href={menuItem.uri}
                        onClick={props.onClick}
                      />
                    </div>
                  ))
                }
              </div>
            }
          </React.Fragment>
        ))
      }
    </nav>
    <nav className="menu menu-desktop">
      {
        Object.keys(props.menuItems)
          .filter((key) => key !== '_')
          .map((key) => (
            <div className="menu-column" key={key}>
              <h6>{`${key[0].toUpperCase()}${key.slice(1)}`}</h6>
              {
                props.menuItems[key].map((menuItem, index) => (
                  <div className="menu-item" key={btoa(menuItem.uri + index)}>
                    <Link
                      data={{
                        internalUrl: menuItem.uri,
                        label: menuItem.label,
                      }}
                      href={menuItem.uri}
                      onClick={props.onClick}
                    />
                  </div>
                ))
              }
            </div>
          ))
      }
    </nav>
  </React.Fragment>
);

Menu.propTypes = {
  menuItems: PropTypes.object.isRequired,
  mobileNavButtons: PropTypes.node,
  onClick: PropTypes.func,
};

Menu.defaultProps = {
  mobileNavButtons: null,
  onClick: () => {},
};

export default Menu;
