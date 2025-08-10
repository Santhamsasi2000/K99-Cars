// import "./NavDealer.css";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaCarAlt, FaUser } from "react-icons/fa";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import DashboardDealer from "../DashboardDealer/DashboardDealer";
import LiveAuctions from "../Auctions/Auctions";
import MyAccount from "../MyAccount/MyAccount";
import FooterBuyer from "../FooterBuyer/FooterBuyer";
import FooterDashboard from "../FooterBuyer/FooterDashboard";

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
  <>
   <nav className="sky-bg-50 navbar navbar-expand-md p-3 p-sm-4">
      <div className="container-fluid p-0">
        {/* Brand */}
        <NavLink to="/" className="secondary-color d-flex align-items-center gap-2 text-decoration-none">
          {/* <FaCarAlt className="fs-4" /> */}
          <h1 className="green-color fs-4 mb-0 bold-900">K99X</h1>
        </NavLink>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0 bg-transparent"
          type="button"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <RxCross1 className="fs-4 skyBlue-600" />
          ) : (
            <RxHamburgerMenu className="fs-4 skyBlue-600" />
          )}
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse mt-3 mt-md-0 ms-md-5" id="navbarNavDropdown">
          <ul className="navbar-nav d-flex gap-md-4">
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
   
   {/* Routes */}
   <Routes>
      {/* ✅ default route ⇒ /nav-dashboard */}
      <Route index element={<Navigate to="dealer-dashboard" replace />} />
      <Route path="dealer-dashboard" element={<DashboardDealer/>}/>
      <Route path="auctions" element={<LiveAuctions/>}/>
      <Route path="my-account" element={<MyAccount/>}/>
      {/* Optional 404 inside dashboard */} 
      <Route path="*" element={<h1 className="p-4">Page not found.</h1>} />
   </Routes>

   {/* Footer */}
   <FooterDashboard/>
  </>
  );
};

export default NavDealer;
