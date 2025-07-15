import { NavLink } from "react-router-dom"

const SignUpDealer = () => {
  return (
    <section className="p-3 p-sm-4 p-md-5 d-flex flex-column align-items-center w-100">
       <h2 className="bold-900 text-center mb-4">Become a dealer</h2>
       <div className="card p-4">
         <h5 className="fw-bold">Create Your Account</h5>
         <p className="text-secondary">Fill in the details below to get started.</p>
         <form>
            <div className="row mb-4 gy-4">
              <div class="col-sm-6">
                <label for="firstName" class="form-label fw-bold">First Name</label>
                <input type="text" class="form-control" id="firstName" placeholder="First Name"/>
              </div>
              <div class="col-sm-6">
                <label for="lastName" class="form-label fw-bold">Last Name</label>
                <input type="text" class="form-control" id="lastName" placeholder="Last Name"/>
              </div>
            </div>
            {/* Pan Card */}
             <div class="mb-4">
                <label for="panCard" class="form-label fw-bold">Pan Card</label>
                <input type="text" class="form-control" id="panCard" placeholder="Pan Card"/>
             </div>
             {/* State and Mobile Number */}
             <div className="row mb-4 gy-4">
              <div class="col-sm-6">
                <label for="mobileNo" class="form-label fw-bold">State</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select the State</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-sm-6">
                <label for="mobileNo" class="form-label fw-bold">Mobile Number</label>
                <input type="tel" class="form-control" id="mobileNo" placeholder="Mobile Number"/>
              </div>
            </div>
            {/* Terms and Conditions */}
            <div class="form-check mb-4">
                <input class="form-check-input" type="checkbox" value="" id="acceptTerms"/>
                <label class="form-check-label text-decoration-underline text-secondary fw-bold" for="acceptTerms">
                    I accept the Terms and Conditions
                </label>
            </div>
            {/* OTP Button */}
            <button className="btn btn-primary d-block w-100 mb-4">Send OTP</button>
            <div className="border border-top border-1 my-3 w-100"></div>
            <div className="d-flex gap-2 justify-content-center">
              <span>Already have an account?</span>
              <NavLink>Sign in</NavLink>
            </div>
         </form>
       </div>
    </section>
  )
}

export default SignUpDealer
