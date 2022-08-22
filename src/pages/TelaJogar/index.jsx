import React from 'react'
import './index.css'
import api from '../../assets/APIs/quiz.json'
import { getActiveElement, getValue } from '@testing-library/user-event/dist/utils';
import ModalAcerto from '../../components/ModalAcerto';

let numberQuiz = 0;
const TelaJogar = () => {
    
    
    function handleClick(e){

      if(e.target.innerText===api[numberQuiz].answer){
        console.log('acertou');
        e.target.className="btn-green";
        
      }else{
        console.log('errou');
        e.target.className="btn-red"
    }


  }
  return (
    <div className="container">
      <div className='jogar'>
      <p className='pergunta'>{api[numberQuiz].question}</p>
      <img src={api[numberQuiz].imagem} alt={api[numberQuiz].alt} className="image-game" />
      <div className='jogar-jogo__btn' >
        <button className="btn-white" key={1} onClick={handleClick} >{api[numberQuiz].btns[0]}</button>
        <button className="btn-white" key={2} onClick={handleClick} >{api[numberQuiz].btns[1]}</button>
        <button className="btn-white" key={3} onClick={handleClick} >{api[numberQuiz].btns[2]}</button>
        <button className="btn-white" key={4} onClick={handleClick} >{api[numberQuiz].btns[3]}</button>
      </div>
      </div>
    </div>
  )
}


export default TelaJogar;