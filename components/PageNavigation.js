import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Link } from '../components';

export default class PageNavigation extends React.Component {
  static propTypes = {
    navActionButton: PropTypes.node,
    navItems: PropTypes.array,
  };

  static defaultProps = {
    navActionButton: null,
    navItems: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleToggleClick = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  handleToggleEnter = (e) => {
    if (e.nativeEvent.key === 'Enter' || e.nativeEvent.key === ' ') {
      e.preventDefault();
      this.setState((prevState) => ({ open: !prevState.open }));
    }
  };

  render() {
    return (
      <div className="card-header">
        <div className="page-navigation">
          <div
            className={cx('page-navigation-toggle', {
              open: this.state.open,
            })}
            aria-pressed={this.state.open}
            tabIndex={0}
            aria-label="expand page navigation"
            role="button"
            onClick={this.handleToggleClick}
            onKeyDown={this.handleToggleEnter}
          >
            <span />
            <span />
          </div>
          <nav className="page-navigation-items">
            {
              this.props.navItems.map((navItem) => (
                <div className="page-navigation-item" key={navItem.label}>
                  <Link
                    data={navItem}
                    href={navItem.internalUrl || navItem.externalUrl}
                    black
                  />
                </div>
              ))
            }
          </nav>
          <div className="spacer" />
          {this.props.navActionButton}
        </div>
        {
          this.state.open &&
            <nav className="page-navigation-menu-mobile">
              {
                this.props.navItems.map((navItem) => (
                  <div className="page-navigation-item" key={navItem.label}>
                    <Link
                      data={navItem}
                      href={navItem.internalUrl || navItem.externalUrl}
                      black
                    />
                  </div>
                ))
              }
            </nav>
        }
      </div>
    );
  }
}
