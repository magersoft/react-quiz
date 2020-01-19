import React from 'react';
import M from 'materialize-css';
import style from './Input.module.scss';

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched;
}

const Input = props => {
  const inputType = props.type || 'text';
  const classes = [style.Input, 'input-field'];
  const id = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    classes.push(style.invalid);
  }

  M.updateTextFields();

  return (
    <div className={classes.join(' ')}>
      <input id={id}
             type={inputType}
             value={props.value}
             onChange={props.onChange}
      />
        <label htmlFor={id}>{ props.label }</label>
        { isInvalid(props) ? <span>{props.errorMessage || 'Введите верное значение'}</span> : null }
    </div>
  )
};

export default Input;
