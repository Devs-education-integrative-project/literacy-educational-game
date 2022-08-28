import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tutorial from './pages/Tutorial/Tutorial';
import Home from "./pages/Home/Home";
import SetNamePlayer from "./pages/SetNamePlayer/SetNamePlayer";
import Quiz from "./pages/Quiz/Quiz";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/setName' element={<SetNamePlayer />} />
        <Route path='/tutorial' element={<Tutorial />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </BrowserRouter>

  )
}
export default MyRoutes