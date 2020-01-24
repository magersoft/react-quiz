import React, { Component } from 'react';
import M from 'materialize-css';

export default class Select extends Component {

  componentDidMount() {
    const el = document.querySelector('select');
    M.FormSelect.init(el);
  }

  render() {
    const id = `${this.props.label}-${Math.random()}`;

    return (
      <div className="input-field">
        <select
          id={id}
          value={this.props.value}
          onChange={this.props.onChange}
        >
          { this.props.options.map((option, index) => {
            return (
              <option
                value={option.value}
                key={option.value + index}
              >
                { option.text }
              </option>
            )
          }) }
        </select>
        <label htmlFor={id}>{this.props.label}</label>
      </div>
    )
  }

};
