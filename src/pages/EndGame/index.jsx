import './index.css'

function EndGame(){
    return(
        <div className="container-end-game">
            <div className="group-content">
            <h1 className='title'>PARABÉNS!!!!! VOCÊ DOMINOU O ALFABETO!</h1>
            <div className="img-trofel"><span className='score'>100%</span></div>
            <button className="btn-play-again">JOGAR NOVAMENTE</button>
            </div>
        </div>


    )
}

export default EndGame;