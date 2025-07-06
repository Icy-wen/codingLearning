import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './views/login';
import Layout from './views/layout';
function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/layout" element={<Layout/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;