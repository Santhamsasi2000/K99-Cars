import { FaUserCircle } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const UpdateProfile = () => {
  return (
    <section className="p-3 p-sm-4 p-md-5 d-flex flex-column align-items-center w-100">
       <div className="p-4 mb-4 bg-light d-flex justify-content-between align-items-center w-100">
         <p className="fw-bold mb-0 text-center">Please update your profile</p>
         <FaUserCircle className="text-secondary fs-4"/>
       </div>
       <form className="p-4 shadow rounded-2">
         <h5 className="fw-bold">Basic Details</h5>
         <p className="text-secondary">Please update your basic details.</p>
            {/* First Name and Last Name */}
            <div className="row mb-4 gy-4">
            <div class="col-sm-6">
                <label for="firstName" class="form-label fw-bold">First Name <span className="text-danger">*</span></label>
                <input type="text" class="form-control" id="firstName" placeholder="First Name"/>
            </div>
            <div class="col-sm-6">
                <label for="lastName" class="form-label fw-bold">Last Name <span className="text-danger">*</span></label>
                <input type="text" class="form-control" id="lastName" placeholder="Last Name"/>
            </div>
            </div>

            {/* Email Address and and Mobile Number */}
            <div className="row mb-4 gy-4">
                <div className="col-sm-6">
                <label for="email" className="form-label fw-bold">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Email Address"/>
                </div>
                <div className="col-sm-6">
                    <label for="mobileNo" className="form-label fw-bold">Mobile Number <span className="text-danger">*</span></label>
                    <input type="tel" className="form-control" id="mobileNo" placeholder="Mobile Number"/>
                </div>
            </div>

            {/* State */}
             <div className="col-sm-6 mb-4">
                <label for="mobileNo" className="form-label fw-bold">State <span className="text-danger">*</span></label>
                <select className="form-select" aria-label="Default select example">
                <option selected>Select the State</option>
                <option value="1">Tamil Nadu</option>
                <option value="2">Kerala</option>
                <option value="3">Andra pradesh</option>
                </select>
            </div>

            <hr className=""/>

            <h5 className="fw-bold">Your ID Proof</h5>
            <p className="text-secondary">Please enter your ID Proof details.</p>
            {/* Aadhar Card and Pan Card*/}
            <div className="row mb-4 gy-4">
                <div className="col-sm-6">
                <label for="aadharNo" className="form-label fw-bold">Aadhar Card Number</label>
                <input type="text" className="form-control" id="aadharNo" placeholder="Enter Aadhar Card Number"/>
                </div>
               <div className="col-sm-6">
                <label for="panCard" className="form-label fw-bold">Pan Card <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="panCard" placeholder="Pan Card"/>
               </div>
            </div>

             <hr className=""/>
            
            <h5 className="fw-bold">Set Your Password</h5>
            <p className="text-secondary">Required to login to your account.</p>
             <div className="row mb-4 gy-4">
                <div className="col-sm-6">
                <label for="password" className="form-label fw-bold">Password <span className="text-danger">*</span></label>
                <input type="password" className="form-control" id="password" placeholder="Enter Aadhar Number"/>
                <p className="mt-2 mb-0"><span>Password must include:</span> <span className="text-primary">*At least 6 characters, 1 uppercase letter (A-Z), 1 lowercase letter (a-z), 1 number (0-9), and 1 special symbol (!, @, #, $, %, &, ).</span></p>

                </div>
               <div className="col-sm-6">
                <label for="confirmPassword" className="form-label fw-bold">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" placeholder="Pan Card"/>
               </div>
            </div>
            {/* Next Button */}
            <button className="btn btn-primary col-2 text-center fw-bold">Next</button>
       </form>
    </section>
  )
}

export default UpdateProfile
