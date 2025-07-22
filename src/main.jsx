import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import SignInDealer from './K99XBuyer/LoginPage/SignIn/SignInDealer.jsx'
import SignInTabs from './K99XBuyer/LoginPage/SignIn/SignInTabs.jsx'
import RegisteredDealers from './K99XBuyer/LoginPage/SignIn/RegisteredDealers.jsx'
import NewDealers from './K99XBuyer/LoginPage/SignIn/NewDealers.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      {/* <App/> */}
      <SignInDealer/>
      {/* <SignInTabs/> */}
      {/* <RegisteredDealers/> */}
      {/* <NewDealers/> */}
    </StrictMode>
  </BrowserRouter>
)
