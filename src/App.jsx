import Button from './components/Buttons/BtnsStartGame';
import ModalAcerto from './components/ModalAcertoErro/ModalAcerto';
import ModalErro from './components/ModalAcertoErro/ModalErro';
import TelaDeOpcao from './components/TelaDeOpcao/TelaDeOpcao';
import BackgroundContent from './components/BackgroundContentGame';
import TelaJogar from './components/TelaJogar'
import Tutorial from './components/Tutorial';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* <TelaJogar /> */}
      {/* <ModalAcerto/> */}
      {/* <ModalErro/> */}
      {/* <TelaDeOpcao/> */}
      <Button>Novo jogo</Button>
      <Button>Continuar</Button>

    </div>
  );
}

export default App;
