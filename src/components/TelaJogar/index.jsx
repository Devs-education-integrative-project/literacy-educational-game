import React from 'react'
import Button from '../Buttons/BtnsStartGame'
import './index.css'

const TelaJogar = () => {
  return (
    <div className="container">
    <div className='jogar'>
      <p>QUAL A PRIMEIRA LETRA DO NOME DESSE ANIMAL?</p>
      <div className="image-game"></div>
      <div className='jogar-jogo__btn'>
        <Button>A</Button>
        <Button>E</Button>
        <Button>B</Button>
        <Button>C</Button>
      </div>
    </div>
    </div>
  )
}
export default TelaJogar