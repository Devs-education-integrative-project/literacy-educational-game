import Button from './components/Buttons/BtnsStartGame';
import ModalAcerto from './components/ModalAcertoErro/ModalAcerto';
import ModalErro from './components/ModalAcertoErro/ModalErro';
import TelaDeOpcao from './components/TelaDeOpcao/TelaDeOpcao';
import BackgroundContent from './components/BackgroundContentGame';
import TelaJogar from './components/TelaJogar'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <TelaJogar/>
    </div>
  );
}

export default App;
