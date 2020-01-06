import React from 'react';
import style from './Button.module.scss';

const Button = props => {
  const classes = [
    style.Button,
    style[props.type]
  ];

  return (
    <button
      onClick={props.onClick}
      className={classes.join(' ')}
      disabled={props.disabled}
    >
      { props.children }
    </button>
  )
};

export default Button;
