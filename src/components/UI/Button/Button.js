import React from 'react';

const Button = props => {
  const classes = [
    'waves-effect waves-light btn'
  ];

  if (props.type === 'primary') {
    classes.push('light-blue');
  }

  if (props.type === 'success') {
    classes.push('green');
  }

  if (props.flat) {
    classes.push('btn-flat')
  }

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
