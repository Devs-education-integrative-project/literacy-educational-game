import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

function EndGame({ score }) {
    const [result, setResult] = useState(score)
    const finalResult = () => {
        if (result < 50) {
            setResult(`${result} não foi dessa vez, jogue novamente`)
        } else {
            setResult(`${result} parabéns`)

        }
    }
    console.log(result)
    return (
        <div className="container-end-game">
            <div className="group-content">
                <h1 className='title'>{result < 50 ? 'NÃO FOI DESSA VEZ TENTE NOVAMENTE' : 'PARABÉNS!!!!! VOCÊ DOMINOU O ALFABETO!'}</h1>
                <div className="img-trofel">
                    <span className='score'>{result}%</span>
                </div>
                <Link className='link' to={'/'}><button className="btn-play-again">JOGAR NOVAMENTE</button>
                </Link>
            </div>
        </div>
    )
}

export default EndGame;