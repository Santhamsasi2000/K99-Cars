import { FaUserCircle } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PasswordInput from "./PasswordInput";
import FooterBuyer from "../../FooterBuyer/FooterBuyer";
import { motion } from "framer-motion";
import NavLogin from "../NavLogin";

const UpdateProfile = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNo: "",
      state: "",
      aadharNo: "",
      panCard: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email"),
      mobileNo: Yup.string()
        .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number")
        .required("Mobile number is required"),
      state: Yup.string().required("State is required"),
      aadharNo: Yup.string()
        .matches(/^\d{12}$/, "Aadhar must be 12 digits"),
      panCard: Yup.string()
        .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format (e.g. ABCDE1234F)")
        .required("PAN is required"),
      password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Must be 6+ chars with A-Z, a-z, 0-9 & symbol"
     ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      // Handle successful form
      console.log("Profile Updated:", values);
      navigate("/update-documents");
    },
  });

  return (
    <>
    {/* Navbar */}
    <NavLogin/>

    {/* Main */}
    <section className="tintorange-bg p-3 p-sm-4 p-md-5 d-flex flex-column align-items-center w-100">
      {/* title */}
       <motion.h2 className="blue-color title mb-4 mb-lg-5"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
       >
        Update Your Profile</motion.h2>
      {/* Form - Update Profile */}
      <form className="p-4 p-sm-5 shadow rounded-4 green-bg-50 w-100" onSubmit={formik.handleSubmit}>
        <h5 className="green-color fs-5 fw-bold mb-1">Basic Details</h5>
        <p className="text-secondary">Please update your basic details.</p>

        <div className="row mb-4 gy-4">
          <div className="col-sm-6">
            <label className="form-label fw-bold">First Name <span className="ms-1 text-danger">*</span></label>
            <input
              type="text"
              className="form-control"
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-danger">{formik.errors.firstName}</div>
            )}
          </div>
          <div className="col-sm-6">
            <label className="form-label fw-bold">Last Name <span className="ms-1 text-danger">*</span></label>
            <input
              type="text"
              className="form-control"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-danger">{formik.errors.lastName}</div>
            )}
          </div>
        </div>

        <div className="row mb-4 gy-4">
          <div className="col-sm-6">
            <label className="form-label fw-bold">Email</label>
            <input
              type="email"
              className="form-control"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>
          <div className="col-sm-6">
            <label className="form-label fw-bold">Mobile Number <span className="ms-1 text-danger">*</span></label>
            <input
              type="tel"
              className="form-control"
              {...formik.getFieldProps("mobileNo")}
            />
            {formik.touched.mobileNo && formik.errors.mobileNo && (
              <div className="text-danger">{formik.errors.mobileNo}</div>
            )}
          </div>
        </div>

        <div className="col-sm-6 mb-4">
          <label className="form-label fw-bold">State <span className="ms-1 text-danger">*</span></label>
          <select
            className="form-select"
            {...formik.getFieldProps("state")}
          >
            <option value="">Select the State</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Kerala">Kerala</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
          </select>
          {formik.touched.state && formik.errors.state && (
            <div className="text-danger">{formik.errors.state}</div>
          )}
        </div>
        
        {/* ID Proof */}
        <h5 className="green-color fs-5 fw-bold mb-1">Your ID Proof</h5>
        <p className="text-secondary">Please enter your ID Proof details.</p>

        <div className="row mb-4 gy-4">
          <div className="col-sm-6">
            <label className="form-label fw-bold">Aadhar Card Number</label>
            <input
              type="text"
              className="form-control"
              {...formik.getFieldProps("aadharNo")}
            />
            {formik.touched.aadharNo && formik.errors.aadharNo && (
              <div className="text-danger">{formik.errors.aadharNo}</div>
            )}
          </div>
          <div className="col-sm-6">
            <label className="form-label fw-bold">Pan Card <span className="ms-1 text-danger">*</span></label>
            <input
              type="text"
              className="form-control"
              {...formik.getFieldProps("panCard")}
            />
            {formik.touched.panCard && formik.errors.panCard && (
              <div className="text-danger">{formik.errors.panCard}</div>
            )}
          </div>
        </div>

        {/* Password */}
        <h5 className="green-color fs-5 fw-bold mb-1">Set Your Password</h5>
        <p className="text-secondary">Required to login to your account.</p>

        <div className="row mb-4 gy-4">
          <div className="col-sm-6">
            <label className="form-label fw-bold">Password <span className="ms-1 text-danger">*</span></label>
            <PasswordInput
             placeholder="Enter Your Password"
             name="password"
             value={formik.values.password}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}/>
            <small className="blue-color">
              At least 6 chars, A-Z, a-z, 0-9, symbol
            </small>
            {formik.touched.password && formik.errors.password && (
              <div className="text-danger">{formik.errors.password}</div>
            )}
          </div>
          <div className="col-sm-6">
            <label className="form-label fw-bold">Confirm Password <span className="ms-1 text-danger">*</span></label>
            <PasswordInput
             placeholder="Enter Confirm Password"
             name="confirmPassword"
             value={formik.values.confirmPassword}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}/>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="text-danger">{formik.errors.confirmPassword}</div>
            )}
          </div>
        </div>

        <motion.button 
          type="submit" 
          className="px-5 py-2 green-darkBg text-white text-decoration-none rounded-4 border-0" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Next
        </motion.button>
      </form>
    </section>

    {/* Footer */}
    <FooterBuyer/>
    </>
  );
};

export default UpdateProfile;
