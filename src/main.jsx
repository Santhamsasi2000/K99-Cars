import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UploadDocuments from './DealerBuyer/LoginPage/UpdateProfile/UploadDocuments.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      {/* <SignUpDealer/> */}
      {/* <OtpVerify/> */}
      <UploadDocuments/>
    </StrictMode>
  </BrowserRouter>
)
