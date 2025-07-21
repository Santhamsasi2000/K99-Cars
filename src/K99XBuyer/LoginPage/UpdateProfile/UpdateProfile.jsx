import { FaUserCircle } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PasswordInput from "./PasswordInput";
import NavLogin from "../NavLogin";
import FooterBuyer from "../../FooterBuyer";

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
    <NavLogin/>
    <section className="p-3 p-sm-4 p-md-5 d-flex flex-column align-items-center w-100">
      <div className="p-4 mb-4 bg-light d-flex justify-content-between align-items-center w-100">
        <p className="fw-bold mb-0 text-center">Please update your profile</p>
        <FaUserCircle className="text-secondary fs-4" />
      </div>
      {/* Form - Update Profile */}
      <form className="p-4 shadow rounded-2 w-100" onSubmit={formik.handleSubmit}>
        <h5 className="fw-bold">Basic Details</h5>
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

        <hr />

        <h5 className="fw-bold">Your ID Proof</h5>
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

        <hr/>

        <h5 className="fw-bold">Set Your Password</h5>
        <p className="text-secondary">
          Required to login to your account.
        </p>

        <div className="row mb-4 gy-4">
          <div className="col-sm-6">
            <label className="form-label fw-bold">Password <span className="ms-1 text-danger">*</span></label>
            <PasswordInput
             placeholder="Enter Your Password"
             name="password"
             value={formik.values.password}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}/>
            <small className="text-primary">
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

        <button type="submit" className="px-5 btn btn-primary text-center fw-bold">
          Next
        </button>
      </form>
    </section>
    <FooterBuyer/>
    </>
  );
};

export default UpdateProfile;
