import { NavLink, useNavigate } from "react-router-dom"
import { FaLock, FaUser } from "react-icons/fa"
import { useFormik } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"

const PasswordLogin = () => {
  const navigate = useNavigate()
  // Animation
  const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Please enter your username or email"),
      password: Yup.string().required("Please enter your password")
       .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Must be 6+ chars with A-Z, a-z, 0-9 & symbol"
     ),
    }),
    onSubmit: (values) => {
      navigate("/update-details")
    },
  })

  return (
    <motion.form 
      onSubmit={formik.handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="form-container">
      {/* Username */}
      <motion.div className="mb-3"
        variants={fadeInUp} 
        custom={0}>
        <label htmlFor="email" className="form-label fw-bold">
          Email
        </label>
        <div className="input-group">
          <span className="input-group-text secondary-color">
            <FaUser />
          </span>
          <motion.input
            type="text"
            id="email"
            name="email"
            className="form-control" 
            placeholder="Enter your Email"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
        {formik.touched.email && formik.errors.email && (
          <p className="text-danger mt-2">{formik.errors.email}</p>
        )}
      </motion.div>

      {/* Password */}
      <motion.div className="mb-3"
         variants={fadeInUp} custom={1}>
        <label htmlFor="password" className="form-label fw-bold">
          Password
        </label>
        <div className="input-group">
          <span className="input-group-text secondary-color">
            <FaLock />
          </span>
          <motion.input
            type="password"
            id="password"
            name="password"
            className="form-control" 
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
        {formik.touched.password && formik.errors.password && (
          <p className="text-danger mt-2">{formik.errors.password}</p>
        )}
      </motion.div>

      {/* Remember Me */}
      <motion.div className="form-check mb-4" variants={fadeInUp} custom={2}>
        <input
          className="form-check-input"
          type="checkbox"
          id="rememberMe"
          name="rememberMe"
          checked={formik.values.rememberMe}
          onChange={formik.handleChange}
        />
        <label className="form-check-label" htmlFor="rememberMe">
          Remember me
        </label>
      </motion.div>

      {/* Login Button & Forgot */}
      <div
        className="d-flex align-items-center gap-3 gap-sm-4">
        <motion.button
          type="submit"
          className="primary-btn px-5 py-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >Login</motion.button>
        <NavLink to="/forgot-password" className="secondary-color">
          Forgot your password?
        </NavLink>
      </div>
    </motion.form>
  )
}

export default PasswordLogin
