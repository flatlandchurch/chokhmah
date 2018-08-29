import React from 'react';
import PropTypes from 'prop-types';

import { AttachmentCard } from '../components';

const PageAttachments = (props) => (
  <div className="page-attachments">
    <h4>{props.label || 'Downloads'}</h4>
    <div className="page-attachment-container">
      {
        props.attachments.map((attachment) => (
          <AttachmentCard
            label={attachment.label}
            fileUrl={attachment.fileUrl}
            fileSize={attachment.fileSize}
            imageUrl={attachment.imageUrl || ''}
            key={attachment.label}
          />
        ))
      }
    </div>
  </div>
);

PageAttachments.propTypes = {
  attachments: PropTypes.array.isRequired,
  label: PropTypes.string,
};

PageAttachments.defaultProps = {
  label: '',
};

export default PageAttachments;
