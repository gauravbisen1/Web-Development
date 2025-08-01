import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
    //routing
    // <BrowserRouter>
    //     <App />
    // </BrowserRouter>
    
    <UserContext>
         <App />
    </UserContext>
   
)
