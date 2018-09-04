import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import cx from 'classnames';

import FormField from './FormField';

export default class TextField extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    helpText: PropTypes.string,
    initialValue: PropTypes.string,
    label: PropTypes.string.isRequired,
    noResize: PropTypes.bool,
    required: PropTypes.bool,
    rows: PropTypes.number,
    textarea: PropTypes.bool,
    type: PropTypes.oneOf([
      'text',
      'email',
      'password',
    ]),
    validationIcon: PropTypes.node,
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    helpText: '',
    initialValue: '',
    required: false,
    noResize: false,
    rows: 3,
    textarea: false,
    type: 'text',
    value: '',
    validationIcon: null,
    onBlur: () => {},
    onChange: () => {},
    onClick: () => {},
    onKeyDown: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      value: props.initialValue,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ value: props.value });
  }

  handleTextChange = (e) => {
    const { value } = e.target;
    this.setState({ value });
    this.props.onChange(value, e);
  };

  handleFieldBlur = (e) => {
    this.props.onBlur(this.state.value, e);
  };

  render() {
    return (
      <FormField>
        <label
          htmlFor={this.state.id}
          className={cx({ required: this.props.required })}
        >
          {this.props.label}
        </label>
        {
          this.props.textarea ?
            <textarea
              id={this.state.id}
              onChange={this.handleTextChange}
              disabled={this.props.disabled}
              value={this.state.value}
              rows={this.props.rows}
              className={cx({
                disabled: this.props.disabled,
                'no-resize': this.props.noResize,
              })}
              onClick={this.props.onClick}
            /> :
            <input
              id={this.state.id}
              value={this.state.value}
              disabled={this.props.disabled}
              onChange={this.handleTextChange}
              onBlur={this.handleFieldBlur}
              className={cx({
                disabled: this.props.disabled,
              })}
              onClick={this.props.onClick}
              onKeyDown={this.props.onKeyDown}
              type={this.props.type}
            />
        }
        {
          this.props.helpText &&
            <span className="helptext">{this.props.helpText}</span>
        }
        {
          // this works in my brain conceptually
          // the idea is that if I can pass in a component
          // that has the Icon and the click handling, I don't
          // have to worry about inline dialogs here
          this.props.validationIcon &&
            <div className="form-field-validation">
              {this.props.validationIcon}
            </div>
        }
      </FormField>
    );
  }
}
