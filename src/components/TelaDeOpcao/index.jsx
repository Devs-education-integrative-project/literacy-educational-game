import React from 'react'
import Button from '../Buttons/BtnsStartGame'
import logo from '../../assets/images/logo-qual-e-a-letra.png'
import './index.css'
const TelaDeOpcao = () => {
  return (
    <div className="background">
    <div className='iniciar-jogo'>
      <img src={logo} alt="" />
      <p>TEM CERTEZA QUE DESEJA INICIAR UM NOVO JOGO?</p>
      <div className='iniciar-jogo__btn'>
        <Button>SIM</Button>
        <Button>NÃO</Button>
      </div>
    </div>
    </div>
  )
}

export default TelaDeOpcao