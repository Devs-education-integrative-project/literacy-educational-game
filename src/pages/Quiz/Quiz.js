import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../assets/services/APIs/quiz.json';
import ModalAcerto from '../../Components/ModalRight/ModalRight';
import ModalErro from '../../Components/ModalWrong/ModalWrong';
import EndGame from '../EndGame/EndGame';
import './quiz.css';

const Quiz = () => {
  localStorage.setItem('hiddenBtnContinue',JSON.stringify({display: "flex"}))
  if (
    localStorage.getItem('CURRENT__QUIZ') === undefined ||
    localStorage.getItem('CURRENT__QUIZ') === null
  ) {
    localStorage.setItem('CURRENT__QUIZ', 25);
    localStorage.setItem('SCORE', 100);
  }

  const [disableButtons, setDisableButtons] = React.useState(false);
  const [numberQuiz, setNumberQuiz] = React.useState(
    Number(localStorage.getItem('CURRENT__QUIZ')),
  );
  const [modalAcerto, setModalAcerto] = React.useState('hidden-modal-right');
  const [modalErro, setModalErro] = React.useState('hidden-modal-wrong');
  const [score, setScore] = React.useState(
    Number(localStorage.getItem('SCORE')),
  );

  function saveGameProgress() {
    localStorage.setItem('CURRENT__QUIZ', numberQuiz);
    localStorage.setItem('SCORE', score);
  }
  saveGameProgress();

  function handleClickButtonQuiz(e) {
    if (e.target.innerText === api[numberQuiz].answer) {
      e.target.classList.add('btn-quiz-green');
      setModalAcerto('');
      setDisableButtons(true);
      setTimeout(() => {
        nextQuestion(e);
      }, 2000);
    } else {
      e.target.classList.add('btn-quiz-red');
      setModalErro('');
      setDisableButtons(true);
      setScore(score - 4);
      setTimeout(() => {
        nextQuestion(e);
      }, 2000);
    }
  }

  function nextQuestion(e) {
    if (numberQuiz <= api.length) {
      e.target.classList.remove('btn-quiz-green');
      e.target.classList.remove('btn-quiz-red');
      setNumberQuiz(numberQuiz + 1);
      setDisableButtons(false);
      setModalAcerto('hidden-modal-right ');
      setModalErro('hidden-modal-wrong');
    }
  }

  return (
    <div className="container-quiz">
      <span style={{ zIndex: '1' }} className={modalAcerto}>
        <ModalAcerto />
      </span>
      <span style={{ zIndex: '1' }} className={modalErro}>
        <ModalErro />
      </span>

      {numberQuiz < api.length ? (
        <div className="background-content-quiz">
          <Link to={'/'}>
            <button className="btn-exit-quiz">X</button>
          </Link>
          <span className='quiz-remaining'>{numberQuiz+1}/{api.length}</span>
          <h2>PONTUAÇÃO: {score}%</h2>
          <p className="question-quiz">{api[numberQuiz].question}</p>
          <img
            className="image-quiz"
            src={api[numberQuiz].imagem}
            alt={api[numberQuiz].alt}
          />
          <div className="group-btn-quiz">
            {api[numberQuiz].btns.map((letter) => (
              <button
                disabled={disableButtons}
                className="btn-quiz-white"
                key={letter}
                onClick={handleClickButtonQuiz}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <EndGame score={score} />
      )}
    </div>
  );
};

export default Quiz;
