import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";
import { FaWhatsapp } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import Menus from "./Menus";
import { IoCallOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav className="py-4 px-3 px-sm-4 px-md-5" style={{ backgroundColor: "#FFFBEB"}}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-3 gap-sm-4 align-items-center">
          <Menus/>
          <h1 className="fs-4 mb-0" style={{fontWeight: "900"}}>K99</h1>
        </div>
        <div className="d-md-flex gap-5 d-none align-items-center">
          <a className="fw-bold text-dark text-decoration-none mt-1" style={{cursor: "pointer"}}>Become a K99 Buyer</a>
          <a className="d-flex align-items-center text-dark text-decoration-none" style={{fontWeight: "900", cursor:"pointer"}}>
            <span className="mt-1">+91-8556550134</span> 
            <IoCallOutline className="fs-4 ms-2"/>
          </a>
          <button className="d-flex align-items-center border-0 rounded-pill btn btn-dark px-4 py-3" style={{fontWeight: "900"}}>SIGN IN</button>
        </div>

          <div className="d-flex gap-3 gap-sm-4 align-items-center d-md-none">
            <a className="fw-bold text-dark" style={{backgroundColor: "inherit"}}><IoCallOutline className="fs-2"/></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
