import { NavLink, useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup";

const OtpLogin = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      mobileNo: "",
    },
    validationSchema: Yup.object({
      mobileNo: Yup.string()
      .required("Mobile number is required")
      .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
       }),
    onSubmit: (values) => {
      navigate("/otp-verification");
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label for="mobileNo" class="form-label fw-bold">Mobile Number</label>
        <input type="tel" 
          name="mobileNo" 
          class="form-control" 
          id="mobileNo" 
          placeholder="Mobile Number"
          value={formik.values.mobileNo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}/>
          {
            formik.touched.mobileNo && formik.errors.mobileNo && (
                <small className="text-danger fw-semibold">{formik.errors.mobileNo}</small>
            )
          }
      </div>
      {/* Submit Button */}
      <button type="submit" className="btn btn-primary w-100 d-block">Sign In</button>
      <div className="border border-top border-1 my-3 w-100"></div>
      {/* Register here */}
      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2 gap-sm-3">
        <span>Don't have an account?</span>
        <NavLink to="/sign-up">Register here</NavLink>
      </div>
    </form>
  )
}

export default OtpLogin
