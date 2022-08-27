import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Buttons/BtnsStartGame'
import logo from '../../assets/images/logo-qual-e-a-letra.png'
import './index.css'


const TelaDeOpcao = () => {
  return (
    <div className="tela-opcao">
      <img src={logo} alt="logo" />

      <div className='tela-opcao-jogo__btn'>
        <Link className='link' to={'/inicio'}><Button>NOVO JOGO</Button></Link>
        <Button>CONTINUAR</Button>
      </div>
    </div>
  )
}

export default TelaDeOpcao