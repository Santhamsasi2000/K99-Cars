import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar) {
      navbar.classList.toggle("show");
      setMenuOpen(navbar.classList.contains("show"));
    }
  };

  const closeMenu = () => {
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
      setMenuOpen(false);
    }
  };

  return (
  <>
   <nav className="tintorange-bg navbar navbar-expand-sm p-3 p-sm-4 fixed-top">
      <div className="container-fluid p-0">
        {/* Brand */}
        <NavLink to="/" className="green-color d-flex align-items-center gap-2 text-decoration-none">
          <h1 className="fs-3 bold-900">K99X</h1>
        </NavLink>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0 bg-transparent"
          type="button"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <RxCross1 className="fs-2 blue-color"/>
          ) : (
            <RxHamburgerMenu className="fs-2 blue-color"/>
          )}
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse mt-3 mt-md-0 ms-md-5" id="navbarNavDropdown">
          {/* Menus */}
          {/* <ul className="navbar-nav d-flex gap-md-4">
            <li className="nav-item">
              <NavLink className="nav-link" to="/nav-dashboard/dealer-dashboard" onClick={closeMenu}>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nav-dashboard/auctions" onClick={closeMenu}>
                Auctions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nav-dashboard/my-account" onClick={closeMenu}>
                My Account
              </NavLink>
            </li>
          </ul> */}

          {/* Dealer Info */}
          <ul className="navbar-nav ms-auto mt-4 mt-sm-0 d-flex align-items-center gap-4">
            <li className="nav-item dropdown">
              <NavLink to="/sign-in" className="green-bg text-white common-btn px-4 py-2">Become a K99X Buyer
              </NavLink>
            </li>
            <button 
              className="d-flex align-items-center 
              gap-1 bg-transparent border-0 green-color"
             >
              Sign In<FaArrowRight />
            </button>
          </ul>
        </div>
      </div>
   </nav>
  </>
  );
};

export default NavBar;
