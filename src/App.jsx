import './App.css';
// Blur.css
import 'react-lazy-load-image-component/src/effects/blur.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import InstantOffer from './Pages/InstantOffer';
import ScrollToTop from './Components/ScrollToTop';
import DashboardDealer from './DealerBuyer/DashboardDealer/DashboardDealer';
import LiveAuctions from './DealerBuyer/LiveAuctions/LiveAuctions';
import MyAccount from './DealerBuyer/MyAccount/MyAccount';
import NavDealer from './DealerBuyer/NavDealer/NavDealer';

function App() {
  return (
    <>
      <ScrollToTop/>
      {/* <NavDealer/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/instant-offer" element={<InstantOffer/>}/>
        {/* Dealer Module */}
         {/* <Route path="/" element={<DashboardDealer/>}/> */}
         {/* <Route path="/dashboard" element={<DashboardDealer/>}/> */}
         {/* <Route path="/auctions" element={<LiveAuctions/>}/>
         <Route path="/my-account" element={<MyAccount/>}/> */}
      </Routes>
    </>
  )
}

export default App
