import { FaCarAlt, FaCaretDown, FaUser } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import "./LoginPage.css";

const NavLogin = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center px-5 py-3 bg-light">
       <div className="d-flex align-items-center gap-2">
         <FaCarAlt className="fs-5"/>
         <h1 className="fs-5 mb-0 fw-bold">K99X</h1>
         <NavLink className="home-link text-secondary mb-0 ms-3 ms-sm-4 text-decoration-none" to="/">Home</NavLink>
       </div>
       <div className="d-none d-sm-flex gap-2 align-items-center">
         <FaUser />
         <p className="mb-0">Login</p>
         <FaCaretDown />
       </div>
       <div className="d-block d-sm-none">
         <FaUser className="fs-5 mb-1"/>
       </div>
    </nav>
  )
}

export default NavLogin
