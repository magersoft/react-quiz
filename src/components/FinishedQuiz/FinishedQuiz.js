import React from 'react';
import Button from '../UI/Button/Button';
import style from './FinishedQuiz.module.scss'

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }
    return total;
  }, 0);

  return (
    <div className={style.FinishedQuiz}>
      <ul>
        { props.quiz.map((item, index) => {
          const classes = [
            'fa',
            props.results[item.id] === 'error' ? 'fa-times' : 'fa-check',
            style[props.results[item.id]]
          ];

          return (
            <li
              key={index}
            >
              <strong>{ index + 1 }</strong>.&nbsp;
              { item.question }
              <i className={classes.join(' ')} />
            </li>
          )
        }) }
      </ul>

      <p>Правильно { successCount } из { props.quiz.length }</p>

      <div>
        <Button onClick={props.onRetry} type="primary">Повторить</Button>
        <Button type="success">Перейти в список тестов</Button>
      </div>
    </div>
  )
};

export default FinishedQuiz;
