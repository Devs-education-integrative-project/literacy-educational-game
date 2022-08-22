import { Link } from 'react-router-dom';
import './index.css'

function EndGame() {
    return (
        <div className="container-end-game">
            <div className="group-content">
                <h1 className='title'>PARABÉNS!!!!! VOCÊ DOMINOU O ALFABETO!</h1>
                <div className="img-trofel"><span className='score'>100%</span></div>
                <Link className='link' to={'/teladeinicio'}><button className="btn-play-again">JOGAR NOVAMENTE</button></Link>
            </div>
        </div>
    )
}

export default EndGame;