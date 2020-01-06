import React from 'react';
import style from './AnswerItem.module.scss';

const AnswerItem = props => {
  const classes = [style.AnswerItem];

  if (props.state) {
      classes.push(style[props.state]);
  }

  return (
    <li className={classes.join(' ')} onClick={() => props.onAnswerClick(props.answer.id)}>
      { props.answer.text }
    </li>
  )
};

export default AnswerItem;
