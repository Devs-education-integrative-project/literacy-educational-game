import React, { useState } from 'react';
import BackgroundContent from '../../components/BackgroundContentGame/BackgroundContentGame';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ConfirmDialog from '../../components/ConfirmDialog/confirmDialog';
import './home.css';

const Home = () => {

  const [dialog, setDialog] = useState({
    message:"",
    isLoading:false
  })

  const handleDialog = (message, isLoading) => {
    setDialog({
      message,
      isLoading
    })
  }

  const handlePlay = () => {
    handleDialog("Tem certeza que deseja iniciar um novo jogo?",true);
  }

  const areUSePlay = (choese) => {
    if(choese){
      handleDialog("",false);
      <Link className="link" to={'/quiz'}/>
      console.log('sim')
    }else {
      handleDialog("",false);
    }
  }
  return (
    <BackgroundContent>
      <button onClick={() => handlePlay()} className='btn'>NOVO JOGO</button>
      <Link className="link" to={'/quiz'}>
        <Button>CONTINUAR</Button>
      </Link>
      {dialog.isLoading && <ConfirmDialog onDialog={areUSePlay} message={dialog.message} redirect="/setName"/>}
    </BackgroundContent>
  );
};

export default Home;
