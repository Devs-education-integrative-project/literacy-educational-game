import React from "react";
import Button from "../Buttons/BtnsStartGame";
import "./index.css";

const TelaDeInicio = () => {
  return (
    <div className="background">
      <div className="iniciar-jogo">
        <div className="image-logo"></div>
        <div className="iniciar-jogo__btn">
          <input type="text" name="" id="" placeholder="NOME" />
          <input type="number" name="" id="" placeholder="IDADE" />
          <Button>INICIAR JOGO</Button>
        </div>
      </div>
    </div>
  );
};

export default TelaDeInicio;
