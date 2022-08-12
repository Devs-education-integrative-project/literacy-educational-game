import Button from './components/';
import ModalAcerto from './components/ModalAcertoErro/ModalAcerto';
import ModalErro from './components/ModalAcertoErro/ModalErro';
import TelaDeOpcao from './components/TelaDeOpcao/TelaDeOpcao';
import BackgroundContent from './components/BackgroundContentGame';
import './App.css';



const App = () => {
  return (
    <div className="App">

      <Button>Novo Jogo</Button>
      <Button>Continuar</Button>
      <TelaDeOpcao />
      <BackgroundContent />
    </div>
  );
}

export default App;
