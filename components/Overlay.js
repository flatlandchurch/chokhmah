/* global window, document */
import React from 'react';
import PropTypes from 'prop-types';

class Overlay extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    onClose: () => {},
  };

  componentWillMount() {
    window.addEventListener('keydown', this.handleKeydown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      document.body.style.overflow = 'inherit';
      this.props.onClose();
    }
  };

  render() {
    return (<div className="overlay">{this.props.children}</div>);
  }
}

export default Overlay;
