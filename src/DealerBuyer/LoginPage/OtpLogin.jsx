import { NavLink } from "react-router-dom"

const OtpLogin = () => {
  return (
    <form>
      <div>
        <label for="mobileNo" class="form-label fw-bold">Mobile Number</label>
        <input type="tel" class="form-control" id="mobileNo" placeholder="Mobile Number"/>
      </div>
      <button className="btn btn-primary w-100 d-block">Sign In</button>
      <div className="border border-top border-1 my-3 w-100"></div>
      <div className="d-flex gap-2">
        <span>Don't have an account?</span>
        <NavLink>Register here</NavLink>
      </div>
    </form>
  )
}

export default OtpLogin
