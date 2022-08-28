import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundContent from '../../components/BackgroundContentGame/BackgroundContentGame';
import Button from '../../components/Button/Button';
import './setNamePlayer.css';

const SetNamePlayer = () => {
  function resetPlayerName() {
    localStorage.removeItem('PlayerName');
  }
  resetPlayerName();

  function saveNamePlayer(e) {
    localStorage.setItem('PlayerName', e.target.value.toUpperCase());
  }

  return (
    <BackgroundContent>
      <form autoComplete="off" className="form-inicio">
        <input
          className="input-name-player"
          type="text"
          name="nome"
          placeholder="Digite seu nome aqui ..."
          onChange={saveNamePlayer}
        />
      </form>
      <Link className="link" to={'/tutorial'}>
        <Button>INICIAR JOGO</Button>
      </Link>
    </BackgroundContent>
  );
};

export default SetNamePlayer;
