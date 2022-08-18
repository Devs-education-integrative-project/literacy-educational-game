import Button from './components/Buttons/BtnsStartGame';
import ModalAcerto from './components/ModalAcerto';
import ModalErro from './components/ModalErro';
import TelaDeOpcao from './components/TelaDeOpcao';
import BackgroundContent from './components/BackgroundContentGame';
import TelaJogar from './components/TelaJogar'
import Tutorial from './components/Tutorial';
import TelaDeInicio from './components/TelaDeInicio';
import EndGame from './components/EndGame';

const App = () => {
  return (
    <div className="App">

      <TelaDeOpcao />

      {/* <TelaDeInicio />
      <TelaDeOpcao />
      <Tutorial />
      <TelaJogar />
      <ModalAcerto />
      <ModalErro />
      <EndGame /> */}


    </div>
  );
}

export default App;
