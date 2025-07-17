import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import SignUpDealer from './K99XBuyer/LoginPage/SignUp/SignUpDealer.jsx'
import SignInDealer from './K99XBuyer/LoginPage/SignIn/SignInDealer.jsx'
import UpdateProfile from './K99XBuyer/LoginPage/UpdateProfile/UpdateProfile.jsx'
import UploadDocuments from './K99XBuyer/LoginPage/UpdateProfile/UploadDocuments.jsx'
import LiveAuction from './K99XBuyer/Auctions/LiveAuction.jsx'
import Auctions from './K99XBuyer/Auctions/Auctions.jsx'
import BidNow from './K99XBuyer/Auctions/BidNow/BidNow.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      {/* <SignInDealer/> */}
      {/* <SignUpDealer/> */}
      {/* <App/> */}
      {/* <UpdateProfile/> */}
      {/* <UploadDocuments/> */}
      {/* <LiveAuction/> */}
      {/* <Auctions/> */}
      <BidNow/>
    </StrictMode>,
  </BrowserRouter>
)
