import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import HeroSection from './Home/HeroSection/HeroSection.jsx'
import Home from './Pages/Home.jsx'
import AuctionsHome from './Home/AuctionsTable/AuctionsHome.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Works from './Home/Works/Works.jsx'
import NavDealer from './K99XBuyer/NavDealer/NavDealer.jsx'
import UpcomingAuctionsTab from './Home/AuctionsTable/UpcomingTab/UpcomingAuctionsTab.jsx'
import ConsumerUpcoming from './Home/AuctionsTable/UpcomingTab/ConsumerUpcoming.jsx'
import NavBar from './Home/Navbar/Navbar.jsx'
import SignInDealer from './K99XBuyer/LoginPage/SignIn/SignInDealer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <SignInDealer/>
    </StrictMode>
  </BrowserRouter>
)
