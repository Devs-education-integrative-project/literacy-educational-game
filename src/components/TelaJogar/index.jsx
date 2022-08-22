import React from 'react'
import './index.css'
import api from '../../assets/APIs/quiz.json'

let numberQuiz = 0;
const TelaJogar = () => {
  function handleClick(e){
    if(e===api[numberQuiz].answer){
      console.log('acertou');

    }else{
      console.log('errou');
    }
  }
  return (
    <div className="container">
      <div className='jogar'>
      <p className='pergunta'>{api[numberQuiz].question}</p>
      <img src={api[numberQuiz].imagem} alt={api[numberQuiz].alt} className="image-game" />
      <div className='jogar-jogo__btn' >
        <button className='btns-quiz' key={1} onClick={()=>handleClick(api[numberQuiz].btns[0])} >{api[numberQuiz].btns[0]}</button>
        <button className='btns-quiz' key={2} onClick={()=>handleClick(api[numberQuiz].btns[1])} >{api[numberQuiz].btns[1]}</button>
        <button className='btns-quiz' key={3} onClick={()=>handleClick(api[numberQuiz].btns[2])} >{api[numberQuiz].btns[2]}</button>
        <button className='btns-quiz' key={4} onClick={()=>handleClick(api[numberQuiz].btns[3])} >{api[numberQuiz].btns[3]}</button>
      </div>
      </div>
    </div>
  )
}


export default TelaJogar;