import Home from './pages/home/Home'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Question from './pages/question/index'
import Result from './pages/result/index'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/question' element={<Question />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}
