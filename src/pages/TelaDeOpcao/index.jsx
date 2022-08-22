import React from 'react'
<<<<<<< HEAD:src/components/TelaDeOpcao/index.jsx
import Button from '../Buttons/BtnsStartGame'
import logo from '../../assets/images/logo-qual-e-a-letra.png'
=======
import Button from '../../components/Buttons/BtnsStartGame'
import logo from '../../assets/logo.png'
>>>>>>> 8bd35c7ac3c6ce7ac36d0f2c668e5d41ff4b055c:src/pages/TelaDeOpcao/index.jsx
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