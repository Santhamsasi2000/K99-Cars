import "./Navbar.css";
import Menus from "./Menus";

// import { IoCallOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="py-4 px-3 px-lg-5" style={{ backgroundColor: "#FFFBEB"}}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-3 gap-lg-4 align-items-center">
          <Menus/>
          <NavLink className="d-flex align-items-center gap-1 text-decoration-none" to="/">
            {/* <LazyLoadImage className="home-logo" src="/Home/k99x-new-logo.webp" threshold={200} effect="blur"/> */}
            <h1 className="fs-3 mb-0" style={{fontWeight: "900", color: "#1e85ff"}}>K99X</h1>
          </NavLink>
        </div>

        {/* MD size to xxl size */}
        <div className="d-none d-md-flex gap-5 align-items-center">
          <a className="text-dark text-decoration-none d-flex align-items-center gap-1" 
          style={{fontWeight: "900", cursor:"pointer"}}>Become a K99X Buyer <FaArrowRight /></a>
          <a href="mailto:contact@k99x.com"  
             className="d-flex align-items-center text-dark text-decoration-none" style={{fontWeight: "900", cursor:"pointer"}}>
            <span>contact@k99x.com</span> 
            <IoIosMail className="fs-3 ms-2"/>
          </a>
          <button className="d-flex align-items-center border-0 rounded-pill btn btn-dark px-4 py-2" style={{fontWeight: "900"}}>SIGN IN</button>
        </div>

        {/* SM Size */}
        <div className="d-none d-sm-flex d-md-none gap-4 align-items-center">
          <a className="text-dark text-decoration-none d-flex align-items-center gap-1" 
          style={{fontWeight: "900", cursor:"pointer"}}>Become a K99X Buyer <FaArrowRight /></a>
          <a className="fw-bold text-dark" href="mailto:contact@k99x.com" style={{backgroundColor: "inherit"}}><IoIosMail className="fs-2"/></a>
          <button className="d-flex align-items-center border-0 rounded-pill btn btn-dark px-3 px-md-4 py-2"
           style={{fontWeight: "900"}}>SIGN IN</button>
        </div>

        {/* XS Size */}
        <div class="dropdown d-block d-sm-none">
          <button class="bg-transparent border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           <FaUserCircle className="fs-2"/>
          </button>
          <ul class="dropdown-menu rounded-4 mt-3 ">
            <li>
              <a className="dropdown-item text-dark 
              d-flex align-items-center gap-1 fs-6" 
             >Become a K99X Buyer <FaArrowRight /></a>
            </li>
            <li>
              <a href="mailto:contact@k99x.com"  
                className="dropdown-item fs-6 d-flex align-items-center text-dark text-decoration-none">
                <span>contact@k99x.com</span> 
                <IoIosMail className="fs-3 ms-2"/>
              </a>
            </li>
            <li className="mt-2">
              <button className="mx-auto px-5 py-2 d-flex justify-content-center align-items-center border-0 rounded-pill btn btn-dark" style={{fontWeight: "900"}}>SIGN IN</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
