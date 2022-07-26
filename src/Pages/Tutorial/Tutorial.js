import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundContent from '../../Components/BackgroundContentGame/BackgroundContentGame'
import Button from '../../Components/Button/Button'
import videoTutorial from '../../assets/videos/tutorial.mp4'
import './tutorial.css'
import './responsive-tutorial.css'

const Tutorial = () => {

  return (
    <BackgroundContent>

      <video className='video-tutorial' title="Vídeo tutorial qual é a letra" controls><source src={videoTutorial} type="video/mp4" /></video>


      <Link className='link' to={'/quiz'}><Button>PULAR TUTORIAL</Button></Link>
    </BackgroundContent>

  )
}

export default Tutorial