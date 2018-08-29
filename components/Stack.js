/* global btoa */

import React from 'react';
import PropTypes from 'prop-types';

import { Markdown, Action } from '../components';

const Stack = (props) => (
  <div className="stack-item">
    <h3>{props.title}</h3>
    <Markdown content={props.content} />
    <p>
      {
        props.list.map((listItem, index) => (
          <a href={listItem.uri} key={btoa(listItem.title + index)}>{listItem.title}; </a>
        ))
      }
    </p>
    {
      props.action &&
        <Action data={props.action} />
    }
  </div>
);

Stack.propTypes = {
  action: PropTypes.object,
  content: PropTypes.string.isRequired,
  list: PropTypes.array,
  title: PropTypes.string.isRequired,
};

Stack.defaultProps = {
  action: null,
  list: [],
};

export default Stack;
