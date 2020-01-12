import React from 'react';
import style from './Input.module.scss';

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched;
}

const Input = props => {
  const inputType = props.type || 'text';
  const classes = [style.Input];
  const id = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    classes.push(style.invalid);
  }

  return (
    <div className={classes.join(' ')}>
      <label htmlFor={id}>{ props.label }</label>
      <input
        id={id}
        type={inputType}
        value={props.value}
        onChange={props.onChange}
      />
      { isInvalid(props) ? <span>{props.errorMessage || 'Введите верное значение'}</span> : null }
    </div>
  )
};

export default Input;
