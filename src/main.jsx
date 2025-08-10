import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UploadDocuments from './K99XBuyer/LoginPage/UpdateProfile/UploadDocuments.jsx'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import DashboardDealer from './K99XBuyer/DashboardDealer/DashboardDealer.jsx'
import NavDealer from './K99XBuyer/NavDealer/NavDealer.jsx'
import Auctions from './K99XBuyer/Auctions/Auctions.jsx'
import MyAccount from './K99XBuyer/MyAccount/MyAccount.jsx'
import VehicleFilterSidebar from './K99XBuyer/Auctions/VehicleFilterSidebar/VehicleFilterSidebar.jsx'
import LiveAuction from './K99XBuyer/Auctions/LiveAuction.jsx'
import Home from './Pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      {/* <VehicleFilterSidebar/> */}
      {/* <LiveAuction/> */}
      {/* <Home/> */}
      <App/>
    </StrictMode>
  </BrowserRouter>
)
