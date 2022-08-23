import React, { useEffect, useState } from 'react'
import './index.css'
import api from '../../assets/APIs/quiz.json'

let numberQuiz = 0;

const TelaJogar = () => {

  const [disable, setDisable] = React.useState(false);
  const [quiz, setQuiz] = useState([])
  const [correct, setCorrect] = useState()
  console.log()
  useEffect(() => {
    setQuiz(api)
  }, [])

  function handleClick(e) {
    if (e.target.innerText === quiz[numberQuiz].answer) {
      console.log('acertou');
      e.target.classList.add("btn-green");
      setDisable(true);
setTimeout(() => {
  nextQuestion(e)
}, 1000);

    } else {
      console.log('errou');
      e.target.classList.add("btn-red");
      setDisable(true);
      setTimeout(() => {
  nextQuestion(e)
}, 1000);

    }
  }

  function nextQuestion(e) {
    if (numberQuiz <= 26) {
      console.log(e.target);
     e.target.classList.remove("btn-green");
     e.target.classList.remove("btn-red");
      setCorrect(numberQuiz++)
      setDisable(false);
    }

  }
  return (
    <div className="container">

      <div className='jogar'>

        <p className='pergunta'>{api[numberQuiz].question}</p>
        <img src={api[numberQuiz].imagem} alt={api[numberQuiz].alt} className="image-game" />
        <div className='jogar-jogo__btn'>
          <button disabled={disable} className="btn-white" key={1} onClick={handleClick} >{api[numberQuiz].btns[0]}</button>
          <button disabled={disable} className="btn-white" key={2} onClick={handleClick} >{api[numberQuiz].btns[1]}</button>
          <button disabled={disable} className="btn-white" key={3} onClick={handleClick} >{api[numberQuiz].btns[2]}</button>

          <button disabled={disable} className="btn-white" key={4} onClick={handleClick} >{api[numberQuiz].btns[3]}</button>
        </div>
      </div>

    </div >
  )
}


export default TelaJogar;