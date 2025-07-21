import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import SignInDealer from './K99XBuyer/LoginPage/SignIn/SignInDealer.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App/>
      {/* <SignInDealer/> */}
    </StrictMode>
  </BrowserRouter>
)
