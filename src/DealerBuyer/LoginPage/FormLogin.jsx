import { MdOutlineLogin } from "react-icons/md"
import { NavLink } from "react-router-dom"
import { FaLock, FaUser } from "react-icons/fa"
import { useFormik } from "formik"
import * as Yup from "yup";

const FormLogin = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            rememberMe: false,
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Please enter your username or email"),
            password: Yup.string().required("Please enter your password"),
        }),
        onSubmit: (values) => {
            console.log("Login Form Values:", values);
            // handle login logic here
        },
    });

  return (
    <section>
       <div className="d-flex flex-column align-items-center">
        <div className="card w-100 overflow-hidden" style={{maxWidth: "500px"}}>
          <div className="d-flex align-items-center justify-content-center py-2 gap-2 bg-primary text-white fw-bold">
            <MdOutlineLogin className="fs-5"/>
            <p className="mb-0">Dealer/Buyer Login</p>
          </div>
          <form className="p-3" onSubmit={formik.handleSubmit}>
                {/* UserName */}
                <div>
                    <label htmlFor="userName" class="form-label">Username or Email</label>
                    <div className="input-group mb-1">
                        <span className="input-group-text"><FaUser /></span>
                        <input type="text" 
                         className="form-control" 
                         placeholder="Username" 
                         id="userName"
                         name="username"
                         value={formik.values.username}
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}/>
                    </div>
                </div>
                {
                    formik.touched.username && formik.errors.username && (
                        <small className="text-danger fw-semibold">{formik.errors.username}</small>
                    )
                }

                {/* Password */}
                <div className="mt-3">
                <label htmlFor="password" class="form-label">Password</label>
                <div className="input-group mb-1">
                    <span className="input-group-text"><FaLock /></span>
                    <input type="text" 
                    className="form-control" 
                    placeholder="Password" 
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                </div>
                </div>
                {
                    formik.touched.password && formik.errors.password && (
                        <small className="text-danger">{formik.errors.password}</small>
                    )
                }

                {/* Remember Me */}
                <div class="form-check my-3">
                <input class="form-check-input" 
                type="checkbox" 
                id="rememberMe"
                name="rememberMe"
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}/>
                <label class="form-check-label" htmlFor="rememberMe">
                        Remember me
                </label>
                </div>

                {/* Login Button */}
                <button type="submit" className="btn btn-primary fw-semibold w-100"><MdOutlineLogin className="me-2 fs-5"/>Login</button>
                <div className="border border-top border-1 my-3 w-100"></div>

                {/* Forgot Password*/}
                <div className="d-flex flex-column align-items-center">
                <NavLink className="mb-2">Forgot your password?</NavLink>
                <div className="d-flex gap-2">
                    <span>Don't have an account?</span>
                    <NavLink>Register here</NavLink>
                </div>
                </div>
          </form>
        </div>
       </div>
    </section>
  )
}

export default FormLogin
