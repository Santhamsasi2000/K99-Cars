import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import SignInDealer from './K99XBuyer/LoginPage/SignIn/SignInDealer.jsx'
import SignInTabs from './K99XBuyer/LoginPage/SignIn/SignInTabs.jsx'
import RegisteredDealers from './K99XBuyer/LoginPage/SignIn/RegisteredDealers.jsx'
import NewDealers from './K99XBuyer/LoginPage/SignIn/NewDealers.jsx'
import SignUpDealer from './K99XBuyer/LoginPage/SignUp/SignUpDealer.jsx'
import UpdateProfile from './K99XBuyer/LoginPage/UpdateProfile/UpdateProfile.jsx'
import UploadDocuments from './K99XBuyer/LoginPage/UpdateProfile/UploadDocuments.jsx'
import NavDealer from './K99XBuyer/NavDealer/NavDealer.jsx'
import MyAccount from './K99XBuyer/MyAccount/MyAccount.jsx'
import AccountInformation from './K99XBuyer/MyAccount/AccountInformation.jsx'
import DashboardDealer from './K99XBuyer/DashboardDealer/DashboardDealer.jsx'
import LiveAuction from './K99XBuyer/Auctions/LiveAuction.jsx'
import Auctions from './K99XBuyer/Auctions/Auctions.jsx'
import OtpVerify from './K99XBuyer/LoginPage/OtpVerify.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App/>
      {/* <SignUpDealer/> */}
      {/* <UpdateProfile/> */}
      {/* <UploadDocuments/> */}
      {/* <NavDealer/> */}
      {/* <MyAccount/> */}
      {/* <DashboardDealer/> */}
      {/* <UploadDocuments/> */}
      {/* <Auctions/> */}
      {/* <OtpVerify/> */}
    </StrictMode>
  </BrowserRouter>
)
