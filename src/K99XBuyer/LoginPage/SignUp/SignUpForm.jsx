import { useFormik } from "formik"
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const SignUpForm = () => {
  const navigate = useNavigate(); // for redirecting after validation

  // ✅ Validation Schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    panCard: Yup.string()
      .required("PAN card is required")
      .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format (e.g. ABCDE1234F)"),
    state: Yup.string().required("Please select a state"),
    mobileNo: Yup.string()
      .required("Mobile number is required")
      .matches(/^[6-9]\d{9}$/, "Enter valid 10-digit Indian mobile number"),
    acceptTerms: Yup.bool().oneOf([true], "You must accept the terms"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      panCard: "",
      state: "",
      mobileNo: "",
      acceptTerms: false,
      },
      validationSchema,
      onSubmit: (values) => {
        console.log(values);
        navigate("/otp-verification"); // go to next page
      },
    });

  return (
     <section className="p-3 p-sm-4 p-md-5 d-flex flex-column align-items-center w-100">
       <h2 className="bold-900 text-center mb-4">Become a dealer</h2>
       <div className="card p-4">
         <h5 className="fw-bold">Create Your Account</h5>
         <p className="text-secondary">Fill in the details below to get started.</p>
         <form onSubmit={formik.handleSubmit}>
          {/* First and Last names */}
          <div className="row mb-4 gy-4">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label fw-bold">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <small className="text-danger fw-semibold">{formik.errors.firstName}</small>
              )}
            </div>
            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label fw-bold">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <small className="text-danger fw-semibold">{formik.errors.lastName}</small>
              )}
            </div>
          </div>
          {/* pan card */}
          <div className="mb-4">
            <label htmlFor="panCard" className="form-label fw-bold">Pan Card</label>
            <input
              type="text"
              className="form-control"
              id="panCard"
              name="panCard"
              placeholder="Pan Card"
              value={formik.values.panCard}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.panCard && formik.errors.panCard && (
              <small className="text-danger fw-semibold">{formik.errors.panCard}</small>
            )}
          </div>
          {/* State and Mobile Number */}
          <div className="row mb-4 gy-4">
            <div className="col-sm-6">
              <label htmlFor="state" className="form-label fw-bold">State</label>
              <select
                className="form-select"
                id="state"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select the State</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Karnataka">Karnataka</option>
              </select>
              {formik.touched.state && formik.errors.state && (
                <small className="text-danger fw-semibold">{formik.errors.state}</small>
              )}
            </div>
            <div className="col-sm-6">
              <label htmlFor="mobileNo" className="form-label fw-bold">Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                id="mobileNo"
                name="mobileNo"
                placeholder="Mobile Number"
                value={formik.values.mobileNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.mobileNo && formik.errors.mobileNo && (
                <small className="text-danger fw-semibold">{formik.errors.mobileNo}</small>
              )}
            </div>
          </div>
          {/*Check Box - Accept Terms  */}
           <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={formik.values.acceptTerms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label className="form-check-label fw-bold text-secondary text-decoration-underline" htmlFor="acceptTerms">
              I accept the Terms and Conditions
            </label>
            {formik.touched.acceptTerms && formik.errors.acceptTerms && (
              <small className="text-danger d-block fw-semibold">{formik.errors.acceptTerms}</small>
            )}
           </div>
           {/* Send OTP - btn*/}
           <button type="submit" className="btn btn-primary d-block w-100 mb-4">Send OTP</button>
         </form>

       </div>
    </section>
  )
}

export default SignUpForm
