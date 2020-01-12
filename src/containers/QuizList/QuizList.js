import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from '../../axios/axios-quiz';
import Loader from '../../components/UI/Loader/Loader';
import style from './QuizList.module.scss';

export default class QuizList extends Component {

  state = {
    quizes: [],
    loading: true,
  };

  renderQuizes() {
    return this.state.quizes.map(quiz => {
      return (
        <li key={quiz.id}>
          <NavLink to={'/quiz/' + quiz.id}>
            { quiz.name }
          </NavLink>
        </li>
      )
    })
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('quizes.json');
      const quizes = [];
      Object.keys(data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `${index + 1}. ${data[key].name}`
        })
      });

      this.setState({
        quizes, loading: false
      })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    return (
      <div className={style.QuizList}>
        <div>
          <h1>Список вопросов</h1>

          {
            this.state.loading
              ? <Loader/>
              : <ul>
                  { this.renderQuizes() }
                </ul>
          }

        </div>
      </div>
    )
  }
}
