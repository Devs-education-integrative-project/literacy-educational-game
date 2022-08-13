import Button from './components/Buttons/BtnsStartGame';
import ModalAcerto from './components/ModalAcertoErro/ModalAcerto';
import ModalErro from './components/ModalAcertoErro/ModalErro';
import TelaDeOpcao from './components/TelaDeOpcao/TelaDeOpcao';
import BackgroundContent from './components/BackgroundContentGame';
import TelaJogar from './components/TelaJogar'
import Tutorial from './components/Tutorial';
import './App.css';

import TelaDeInicio from './components/TelaDeInicio';

const App = () => {
  return (
    <div className="App">
      {/* <TelaDeInicio /> */}
      <TelaJogar />
      {/* <TelaDeOpcao /> */}
      {/* <ModalAcerto/> */}
      {/* <ModalErro /> */}


    </div>
  );
}

export default App;
