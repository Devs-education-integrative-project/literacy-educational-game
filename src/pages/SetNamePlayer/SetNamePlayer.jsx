import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackgroundContent from '../../components/BackgroundContentGame/BackgroundContentGame';
import Button from '../../components/Button/Button';
import './setNamePlayer.css';

const SetNamePlayer = () => {
  const [dados, setDados] = useState({ nome: '', idade: '' });

  const handleData = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };
  function saveData() {
    let users = [];
    localStorage.setItem('users', dados.nome.toUpperCase());
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'));
      const user = users.find((u) => u.nome === u.nome);
      if (user) {
        users.push(user);
        localStorage.setItem('token', dados.nome);
      }
    }
  }

  return (
    <BackgroundContent>
      <form autoComplete="off" className="form-inicio">
        <input
          className="input-name-player"
          type="text"
          name="nome"
          placeholder="Digite seu nome aqui ..."
          onChange={handleData}
          value={dados.nome}
        />
      </form>
      <Link className="link" to={'/tutorial'}>
        <Button click={saveData}>INICIAR JOGO</Button>
      </Link>
    </BackgroundContent>
  );
};

export default SetNamePlayer;
