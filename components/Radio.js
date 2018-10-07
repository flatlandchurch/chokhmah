import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

import { FormField } from '../components';

export default class Radio extends React.Component {
  static propTypes = {
    group: PropTypes.bool,
    groupHeader: PropTypes.string,
    inputs: PropTypes.array,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    selected: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    group: false,
    groupHeader: '',
    label: '',
    inputs: [],
    selected: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
    };
  }

  render() {
    const RadioInput = ({
      id,
      label,
      value,
      onChange,
      checked,
    }) => (
      <div className="radio-control">
        <input
          type="radio"
          id={id || this.state.id}
          name={this.props.name}
          tabIndex={0}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        <label htmlFor={id || this.state.id}>
          {label || this.props.label}
        </label>
      </div>
    );

    return (
      <FormField>
        {
          this.props.group &&
            <p className="form-field-group-header">{this.props.groupHeader}</p>
        }
        {
          this.props.group ?
            this.props.inputs.map((input) => (
              <RadioInput
                label={input.label}
                id={input.id}
                key={input.id}
                tabIndex={0}
                value={input.value}
                onChange={this.props.onChange}
                checked={this.props.selected === input.id}
              />
            )) :
            <RadioInput />
        }
      </FormField>
    );
  }
}
