import { useState } from "react"
import OtpLogin from "./OtpLogin";
import PasswordLogin from "./PasswordLogin";

const SignInTabs = () => {
  const [activeTab, setActiveTab] = useState("otp");

  return (
    <section className="p-3 p-sm-4 p-md-5 d-flex flex-column align-items-center">
       <h2 className="bold-900 text-center mb-4">Sign in to your account</h2>
       <div className="p-4 p-sm-5 shadow rounded-2" style={{ maxWidth: "600px"}}>
        <div className="d-flex justify-content-center mb-3">
          <button className={`px-sm-5 btn rounded-start-2 rounded-end-0  ${activeTab === "otp" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={()=>setActiveTab("otp")}>Login Using OTP</button>
          <button className={`px-sm-5 btn rounded-start-0 rounded-end-2  ${activeTab === "password" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={()=>setActiveTab("password")}>Login Using Password</button>
        </div>
        <div className="">
            {
                activeTab === "otp" ? <OtpLogin/>: <PasswordLogin/> 
            }
        </div>
       </div>
    </section>
  )
}

export default SignInTabs
