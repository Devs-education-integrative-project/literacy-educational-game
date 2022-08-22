import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/BtnStartLoad";
import "./index.css";

const TelaDeInicio = () => {
  const [dados, setDados] = useState({ nome: '', idade: '' })

  const handleData = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value })

  }
  function saveData() {
    let users = []
    localStorage.setItem('users', dados.nome)
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'));
      const user = users.find(u => u.nome === u.nome);
      if (user) {
        users.push(user);
        localStorage.setItem('token', (dados.nome));
      }
    }
  }

  return (
    <div className="background">
      <div className="iniciar-jogo">
        <div className="image-logo"></div>
        <div className="iniciar-jogo__btn">
          <input type="text" name="nome" id="" placeholder="NOME" onChange={handleData} value={dados.nome} />
          <input type="number" name="idade" id="" placeholder="IDADE" onChange={handleData} value={dados.idade} />

          <Link className='link' to={'/telajogar'}><Button click={saveData}>INICIAR JOGO</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default TelaDeInicio;
//<button></button>
//<button onclick={() => redirect}></button>
