// import { NavLink, useNavigate } from "react-router-dom"
// import { useFormik } from "formik"
// import * as Yup from "yup";

// const OtpLogin = () => {
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       mobileNo: "",
//     },
//     validationSchema: Yup.object({
//       mobileNo: Yup.string()
//       .required("Mobile number is required")
//       .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
//        }),
//     onSubmit: (values) => {
//       navigate("/otp-verification");
//     },
//   })

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div className="mb-4">
//         <label for="mobileNo" class="form-label fw-bold">Mobile Number</label>
//         <input type="tel" 
//           name="mobileNo" 
//           class="form-control" 
//           id="mobileNo" 
//           placeholder="Mobile Number"
//           value={formik.values.mobileNo}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}/>
//           {
//             formik.touched.mobileNo && formik.errors.mobileNo && (
//                 <small className="text-danger fw-semibold">{formik.errors.mobileNo}</small>
//             )
//           }
//       </div>
//       {/* Submit Button */}
//       <button type="submit" className="primary-btn w-100 d-block py-2">Sign In</button>
//       <div className="border border-top border-1 my-3 w-100"></div>
//       {/* Register here */}
//       <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2 gap-sm-3">
//         <span>Don't have an account?</span>
//         <NavLink className="secondary-color" to="/sign-up">Register here</NavLink>
//       </div>
//     </form>
//   )
// }

// export default OtpLogin

import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup";
import { motion } from "framer-motion";

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
    <motion.form 
       onSubmit={formik.handleSubmit}
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.4 }}
       className="form-container"
      >
        <motion.div className="mb-4"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.1 }}>
          <label htmlFor="mobileNo" className="form-label fw-bold">Mobile Number</label>
          <motion.input type="tel" 
            name="mobileNo" 
            className="form-control" 
            id="mobileNo" 
            placeholder="Mobile Number"
            value={formik.values.mobileNo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}/>
            {
              formik.touched.mobileNo && formik.errors.mobileNo && (
                  <p className="text-danger mt-2">{formik.errors.mobileNo}</p>
              )
            }
        </motion.div>
        {/* Submit Button */}
        <motion.button 
          type="submit" 
          className="primary-btn px-5 py-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Send OTP</motion.button>
    </motion.form>
  )
}

export default OtpLogin


