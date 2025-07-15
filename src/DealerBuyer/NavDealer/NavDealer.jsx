// import "./NavDealer.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaCarAlt, FaUser } from "react-icons/fa";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const NavDealer = () => {
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
    <nav className="navbar navbar-expand-md bg-light p-3 p-sm-4">
      <div className="container-fluid p-0">
        {/* Brand */}
        <div className="d-flex align-items-center gap-2">
          <FaCarAlt className="fs-5" />
          <h1 className="fs-5 mb-0 fw-bold">K99X</h1>
        </div>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0 bg-transparent"
          type="button"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <RxCross1 className="fs-4 text-dark" />
          ) : (
            <RxHamburgerMenu className="fs-4 text-dark" />
          )}
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse mt-3 mt-md-0 ms-md-5" id="navbarNavDropdown">
          <ul className="navbar-nav d-flex gap-md-4">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeMenu}>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/auctions" onClick={closeMenu}>
                Auctions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-account" onClick={closeMenu}>
                My Account
              </NavLink>
            </li>
          </ul>

          {/* Dealer Info */}
          <ul className="navbar-nav ms-auto mt-2 mt-md-0">
            <li className="nav-item dropdown d-flex align-items-center gap-2">
              <FaUser className="text-secondary" />
              <span
                className="dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                John Dealer
              </span>
              {/* Optional dropdown menu */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavDealer;
