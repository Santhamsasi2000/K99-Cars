import { FaShieldAlt, FaUser } from "react-icons/fa"

const AccountStatus = () => {
  return (
     <section className="rounded-3 overflow-hidden shadow-sm mb-5">
       <p className="navbar-bg secondary-color fw-bold mb-0 d-flex align-items-center gap-2 fs-5 py-2 px-3">
            <FaShieldAlt className="fs-5"/>
            <span>Account Status</span>
       </p>
       <div className="p-3 card-bg">
         <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fw-semibold">Account Verification</span>
            <span className="secondary-bg text-white rounded-2 px-2 fw-bold">Verified</span>
         </div>
         <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fw-semibold">Bidding Status</span>
            <span className="secondary-bg text-white rounded-2 px-2 fw-bold">Active</span>
         </div>
         <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fw-semibold">Payment Method</span>
            <span className="secondary-bg text-white rounded-2 px-2 fw-bold">Verified</span>
         </div>
         <div className="d-flex justify-content-between align-items-center">
            <span className="fw-semibold">Member Since</span>
            <span className="secondary-color">Jan 2024</span>
         </div>
       </div>
    </section>
  )
}

export default AccountStatus
