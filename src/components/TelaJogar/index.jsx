import React from 'react'
import Button from '../Buttons/BtnsStartGame'
import './style.css'
const TelaJogar = () => {
  return (
    <div className='jogar'>
      <p>QUAL A PRIMEIRA LETRA DO NOME DESSE ANIMAL?</p>

      <div className='jogar-jogo__btn'>
        <Button>A</Button>
        <Button>E</Button>
        <Button>B</Button>
        <Button>C</Button>
      </div>
    </div>
  )
}
export default TelaJogar