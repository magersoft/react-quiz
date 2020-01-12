import React, { Component } from 'react';
import style from './QuizList.module.scss';
import { NavLink } from 'react-router-dom';

export default class QuizList extends Component {

  renderQuizes() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={'/quiz/' + quiz}>
            Test {quiz}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    return (
      <div className={style.QuizList}>
        <div>
          <h1>QuizList</h1>

          <ul>
            { this.renderQuizes() }
          </ul>
        </div>
      </div>
    )
  }
}
