import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import cx from 'classnames';
import random from 'lodash-es/random';

import { Markdown } from '../components';

class Carousel extends React.Component {
  static propTypes = {
    contents: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    const startingIndex = random(0, this.props.contents.length);

    this.state = {
      currentIndex: startingIndex,
    };
  }

  incrementIndex = (incr) => () => {
    this.setState((prevState) => ({ currentIndex: prevState.currentIndex + incr }));
  };

  render() {
    const content = this.props.contents[this.state.currentIndex];

    return (
      <div
        className={cx(
          'stack-item image',
          'carousel',
        )}
      >
        <div className={cx('stack-image')}>
          <LazyLoadImage
            alt={content.title}
            src={content.image}
            effect="blur"
          />
          <div className="toggle-buttons">
            {
              this.state.currentIndex > 0 &&
              <i
                className="material-icons arrows"
                role="button"
                onClick={this.incrementIndex(-1)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    this.incrementIndex(-1)();
                  }
                }}
                tabIndex={0}
              >
                keyboard_arrow_left
              </i>
            }
            <div className="spacer" />
            {
              this.state.currentIndex < this.props.contents.length - 1 &&
              <i
                className="material-icons arrows"
                role="button"
                onClick={this.incrementIndex(1)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    this.incrementIndex(1)();
                  }
                }}
                tabIndex={0}
              >
                keyboard_arrow_right
              </i>
            }
          </div>
        </div>
        <div className="stack-content">
          <h3>{content.title}</h3>
          <Markdown content={content.content} />
        </div>
      </div>
    );
  }
}

export default Carousel;
