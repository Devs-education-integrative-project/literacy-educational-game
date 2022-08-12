import React from 'react'
import Button from '../Buttons/BtnsStartGame'
import logo from '../../assets/logo.png'
import './style.css'
const TelaDeOpcao = () => {
  return (
    <div className='iniciar-jogo'>
      <img src={logo} alt="" />
      <p>TEM CERTEZA QUE DESEJA INICIAR UM NOVO JOGO?</p>
      <div className='iniciar-jogo__btn'>
        <Button>SIM</Button>
        <Button>NÃO</Button>
      </div>
    </div>
  )
}

export default TelaDeOpcao