import React, { useEffect, useState } from 'react';
import './index.css';
import api from '../../assets/APIs/quiz.json';
import ModalAcerto from '../../components/ModalAcerto';
import ModalErro from '../../components/ModalErro';

// let numberQuiz = 0;

const TelaJogar = () => {
  const [disableButtons, setDisableButtons] = React.useState(false);
  const [numberQuiz, setNumberQuiz] = React.useState(0);
  const [modalAcerto, setModalAcerto] = React.useState('hiddenModalAcerto');
  const [modalErro, setModalErro] = React.useState('hiddenModalErro');
  const [score, setScore] = React.useState(100);
  // console.log(score);

  
  // useEffect(() => {
  //   setQuiz(api);
  // }, []);

  function handleClick(e) {
    if (e.target.innerText === api[numberQuiz].answer) {
      // console.log('acertou');
      e.target.classList.add('btn-green');
      setModalAcerto('');
      setDisableButtons(true);
      setTimeout(() => {
        nextQuestion(e);
      }, 2000);
    } else {
      // console.log('errou');
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
    if (numberQuiz <= 26) {
      e.target.classList.remove('btn-green');
      e.target.classList.remove('btn-red');
      setNumberQuiz(numberQuiz +1);
      setDisableButtons(false);
      setModalAcerto('hiddenModalAcerto');
      setModalErro('hiddenModalErro');
    }
  }
  return (
    <div className="container">
      <span className={modalAcerto}>
        <ModalAcerto />
      </span>
      <span className={modalErro}>
        <ModalErro />
      </span>
      <div className="jogar">
      <h2>PONTUAÇÃO: {score}%</h2>
        <p className="pergunta">{api[numberQuiz].question}</p>
        <img
          src={api[numberQuiz].imagem}
          alt={api[numberQuiz].alt}
          className="image-game"
        />
        <div className="jogar-jogo__btn">
          <button
            disabled={disableButtons}
            className="btn-white"
            key={1}
            onClick={handleClick}
          >
            {api[numberQuiz].btns[0]}
          </button>
          <button
            disabled={disableButtons}
            className="btn-white"
            key={2}
            onClick={handleClick}
          >
            {api[numberQuiz].btns[1]}
          </button>
          <button
            disabled={disableButtons}
            className="btn-white"
            key={3}
            onClick={handleClick}
          >
            {api[numberQuiz].btns[2]}
          </button>

          <button
            disabled={disableButtons}
            className="btn-white"
            key={4}
            onClick={handleClick}
          >
            {api[numberQuiz].btns[3]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TelaJogar;
