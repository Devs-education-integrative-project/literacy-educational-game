import React from 'react'
import Button from '../../components/Buttons/BtnsStartGame'
import logo from '../../assets/logo.png'
import './index.css'


const TelaDeOpcao = () => {
  return (
    <div className="tela-opcao">
      <img src={logo} alt="logo" />
      <p>TEM CERTEZA QUE DESEJA INICIAR UM NOVO JOGO?</p>

      <div className='tela-opcao-jogo__btn'>
        <Button>SIM</Button>
        <Button>NÃO</Button>

      </div>
    </div>
  )
}

export default TelaDeOpcao