import React, { useState } from 'react'
import { Link, } from 'react-router-dom'

import Button from '../../components/Button/Button'
import './index.css'

const Tutorial = () => {
function resetarJogo(){
  localStorage.setItem('CURRENT__QUIZ', 0)
  localStorage.setItem('SCORE', 100)
}
  return (
    <div className="background">
      <div className='tutorial-jogo'>
        <div className="image-logo"></div>
        <div className='tutorial-jogo__btn'>
          <iframe width="200" height="110" src="https://www.youtube.com/embed/0PG7Q2w-1Dc?list=PL9235CD5F91DB1DC9" title="Vídeo Educativo Infantil - Alfabetização PA PE PI PO PU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <Link className='link' to={'/jogar'} onClick={resetarJogo}><Button  >Pular</Button></Link>
        </div>
      </div>
    </div>

  )
}

export default Tutorial