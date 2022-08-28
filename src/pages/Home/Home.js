import React from 'react';
import BackgroundContent from '../../components/BackgroundContentGame/BackgroundContentGame';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './home.css';

const Home = () => {
  return (
    <BackgroundContent>
      <Link className="link" to={'/setName'}>
        <Button>NOVO JOGO</Button>
      </Link>
      <Link className="link" to={'/quiz'}>
        <Button>CONTINUAR</Button>
      </Link>
    </BackgroundContent>
  );
};

export default Home;
