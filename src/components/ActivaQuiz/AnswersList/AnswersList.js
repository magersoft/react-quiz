import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';
import style from './AnswersList.module.scss';

const AnswersList = props => (
  <ul className={style.AnswersList}>
    { props.answers.map((answer, index) => {
      return (
        <AnswerItem
          answer={answer}
          key={index}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[answer.id] : null}
        />
      )
    }) }
  </ul>
);

export default AnswersList;
