import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Buttons/BtnsStartGame'
import logo from '../../assets/images/logo-qual-e-a-letra.png'
import './index.css'




const TelaDeOpcao = () => {

  const [numberStep, setNumberStep] = useState()

  const resultQuiz = () => {
    const resultSaved = localStorage.getItem('CURRENT__QUIZ')
    const initialState = resultSaved ? resultSaved : 0

    setNumberStep(initialState)
  }
  return (
    <div className="tela-opcao">
      <img src={logo} alt="logo" />

      <div className='tela-opcao-jogo__btn'>
        <Link className='link' to={'/inicio'}><Button>NOVO JOGO</Button></Link>
        <Link className='link' to={'/jogar'}><Button click={resultQuiz}>CONTINUAR</Button></Link>
      </div>
    </div>
  )
}

export default TelaDeOpcao