import { FaCarAlt, FaCaretDown, FaUser } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion";
import "./LoginPage.css";

const MotionLink = motion(NavLink);
const NavLogin = () => {
  return (
    <motion.nav className="navbar-bg d-flex justify-content-between align-items-center px-4 px-sm-5 py-3"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >  
      {/* Logo + Home Link */}
       <motion.div className="d-flex align-items-center gap-2 secondary-color"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}>
        <motion.div
         className="cursor-pointer"
         whileHover={{ scale: 1.1 }}
         transition={{ type: "spring", stiffness: 300 }}>
          <FaCarAlt className="fs-4"/>
        </motion.div>
         {/* <LazyLoadImage className="logo" src="/Images/Logo/k99x-logo.jpg"/> */}
         <motion.h1 
          className="fs-4 bold-900 mb-0 cursor-pointer"
          whileHover={{ scale: 1.05 }}>
          K99X
         </motion.h1>
         <MotionLink
          className="home-link text-dark mb-0 ms-3 ms-sm-4 text-decoration-none" to="/"
          whileHover={{ scale: 1.05 }}>
          Home</MotionLink>
       </motion.div>

       {/* desktop Login */}
       <motion.div className="cursor-pointer d-none d-sm-flex gap-2 align-items-center text-dark"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}>
         <FaUser />
         <p className="mb-0">Login</p>
         <FaCaretDown />
       </motion.div>

       {/* Mobile Login */}
       <motion.div className="cursor-pointer d-block d-sm-none text-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.1 }}>
         <FaUser className="fs-5 mb-1"/>
       </motion.div>
    </motion.nav>
  )
}

export default NavLogin
