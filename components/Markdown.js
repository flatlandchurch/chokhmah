import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: true,
  xhtml: false,
});

const Markdown = (props) => (
  // eslint-disable-next-line react/no-danger
  <div dangerouslySetInnerHTML={{ __html: marked(props.content) }} />
);

Markdown.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Markdown;
