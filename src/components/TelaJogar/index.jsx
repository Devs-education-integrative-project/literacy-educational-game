// import React from 'react'
// import './index.css'
// import api from '../../assets/APIs/quiz.json'
// // import imageQuiz from '../../assets/images/abelha.png'
// import imf from '../../../public/assets/img-abelha.png'

// const TelaJogar = () => {
//   console.log(api);
//   function handleClick(e){
//     if(e===api.resposta){
//       console.log('acertou')
//     }else{
//       console.log('errou')
//     }
//   }
//   return (
    
//     <div className="container">
//       <div className='jogar'>
//         <p className='pergunta'>pergunta</p>
//         {api.map((image)=><img key={1} src={image.imagem} alt="" className="image-game" />)}
//         <div className='jogar-jogo__btn' >
//           <button className='btns-quiz' key={1} onClick={()=>handleClick(api.btn[0])}> {api.btn[0]} </button>
//           <button className='btns-quiz' key={2}  onClick={()=>handleClick(api.btn[1])}> {api.btn[1]} </button>
//           <button className='btns-quiz' key={3}  onClick={()=>handleClick(api.btn[2])}> {api.btn[2]} </button>
//           <button className='btns-quiz' key={4}  onClick={()=>handleClick(api.btn[3])}> {api.btn[3]} </button>
//         </div>
//       </div>
//     </div>
//   )
// }


// export default TelaJogar;

import React from 'react'
import './index.css'
import api from '../../assets/APIs/quiz.json'
// import image from '../../assets/images/abelha.png'
// import imageQuiz from '../../assets/images/abelha.png'
let numberQuiz = 1;
const TelaJogar = () => {
  function handleClick(e){
    if(e===api.quiz1[0].resposta){
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