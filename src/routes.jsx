import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tutorial from './Pages/Tutorial/Tutorial';
import Home from './Pages/Home/Home';
import SetNamePlayer from './Pages/SetNamePlayer/SetNamePlayer';
import Quiz from './Pages/Quiz/Quiz';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setName" element={<SetNamePlayer />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}
export default MyRoutes;
