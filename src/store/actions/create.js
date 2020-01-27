import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from './actionTypes';
import axios from '../../axios/axios-quiz';
import Message from '../../utils/Message';

export function createQuizQuestion(item) {
  return {
    type: CREATE_QUIZ_QUESTION,
    item
  }
}

export function resetQuizCreation() {
  return {
    type: RESET_QUIZ_CREATION
  }
}

export function finishCreateQuiz(name, author) {
  return async (dispatch, getState) => {
    await axios.post('/quizes.json', {
      name, author, items: getState().create.quiz
    });
    dispatch(resetQuizCreation());
    const m = new Message('Тест успешно создан', 'success');
    m.call();
  }
}
