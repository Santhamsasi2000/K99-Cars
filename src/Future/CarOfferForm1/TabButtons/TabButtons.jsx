import { useState } from "react"
import RegistrationNo from "../RegistrationNo/RegistrationNo";
import "./TabButtons.css";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import MakeModel from "../MakeModel/MakeModel";

const TabButtons = () => {
    const [activeTab, setActiveTab] = useState("registrationNumber");
  return (
    <div className="offerform-card shadow my-4">
      <div className="tab-buttons row gx-0 shadow-sm overflow-hidden rounded-top-4">
        <button className={`tab-btn col-6 ${activeTab === 'registrationNumber' ? "active" : "" }`} 
        onClick={ ()=> setActiveTab("registrationNumber")}>REGISTRATION NO</button>
        <button className={`tab-btn col-6 ${activeTab === "makeModel" ? "active" : "" }`}
         onClick={ ()=> setActiveTab("makeModel")}>MAKE & MODEL</button>
      </div>
      {/* ======= Conditional Rendering the Switching Tab */}
      <div className="form-content h-100">
        {
         activeTab === 'registrationNumber' ? <RegistrationNo/> : <MakeModel/>
        }
      </div>
     <NavLink className="instant-offer-btn navbar-bg p-3 rounded-bottom-4">GET AN INSTANT OFFER
      <FaArrowRight className="ms-2"/>
     </NavLink>
    </div>
  )
}

export default TabButtons
