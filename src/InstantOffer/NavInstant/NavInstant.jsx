import "./NavInstant.css";
import { IoCallOutline, IoReload } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdLogin } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const NavInstant = () => {
  const [carmenu, setCarmenu] = useState(false);
  const [smallMenu, setSmallMenu] = useState(false);

  const handleMenuClick = () =>{
      if(window.innerWidth < 769)
      {
        setSmallMenu(true);
      }
      else
      {
        const dropdown = document.getElementById("desktopDropdownMenu");
        dropdown.classList.toggle("show");
      }
  };
  return (
    <>
      <nav className="nav-instant">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-4 gap-sm-4 align-items-center">
            <div className="dropdown">
              <button className="menu-instant-btn" type="button"
              onClick={handleMenuClick} aria-expanded="false">
                  <RxHamburgerMenu/>
              </button>
              <div id="desktopDropdownMenu" className="dropdown-menu p-4 rounded-4 mt-5 shadow">
                  <li><a className="dropdown-item" href="#">Help center</a></li>
                  <div className="px-3">
                    <hr/>
                  <div className="d-flex align-items-center mb-3">
                    <p className="dropdown-item fs-6">Talk to a human</p>
                    <p className="mb-0 fs-6">+91-6384379814</p>
                  </div>
                  <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                    <button className="instant-nav-btn light-btn dropdown-item py-3">Sign in <MdLogin className="fs-4"/></button>
                    <button className="instant-nav-btn yellow-btn dropdown-item py-3">Get an offer <FiArrowUpRight className="fs-4"/></button>
                  </div>
                  </div>
              </div>
            </div>  
            <h1 className="fw-bold fs-4 mb-0"><NavLink to="/" className="text-white text-decoration-none">K99</NavLink></h1>
          </div>
          <div className="d-md-flex align-items-center gap-5 d-none">
            <a className="fw-bold text-white text-decoration-none mt-1" style={{cursor: "pointer"}}>Become a K99 Buyer</a>
            <a className="d-flex align-items-center text-white text-decoration-none" style={{fontWeight: "900", cursor:"pointer"}}>
              <span className="mt-1">+91-8556550134</span> 
              <IoCallOutline className="fs-4 ms-2"/>
            </a>
            <button className="sign-in border-0 rounded-pill px-4 py-3 text-white fw-bold">Sign in</button>
          </div>

          <div className="d-sm-block d-md-none d-none">
          <a className="d-flex align-items-center text-white text-decoration-none" style={{fontWeight: "900", cursor:"pointer"}}>
              <span className="mt-1">+91-6384379814</span> 
              <IoCallOutline className="fs-4 ms-2"/>
            </a>
          </div>

          <div className="d-sm-none d-flex gap-3 align-items-center ">
            <button className="sign-in border-0 rounded-circle px-2 py-2 text-white fw-bold"><IoCallOutline className="fs-4"/></button>
            <button className="sign-in border-0 rounded-circle px-2 py-2 text-white fw-bold" onClick={()=>setCarmenu(true)}>
              <FaCarSide className="fs-4"/>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Slide Menu Panel */}
        {carmenu && (
        <div className="slide-panel shadow d-block d-sm-none">
          <nav className="py-3 py-sm-4 px-3 px-sm-4 px-md-5 border-bottom">
          <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-4 gap-sm-4 align-items-center">
            <div className="dropdown">
                <button style={{color: "#575757"}} className="menu-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                onClick={()=> setSmallMenu(true)}>
                    <RxHamburgerMenu/>
                </button>
                <div className="dropdown-menu p-4 rounded-4 mt-5 shadow">
                    <li><a className="dropdown-item" href="#">Help center</a></li>
                    <div className="px-3">
                      <hr/>
                    <div className="d-flex align-items-center mb-3">
                      <p className="dropdown-item fs-6">Talk to a human</p>
                      <p className="mb-0 fs-6">+91-6384379814</p>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                      <button className="instant-nav-btn light-btn dropdown-item py-3">Sign in <MdLogin className="fs-4"/></button>
                      <button className="instant-nav-btn yellow-btn dropdown-item py-3">Get an offer <FiArrowUpRight className="fs-4"/></button>
                    </div>
                    </div>
                </div>
            </div> 
            <h1 className="fw-bold fs-4 mb-0">K99</h1>
          </div>

          <div className="d-sm-none d-flex gap-3 align-items-center ">
          <button className="slide-btn border-0 rounded-circle px-2 py-2"><IoCallOutline className="fs-4"/></button>
          <button className="slide-btn border-0 rounded-circle px-2 py-2" onClick={()=>setCarmenu(false)}>
            <IoMdClose className="fs-4"/>
          </button>
          </div>
          </div>
          </nav>

          <ul className="list-group list-group-flush p-3">
            <li className="list-group-item fw-bold pb-3">Vehicle</li>
            <li className="list-group-item text-secondary fw-bold pb-3">Ownership</li>
            <li className="list-group-item text-secondary fw-bold border-bottom pb-3">Condition</li>
          </ul>

         {/* Start Over - Button */}
          <div className="py-3 d-flex justify-content-center">
            <button className="text-center fw-bold border-0 bg-white text-primary d-flex align-items-center gap-2"><IoReload className="fs-4"/>Start over</button>
          </div>
        </div>
        )}

      {/* small Hamburger - Navbar */}
      {
        smallMenu && (
        <div className="small-menu shadow d-block d-md-none">
          <nav className="py-3 py-sm-4 px-3 px-sm-4 px-md-5 border-bottom">
          <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-4 gap-sm-4 align-items-center">
            <div>
                <button style={{color: "#575757"}} className="menu-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                onClick={()=> setSmallMenu(false)}>
                    <IoMdClose/>
                </button>
               
            </div> 
            <h1 className="fw-bold fs-4 mb-0">K99</h1>
          </div>

           <div className="d-none d-sm-block d-md-none">
          <a className="d-flex align-items-center text-dark text-decoration-none" style={{cursor:"pointer"}}>
              <span className="mt-1">+91-8775865692</span> 
              <IoCallOutline className="fs-4 ms-2"/>
            </a>
          </div>

          <div className="d-sm-none d-flex gap-3 align-items-center ">
          <button className="slide-btn border-0 rounded-circle px-2 py-2"><IoCallOutline className="fs-4"/></button>
          <button className="slide-btn border-0 rounded-circle px-2 py-2" onClick={()=>setCarmenu(false)}>
            <FaCarSide className="fs-4"/>
          </button>
          </div>
          </div>
          </nav>

          <div className="p-5">
            <a className="text-decoration-none fs-5" style={{ color: "rgba(33,33,33,.5)"}} href="#">Help center</a>
             <hr className="mb-3"/>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <p className="small" style={{ color: "rgba(33,33,33,.5)"}}>Talk to a human</p>
              <p className="small">+91-6384379814</p>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center gap-3">
              <button className="instant-nav-btn light-btn dropdown-item py-2 fs-6">Sign in <MdLogin className="fs-4"/></button>
              <button className="instant-nav-btn yellow-btn dropdown-item py-2 fs-6">Get an offer <FiArrowUpRight className="fs-4"/></button>
            </div>
          </div>
        </div>
        )
      }
    </>
  )
}

export default NavInstant
