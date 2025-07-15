import { useState } from "react"

const SignInDealer = () => {
  const [activeTab, setActiveTab] = useState("otp");

  return (
    <section className="p-3 p-sm-4 p-md-5">
       <h2 className="bold-900 text-center">Sign in to your account</h2>
       <div className="card p-4">
        <div className="d-flex justify-content-center">
          <button className="btn btn-secondary rounded-0" 
          onClick={()=>setActiveTab("otp")}>Login Using OTP</button>
          <button className="btn btn-secondary rounded-0"
          onClick={()=>setActiveTab("password")}>Login Using Password</button>
        </div>
        <div>
            {/* {
                activeTab? <
            } */}
        </div>
       </div>
    </section>
  )
}

export default SignInDealer
