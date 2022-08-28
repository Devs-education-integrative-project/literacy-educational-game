import { BrowserRouter, Routes, Route } from "react-router-dom";
// import TelaDeOpcao from "./pages/TelaDeOpcao";
import Tutorial from './pages/Tutorial';
import TelaDeInicio from './pages/TelaDeInicio';
import TelaJogar from './pages/TelaJogar'
import Home from "./pages/Home/Home";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tutorial' element={<Tutorial />} />
        <Route path='/inicio' element={<TelaDeInicio />} />
        <Route path='/jogar' element={<TelaJogar />} />
      </Routes>
    </BrowserRouter>

  )
}
export default MyRoutes