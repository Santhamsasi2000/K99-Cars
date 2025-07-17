import './App.css';
// Blur.css
import 'react-lazy-load-image-component/src/effects/blur.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import InstantOffer from './Pages/InstantOffer';
import ScrollToTop from './Components/ScrollToTop';
import OtpVerify from './K99XBuyer/LoginPage/OtpVerify';
import UpdateProfile from './K99XBuyer/LoginPage/UpdateProfile/UpdateProfile';
import UploadDocuments from './K99XBuyer/LoginPage/UpdateProfile/UploadDocuments';
import NavDealer from './K99XBuyer/NavDealer/NavDealer';
import SignInDealer from './K99XBuyer/LoginPage/SignIn/SignInDealer';
import SignUpDealer from './K99XBuyer/LoginPage/SignUp/SignUpDealer';

function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/instant-offer" element={<InstantOffer/>}/>
  {/* ================ Become a K99 Buyer =======================*/}
        {/* Sign In */}
        <Route path="/sign-in" element={<SignInDealer/>}/>
        <Route path="/sign-up" element={<SignUpDealer/>}/>
        {/* OTP Verification */}
        <Route path="/otp-verification" element={<OtpVerify/>}/>
        {/* Update Profile */}
        <Route path="/update-details" element={<UpdateProfile/>}/>
        <Route path="/update-documents" element={<UploadDocuments/>}/>
        {/* Dealer Dashboard */}
         <Route path='/nav-dashboard/*' element={<NavDealer/>}/>
      </Routes>
    </>
  )
}

export default App
