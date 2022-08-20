import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Tutorial from "./pages/Tutorial";
import TelaDeInicio from "./pages/TelaDeInicio";
import TelaJogar from './pages/TelaJogar'

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Tutorial />} />
        <Route path='/teladeinicio' element={<TelaDeInicio />} />
        <Route path='/telajogar' element={<TelaJogar />} />
      </Routes>
    </BrowserRouter>

  )
}
export default MyRoutes