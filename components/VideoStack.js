import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Markdown, Action } from '../components';

const VideoStack = (props) => (
  <div className={cx('stack-item video')}>
    <div className="stack-content">
      <h3>{props.title}</h3>
      <div className="video-stack-container">
        {
          props.videoType === 'vimeo' ?
            <iframe
              src={`https://player.vimeo.com/video/${props.videoId}`}
              width="640"
              height="360"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              title={props.title}
            /> :
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${props.videoId}?rel=0&amp;showinfo=0`}
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen
              title={props.title}
            />
        }
      </div>
      <Markdown content={props.content} />
      {
        props.action &&
        <Action data={props.action} />
      }
    </div>
  </div>
);

VideoStack.propTypes = {
  action: PropTypes.object,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  videoType: PropTypes.string.isRequired,
};

VideoStack.defaultProps = {
  action: null,
};

export default VideoStack;
