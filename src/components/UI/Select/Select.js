import React from 'react';
import style from './Select.module.scss';

const Select = props => {
  const id = `${props.label}-${Math.random()}`;

  return (
    <div className={style.Select}>
      <label htmlFor={id}>{props.label}</label>
      <select
        id={id}
        value={props.value}
        onChange={props.onChange}
      >
        { props.options.map((option, index) => {
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
    </div>
  )
};

export default Select;
