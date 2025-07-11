import "./Navbar.css";
import Menus from "./Menus";

// import { IoCallOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="py-4 px-3 px-lg-5" style={{ backgroundColor: "#FFFBEB"}}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-4 gap-lg-5 align-items-center">
          <Menus/>
          <NavLink className="d-flex align-items-center gap-2 text-decoration-none" to="/">
            <LazyLoadImage className="home-logo" src="/Home/k99x-new-logo.webp" threshold={200} effect="blur"/>
            <h1 className="fs-4 mb-0 text-dark" style={{fontWeight: "900"}}>K99X</h1>
          </NavLink>
        </div>
        {/* MD size to xxl size */}
        <div className="d-md-flex gap-5 d-none align-items-center">
          <a className="fw-bold text-dark text-decoration-none mt-1" style={{cursor: "pointer"}}>Become a K99 Buyer</a>
          <a href="mailto:contact@k99x.com"  
             className="d-flex align-items-center text-dark text-decoration-none" style={{fontWeight: "900", cursor:"pointer"}}>
            <span>contact@k99x.com</span> 
            <IoIosMail className="fs-3 ms-2"/>
          </a>
          <button className="d-flex align-items-center border-0 rounded-pill btn btn-dark px-4 py-3" style={{fontWeight: "900"}}>SIGN IN</button>
        </div>
        {/* XS-size to SM-size */}
        <div className="d-flex gap-3 gap-sm-4 align-items-center d-md-none">
            <a className="fw-bold text-dark" href="mailto:contact@k99x.com" style={{backgroundColor: "inherit"}}><IoIosMail className="fs-2"/></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
