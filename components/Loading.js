import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Loading = (props) => {
  const hideLoadingBar = () => {
    setTimeout(() => {
      props.onComplete();
    }, 500);
  };

  if (props.complete === true) {
    hideLoadingBar();
  }

  return (
    <div className="loading-bar-container">
      <div
        className={cx('loading-bar', {
          complete: props.complete,
        })}
      />
    </div>
  );
};

Loading.propTypes = {
  complete: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default Loading;
