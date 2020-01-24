import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './QuizList.module.scss';
import { connect } from 'react-redux';
import { fetchQuizes, removeQuiz } from '../../store/actions/quiz';

class QuizList extends Component {

  renderQuizes() {
    return this.props.quizes.map(quiz => {
      return (
        <li key={quiz.id} className="collection-item">
          <div>
            <NavLink to={'/quiz/' + quiz.id}>
              { quiz.name }
            </NavLink>&nbsp;
            <small>({ quiz.author })</small>
            <div className={'secondary-content ' + style.actions}>
              { this.props.login === quiz.author ?
                <i
                  className="material-icons red-text darken-2"
                  style={{cursor: 'pointer'}}
                  onClick={() => this.removeHandler(quiz.id)}
                >
                  delete
                </i> : null
              }
              <NavLink to={'/quiz/' + quiz.id}>
                <i className="material-icons">send</i>
              </NavLink>
            </div>
          </div>
        </li>
      )
    })
  }

  componentDidMount() {
    this.props.fetchQuizes();
  }

  removeHandler(id) {
    this.props.removeQuiz(id);
  }

  render() {
    let emptyContent;
    if (!this.props.quizes.length) {
      emptyContent = <h3 style={{textAlign: 'center'}}>Ничего не найдено</h3>
    }

    return (
      <div className={style.QuizList}>
        <div>
          <h1>Список вопросов</h1>
            { emptyContent }
            <ul className="collection">
            {
              this.props.loading && !this.props.quizes.length ?
              <li className="collection-item">
                <div className="progress">
                  <div className="indeterminate"></div>
                </div>
              </li>
                : this.renderQuizes()
            }
            </ul>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading,
    login: state.auth.login
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizes: () => dispatch(fetchQuizes()),
    removeQuiz: id => dispatch(removeQuiz(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
