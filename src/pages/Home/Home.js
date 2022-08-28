import React from 'react';
import BackgroundContent from '../../components/BackgroundContentGame/BackgroundContentGame';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './home.css';

const Home = () => {
    if (localStorage.getItem('PlayerName') === undefined || localStorage.getItem('PlayerName') === null ) {
      localStorage.setItem('hiddenBtnContinue',JSON.stringify({display: "none"}))
    }

  return (
    <BackgroundContent>
      <Link className="link" to={'/setName'}>
        <Button>NOVO JOGO</Button>
      </Link>
      <Link className="link" to={'/quiz'}>
        <Button styleButton={JSON.parse( localStorage.getItem('hiddenBtnContinue'))}>CONTINUAR</Button>
      </Link>
    </BackgroundContent>
  );
};

export default Home;
