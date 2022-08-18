import React from "react";
// import Button from "../Buttons/BtnsStartGame";
import "./index.css";

const TelaDeInicio = () => {
  return (
    <div className="background">
      <div className="iniciar-jogo">
        <div className="image-logo"></div>
        <div className="iniciar-jogo__btn">
          <button className="btn">NOVO</button>
          <button className="btn">CONTINUAR</button>
        </div>
      </div>
    </div>
  );
};

export default TelaDeInicio;
