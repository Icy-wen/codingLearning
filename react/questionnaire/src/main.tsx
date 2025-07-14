import { createRoot } from 'react-dom/client'
import './lib/rem.js'
import App from './App'
import './index.css'
import { store } from './store/index.ts'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App /> 
    </Provider>
    
)
