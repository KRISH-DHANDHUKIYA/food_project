import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './Context/ShopContext'
import store from './redux/Store.jsx'
import { Provider } from "react-redux"

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ShopContextProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </ShopContextProvider>
    </BrowserRouter>
)
