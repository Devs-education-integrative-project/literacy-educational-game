import React from 'react';
import BackgroundContent from '../../Components/BackgroundContentGame/BackgroundContentGame';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import ConfirmDialog from '../../Components/ConfirmDialog/ConfirmDialog';
import './home.css';

const Home = () => {
  if (
    localStorage.getItem('SCORE') === undefined ||
    localStorage.getItem('SCORE') === null
  ) {
    localStorage.setItem(
      'hiddenBtnContinue',
      JSON.stringify({ display: 'none' }),
    );
  }

  const [dialog, setDialog] = React.useState({
    message: '',
    isLoading: false,
  });

  const handleDialog = (message, isLoading) => {
    setDialog({
      message,
      isLoading,
    });
  };

  const handlePlay = () => {
    handleDialog('Tem certeza que deseja iniciar um novo jogo?', true);
  };

  const areUSePlay = (choese) => {
    if (choese) {
      handleDialog('', false);
      <Link className="link" to={'/quiz'} />;
    } else {
      handleDialog('', false);
    }
  };

  const newGame = () => {
    if (localStorage.getItem('SCORE') === undefined ||
        localStorage.getItem('SCORE') === null){
          return true;
    }
  };

  return (
    <BackgroundContent>
      {newGame() ? (
        <Link className="link" to={'/setName'}>
          <Button>NOVO JOGO</Button>
        </Link>
      ):
        <Button click={handlePlay}>NOVO JOGO</Button>
      }
      <Link className="link" to={'/quiz'}>
        <Button
          styleButton={JSON.parse(localStorage.getItem('hiddenBtnContinue'))}
        >
          CONTINUAR
        </Button>
      </Link>
      {dialog.isLoading && (
        <ConfirmDialog
          onDialog={areUSePlay}
          message={dialog.message}
          redirect="/setName"
        />
      )}
    </BackgroundContent>
  );
};

export default Home;
