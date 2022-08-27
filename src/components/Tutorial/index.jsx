import React from 'react'
import Button from '../Buttons/BtnsStartGame'
import logo from '../../assets/images/logo-qual-e-a-letra.png'
import './index.css'
const Tutorial = () => {
  return (
    <div className="background">
      <div className='tutorial-jogo'>
        <div className="image-logo"></div>
        <div className='tutorial-jogo__btn'>
          <iframe width="200" height="110" src="https://www.youtube.com/embed/0PG7Q2w-1Dc?list=PL9235CD5F91DB1DC9" title="Vídeo Educativo Infantil - Alfabetização PA PE PI PO PU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <Button>Pular</Button>
        </div>
      </div>
    </div>
  )
}

export default Tutorial