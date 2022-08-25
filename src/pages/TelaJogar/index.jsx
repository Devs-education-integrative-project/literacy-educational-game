import React, { useState } from 'react';
import api from '../../assets/APIs/quiz.json';
import ModalAcerto from '../../components/ModalAcerto';
import ModalErro from '../../components/ModalErro';
import EndGame from '../EndGame'
import './index.css';


const TelaJogar = () => {
  const [disableButtons, setDisableButtons] = React.useState(false);
  const [numberQuiz, setNumberQuiz] = React.useState(0);
  const [modalAcerto, setModalAcerto] = React.useState('hiddenModalAcerto');
  const [modalErro, setModalErro] = React.useState('hiddenModalErro');
  const [score, setScore] = React.useState(100);
  const [show, setShow] = useState(false)

  const showComponent = () => setShow(true)

  function handleClick(e) {
    if (e.target.innerText === api[numberQuiz].answer) {

      e.target.classList.add('btn-green');
      setModalAcerto('');
      setDisableButtons(true);
      setTimeout(() => {
        nextQuestion(e);
      }, 2000);
    } else {

      e.target.classList.add('btn-red');
      setModalErro('');
      setDisableButtons(true);
      setScore(score - 4)
      setTimeout(() => {
        nextQuestion(e);
      }, 2000);
    }


  }

  function nextQuestion(e) {
    if (numberQuiz <= api.length) {
      e.target.classList.remove('btn-green');
      e.target.classList.remove('btn-red');
      setNumberQuiz(numberQuiz + 1);
      setDisableButtons(false);
      setModalAcerto('hiddenModalAcerto');
      setModalErro('hiddenModalErro');
    }
    showComponent(true)
  }

  return (
    <div className="container">
      <span className={modalAcerto}>
        <ModalAcerto />
      </span>
      <span className={modalErro}>
        <ModalErro />
      </span>
      {numberQuiz < 26 ?
        <div className="jogar">
          <h2>PONTUAÇÃO: {score}%</h2>
          <p className="pergunta">{api[numberQuiz].question}</p>
          <img
            src={api[numberQuiz].imagem}
            alt={api[numberQuiz].alt}
            className="image-game"
          />
          <div className="jogar-jogo__btn">
            {api[numberQuiz].btns.map(item => <button disabled={disableButtons}
              className="btn-white"
              key={item}
              onClick={handleClick} >{item}</button>
            )}

          </div>
        </div>
        : <EndGame score={score} />
      }


    </div>

  );
};

export default TelaJogar;
