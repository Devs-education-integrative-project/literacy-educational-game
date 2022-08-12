import React from 'react'
import Button from '../Buttons/BtnsStartGame'

export const TelaJogar = () => {
  return (
    <div className='jogar'>
      <p>QUAL A PRIMEIRA LETRA DO NOME DESSE ANIMAL?</p>
      <img src={logo} alt="" />
      <div className='iniciar-jogo__btn'>
        <Button>SIM</Button>
        <Button>NÃO</Button>
      </div>
    </div>
  )
}
