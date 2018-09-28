import React from 'react';
import PropTypes from 'prop-types';

import { Link } from '../components';

const Action = (props) => {
  const hasSecondaryUrl = props.data.secondaryExternalUrl || props.data.secondaryInternalUrl;
  return (
    <div className="action-container">
      {
        hasSecondaryUrl ?
          <React.Fragment>
            <Link
              href={props.data.internalUrl || props.data.externalUrl}
              data={props.data}
              cta
              black={props.black}
            />
            <Link
              href={props.data.secondaryInternalUrl || props.data.secondaryExternalUrl}
              data={{
                internalUrl: props.data.secondaryInternalUrl,
                externalUrl: props.data.secondaryExternalUrl,
                label: props.data.secondaryLabel,
              }}
            />
          </React.Fragment> :
          <Link
            href={props.data.internalUrl || props.data.externalUrl}
            data={props.data}
            cta
            black={props.black}
          />
      }
    </div>
  );
};

Action.propTypes = {
  black: PropTypes.bool,
  data: PropTypes.object.isRequired,
};

Action.defaultProps = {
  black: true,
};

export default Action;
