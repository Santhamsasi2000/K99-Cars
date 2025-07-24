import { useFormik } from "formik"
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const SignUpForm = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const controls = useAnimation();

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

    // Scroll to form on mount
    useEffect(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      controls.start("visible");
      }, [controls]);

    // Animation Variant
   const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
     <motion.section 
      className="p-3 p-sm-4 p-md-5 d-flex flex-column align-items-center w-100"
      initial="hidden"
      animate={controls}
      variants={fadeInUp}>
       <motion.h2 className="primary-title mb-4"
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: 0.2, ease: "easeOut"}}>Become a dealer</motion.h2>
       <motion.div className="card-bg p-3 p-sm-5 rounded-3 shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
       >
         <h5 className="primary-second-title">Create Your Account</h5>
         <p>Fill in the details below to get started.</p>
         <form onSubmit={formik.handleSubmit}>
          {/* First and Last names */}
          <div className="row mb-4 gy-4">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label fw-bold">First Name<span className="ms-2 secondary-color">*</span></label>
              <motion.input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <small className="text-danger fw-semibold">{formik.errors.firstName}</small>
              )}
            </div>
            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label fw-bold">Last Name<span className="ms-2 secondary-color">*</span></label>
              <motion.input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <small className="text-danger fw-semibold">{formik.errors.lastName}</small>
              )}
            </div>
          </div>
          {/* pan card */}
          <div className="mb-4">
            <label htmlFor="panCard" className="form-label fw-bold">Pan Card<span className="ms-2 secondary-color">*</span></label>
            <motion.input
              type="text"
              className="form-control"
              id="panCard"
              name="panCard"
              placeholder="Pan Card"
              value={formik.values.panCard}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            {formik.touched.panCard && formik.errors.panCard && (
              <small className="text-danger fw-semibold">{formik.errors.panCard}</small>
            )}
          </div>
          {/* State and Mobile Number */}
          <div className="row mb-4 gy-4">
            <div className="col-sm-6">
              <label htmlFor="state" className="form-label fw-bold">State<span className="ms-2 secondary-color">*</span></label>
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
              <label htmlFor="mobileNo" className="form-label fw-bold">
                Mobile Number<span className="ms-2 secondary-color">*</span></label>
              <motion.input
                type="tel"
                className="form-control"
                id="mobileNo"
                name="mobileNo"
                placeholder="Mobile Number"
                value={formik.values.mobileNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
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
            <label className="form-check-label fw-bold text-decoration-underline" htmlFor="acceptTerms">
              I accept the Terms and Conditions
            </label>
            {formik.touched.acceptTerms && formik.errors.acceptTerms && (
              <small className="text-danger d-block fw-semibold">{formik.errors.acceptTerms}</small>
            )}
           </div>
           {/* Send OTP - btn*/}
           <motion.button 
           type="submit" 
           className="primary-btn px-4 py-2"
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           transition={{ duration: 0.2 }}>
            Send OTP
           </motion.button>
         </form>

       </motion.div>
    </motion.section>
  )
}

export default SignUpForm
