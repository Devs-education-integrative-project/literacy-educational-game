import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundContent from '../../Components/BackgroundContentGame/BackgroundContentGame';
import Button from '../../Components/Button/Button';
import './setNamePlayer.css';
import './responsive-setNamePlayer.css';

const SetNamePlayer = () => {
function handleSubmitForm(e){
  e.preventDefault();
}

  function resetPlayerName() {
    localStorage.removeItem('PlayerName');
  }
  resetPlayerName();

  function saveNamePlayer(e) {
    localStorage.setItem('PlayerName', e.target.value.toUpperCase());
  }
  function resetarJogo(){
    localStorage.setItem('CURRENT__QUIZ', 0)
    localStorage.setItem('SCORE', 100)
  }

  return (
    <BackgroundContent>
      <form autoComplete="off" className="form-inicio" onSubmit={handleSubmitForm}>
        <input
          className="input-name-player"
          type="text"
          name="nome"
          placeholder="Digite seu nome aqui ..."
          onChange={saveNamePlayer}
          
        />
      </form>
      <Link className="link" to={'/tutorial'} onClick={resetarJogo}>
        <Button>INICIAR JOGO</Button>
      </Link>
    </BackgroundContent>
  );
};

export default SetNamePlayer;
