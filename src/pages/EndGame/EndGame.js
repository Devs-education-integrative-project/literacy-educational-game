import React from 'react';
import { Link } from 'react-router-dom';
import './endGame.css'

function EndGame({ score }) {

    function handleClickRestartGame(){
        localStorage.setItem('CURRENT__QUIZ', 0)
        localStorage.setItem('SCORE', 100)
    }
    return (
        <div className="container-end-game">
            <div className="group-content-end-game">
                <h1 className='title-end-game'>{score < 50 ? 'NÃO FOI DESSA VEZ TENTE NOVAMENTE' : `PARABÉNS ${localStorage.getItem('PlayerName')} !!!!! VOCÊ DOMINOU O ALFABETO!`}</h1>
                <div className="img-trofel">
                    <span className='text-score'>{score}%</span>
                </div>
                <Link className='link' to={'/'} onClick={handleClickRestartGame}><button className="btn-play-again">JOGAR NOVAMENTE</button>
                </Link>
            </div>
        </div>
    )
}

export default EndGame;