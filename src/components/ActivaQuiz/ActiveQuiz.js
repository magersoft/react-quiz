import React from 'react';
import AnswersList from './AnswersList/AnswersList';
import style from './ActiveQuiz.module.scss';

const ActiveQuiz = props => (
  <div className={style.ActiveQuiz}>
    <p className={style.Question}>
      <span>
        <strong>{ props.answerNumber }.</strong>&nbsp;
        { props.question }
      </span>
      <small>
        { props.answerNumber } из { props.quizLength }
      </small>
    </p>

    <AnswersList
      state={props.state}
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
    />
  </div>
);

export default ActiveQuiz;
