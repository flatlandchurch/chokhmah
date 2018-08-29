import React from 'react';
import PropTypes from 'prop-types';

import {
  TextField,
  Lozenge,
} from '../components';

export default class MultiSelect extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedFields: [],
      fields: props.options,
      cardOpen: false,
      value: '',
    };
  }

  handleKeyDown = (option) => (e) => {
    const { key } = e.nativeEvent;

    if (key === 'Enter' || key === ' ') {
      e.preventDefault();
      this.handleSelection(option)();
    }

    if (key === 'Escape') {
      this.setState({ cardOpen: false });
    }
  };

  handleSelection = (option) => () => {
    this.setState((prevState) => ({
      fields: prevState.fields.filter((field) => field.id !== option.id),
      selectedFields: [...prevState.selectedFields, option],
      value: '',
      cardOpen: false,
    }));
  };

  handleTyping = (value) => {
    if (value && value !== this.state.value) {
      this.setState((prevState) => ({
        cardOpen: true,
        fields: prevState.fields
          .filter((field) => field.label.includes(value)),
        value,
      }));
    } else {
      this.setState((prevState) => ({
        cardOpen: true,
        fields: this.props.options
          .filter((field) => !prevState.selectedFields
            .find((selected) => selected.id === field.id)),
        value,
      }));
    }
  };

  openCard = () => {
    this.setState({ cardOpen: true });
  };

  removeTag = (id) => () => {
    this.setState((prevState) => ({
      cardOpen: false,
      selectedFields: prevState.selectedFields.filter((field) => field.id !== id),
    }), () => {
      this.setState((prevState) => ({
        fields: this.props.options
          .filter((field) => !prevState.selectedFields
            .find((selected) => selected.id === field.id)),
      }));
    });
  };

  render() {
    return (
      <React.Fragment>
        <TextField
          label={this.props.label}
          helpText="Start typing to filter options"
          onClick={this.openCard}
          onChange={this.handleTyping}
          value={this.state.value}
          onKeyDown={this.handleKeyDown()}
        />

        {
          this.state.cardOpen &&
          <div className="card card-elevation--1 select-card">
            {
              this.state.fields.map((option) => (
                <div
                  className="select-item"
                  role="button"
                  tabIndex={0}
                  onKeyDown={this.handleKeyDown(option)}
                  onClick={this.handleSelection(option)}
                  key={option.id}
                >
                  {option.label}
                </div>
              ))
            }
          </div>
        }
        {
          this.state.selectedFields.map((field) => (
            <Lozenge
              label={field.label}
              removable
              onRemove={this.removeTag(field.id)}
              key={field.id}
            />
          ))
        }
      </React.Fragment>
    );
  }
}
