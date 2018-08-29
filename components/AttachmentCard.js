import React from 'react';
import PropTypes from 'prop-types';

const AttachmentCard = (props) => (
  <div className="card card-elevation--1 attachment-card">
    <div className="attachment-card-title">
      {props.label}
    </div>
    <div className="attachment-card-preview">
      {
        props.imageUrl &&
          <img src={props.imageUrl} alt={props.label} />
      }
    </div>
    <div className="attachment-card-meta">
      <span>{props.fileSize}</span>
      <div className="spacer" />
      <a href={props.fileUrl} download>Download</a>
    </div>
  </div>
);

AttachmentCard.propTypes = {
  fileSize: PropTypes.string.isRequired,
  fileUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  label: PropTypes.string.isRequired,
};

AttachmentCard.defaultProps = {
  imageUrl: '',
};

export default AttachmentCard;
