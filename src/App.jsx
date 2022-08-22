import Button from './components/BtnStartLoad';
import ModalAcerto from './components/ModalAcerto';
import ModalErro from './components/ModalErro';
import TelaDeOpcao from './pages/TelaDeOpcao';
import BackgroundContent from './components/BackgroundContentGame';
import TelaJogar from './pages/TelaJogar'
import Tutorial from './pages/Tutorial';
import TelaDeInicio from './pages/TelaDeInicio';
import EndGame from './pages/EndGame';


import './styleGlobal.css'


const App = () => {
  return (
    <div className="App">

      <Tutorial />
      <TelaDeOpcao />


      {/*
      <Tutorial />
      <ModalAcerto />
      <ModalErro /> */}
      {/* <EndGame /> */}

    </div>
  );
}

export default App;
