import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../assets/APIs/quiz.json';
import ModalAcerto from '../../components/ModalAcerto';
import ModalErro from '../../components/ModalErro';
import EndGame from '../EndGame'
import './quiz.css';


const Quiz = () => {
if(localStorage.getItem('CURRENT__QUIZ') === undefined || localStorage.getItem('CURRENT__QUIZ') === null ){
  localStorage.setItem('CURRENT__QUIZ', 25);
  localStorage.setItem('SCORE', 100);
  
}

  const [disableButtons, setDisableButtons] = React.useState(false);
  const [numberQuiz, setNumberQuiz] = React.useState(Number(localStorage.getItem('CURRENT__QUIZ')));
  const [modalAcerto, setModalAcerto] = React.useState('hiddenModalAcerto');
  const [modalErro, setModalErro] = React.useState('hiddenModalErro');
  const [score, setScore] = React.useState(Number(localStorage.getItem('SCORE')));
  const [show, setShow] = useState(false)

  const showComponent = () => setShow(true)

  function saveGameProgress() {
    localStorage.setItem('CURRENT__QUIZ', numberQuiz)
    localStorage.setItem('SCORE', score)
  }
  saveGameProgress();


  function handleClick(e) {
    setNumberQuiz(localStorage.getItem('CURRENT__QUIZ'))

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
      <span style={{zIndex:"1"}} className={modalAcerto}>
        <ModalAcerto />
      </span>
      <span style={{zIndex:"1"}} className={modalErro}>
        <ModalErro />
      </span>
      
      {numberQuiz < api.length ?
        <div className="jogar" style={{position:"relative"}}>
          <Link to={'/'}><button  style={{position:"absolute", top:0, right:0}}>sair do jogo</button></Link>
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

export default Quiz;
