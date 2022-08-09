
import './App.css';
import ButtonsStartGame from './components/Buttons/BtnsStartGame';
import ModalAcerto from './components/ModalAcertoErro/ModalAcerto';
import ModalErro from './components/ModalAcertoErro/ModalErro';

const App = () => {
  return (
    <div className="App">
      <h1>img qual é a letra</h1>
      <ButtonsStartGame/>
      <ModalAcerto/>
      <ModalErro/>
    </div>
  );
}

export default App;
