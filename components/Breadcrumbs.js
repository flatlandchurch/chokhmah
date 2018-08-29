import React from 'react';
import PropTypes from 'prop-types';

import { Link } from '../components';

const Breadcrumbs = (props) => (
  <div className="breadcrumbs">
    {
      props.links.map(({ url, label }) => (
        <div className="breadcrumb" key={label}>
          <Link
            data={{
              internalUrl: url,
              label,
            }}
            href={url}
          />
        </div>
      ))
    }
  </div>
);

Breadcrumbs.propTypes = {
  links: PropTypes.array.isRequired,
};

export default Breadcrumbs;
