import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './QuizList.module.scss';
import { connect } from 'react-redux';
import { fetchQuizes } from '../../store/actions/quiz';

class QuizList extends Component {

  renderQuizes() {
    return this.props.quizes.map(quiz => {
      return (
        <li key={quiz.id} className="collection-item">
          <div>
            { quiz.name } - <small>({ quiz.author })</small>
            <NavLink to={'/quiz/' + quiz.id} className="secondary-content">
              <i className="material-icons">send</i>
            </NavLink>
          </div>
        </li>
      )
    })
  }

  componentDidMount() {
    this.props.fetchQuizes();
  }

  render() {
    return (
      <div className={style.QuizList}>
        <div>
          <h1>Список вопросов</h1>

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
    loading: state.quiz.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizes: () => dispatch(fetchQuizes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
