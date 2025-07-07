import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './views/login';
import Layout from './views/layout';
import Home from './views/home';
import Publish from './views/publish';
function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/layout" element={<Layout/>}>
                    <Route path='' element={<Home/>}></Route>
                    <Route path='publish' element={<Publish/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;