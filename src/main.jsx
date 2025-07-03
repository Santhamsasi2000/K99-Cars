import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import InstantOffer from './Pages/InstantOffer.jsx'
import QuestionAnswer from './InstantOffer/QuestionAnswer/QuestionAnswer.jsx'
import SubField from './InstantOffer/QuestionAnswer/SubField.jsx'
import Milege from './InstantOffer/QuestionAnswer/Milege.jsx'
import CarOfferForm from './CarOfferForm/CarOfferForm.jsx'
import TabButtons from './CarOfferForm/TabButtons/TabButtons.jsx'
import NewModelForm from './CarOfferForm/MakeModel/NewModelForm.jsx'
import NewModel from './CarOfferForm/MakeModel/NewModel.jsx'
import CloseDropdown from './CarOfferForm/MakeModel/CloseDropdown.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      {/* <App /> */}
      {/* <InstantOffer/> */}
      {/* <SubField/> */}
      {/* <Milege/> */}
      {/* <TabButtons/> */}
      {/* <NewModel/> */}
      <CloseDropdown/>
    </StrictMode>,
  </BrowserRouter>
)
