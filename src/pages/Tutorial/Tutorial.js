import React from 'react'
import { Link} from 'react-router-dom'
import BackgroundContent from '../../components/BackgroundContentGame/BackgroundContentGame'
import Button from '../../components/Button/Button'
import './tutorial.css'

const Tutorial = () => {

  return (
    <BackgroundContent>
          <iframe className='video-tutorial'  src="https://www.youtube.com/embed/0PG7Q2w-1Dc?list=PL9235CD5F91DB1DC9" title="Vídeo Educativo Infantil - Alfabetização PA PE PI PO PU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <Link className='link' to={'/quiz'}><Button  >Pular</Button></Link>
    </BackgroundContent>

  )
}

export default Tutorial