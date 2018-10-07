import React from 'react';
import PropTypes from 'prop-types';

import Overlay from './Overlay';
import TextField from './TextField';
import SearchCard from './SearchCard';

const Search = (props) => (
  <Overlay
    onClose={props.onClose}
  >
    <div className="search-container">
      <TextField
        label="Search site"
        placeholder="Start typing to see results..."
        value={props.value}
        onChange={props.onSearch}
      />
      <div className="search-results-container">
        {
          props.results.map((result) => (
            <SearchCard
              title={result.attributes.title}
              image={result.attributes.image}
              onClick={props.onSelect(result.id)}
              key={result.id}
              type={result.type}
            />
          ))
        }
      </div>
    </div>
  </Overlay>
);

Search.propTypes = {
  results: PropTypes.array,
  value: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

Search.defaultProps = {
  results: [],
  value: '',
};

export default Search;
