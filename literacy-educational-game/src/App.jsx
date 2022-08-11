import Button from './components/Buttons/BtnsStartGame';
import ModalAcerto from './components/ModalAcertoErro/ModalAcerto';
import ModalErro from './components/ModalAcertoErro/ModalErro';
import './App.css';
import TelaDeOpcao from './components/TelaDeOpcao/TelaDeOpcao';


const App = () => {
  return (
    <div className="App">
      <h1>img qual é a letra</h1>
      <Button>Novo Jogo</Button>
      <Button>Continuar</Button>
      <TelaDeOpcao />
    </div>
  );
}

export default App;
