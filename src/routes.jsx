import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tutorial from './pages/Tutorial/Tutorial';
import TelaJogar from './pages/TelaJogar'
import Home from "./pages/Home/Home";
import SetNamePlayer from "./pages/SetNamePlayer/SetNamePlayer";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/setName' element={<SetNamePlayer />} />
        <Route path='/tutorial' element={<Tutorial />} />
        <Route path='/quiz' element={<TelaJogar />} />
      </Routes>
    </BrowserRouter>

  )
}
export default MyRoutes