import React from 'react'
import Button from '../Buttons/BtnsStartGame'
import logo from '../../assets/logo.png'
import './index.css'
const TelaDeInicio = () => {
  return (
    <div className='iniciar-jogo'>
      <img src={logo} alt="" />

      <div className='iniciar-jogo__btn'>
        <Button>NOVO</Button>
        <Button>CONTINUAR</Button>
      </div>
    </div>
  )
}

export default TelaDeInicio