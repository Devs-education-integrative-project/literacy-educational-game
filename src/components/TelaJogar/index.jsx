import React from 'react'
import './index.css'
import api from '../../assets/APIs/quiz.json'
import imageQuiz from '../../assets/images/abelha.png'
// imageQuiz = api.imagem
// console.log(imageQuiz);
let teste = "ok"
let imageQuizz = api.imagem
const TelaJogar = () => {

  function handleClick(e){
    if(e===api.resposta){
      console.log('acertou');

    }else{
      console.log('errou');
    }
  }

  return (
    <div className="container">
    <div className='jogar'>
      <p className='pergunta'>{api.pergunta}</p>
      <img src={imageQuizz} alt={teste} className="image-game" />
      
      
      <div className='jogar-jogo__btn' >
        <button className='btns-quiz' key={1} onClick={()=>handleClick(api.btn[0])} >{api.btn[0]}</button>
        <button className='btns-quiz' key={2}onClick={()=>handleClick(api.btn[1])} >{api.btn[1]}</button>
        <button className='btns-quiz' key={3}onClick={()=>handleClick(api.btn[2])} >{api.btn[2]}</button>
        <button className='btns-quiz' key={4}onClick={()=>handleClick(api.btn[3])} >{api.btn[3]}</button>
      </div>
    </div>
    </div>
  )
}


export default TelaJogar