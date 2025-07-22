import { FaCarAlt } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import {motion} from "framer-motion"
import "./FooterBuyer.css";

const MotionLink = motion(NavLink);

const FooterBuyer = () => {
  return (
    <motion.footer className="mt-5"
     initial={{ opacity: 0, y:50 }}
     whileInView={{ opacity:1, y:0 }}
     transition={{ duration: 0.6, ease: "easeOut"}}>
      <div className="border"></div>
      <div className="navbar-bg d-flex flex-column flex-xl-row gap-3 gap-xl-0 justify-content-around p-3 align-items-center">
        <motion.div className="d-flex flex-column flex-sm-row flex-xl-column align-items-start gap-2 gap-sm-3 gap-xl-1"
          initial={{ opacity: 0, x: -20}}
          whileInView={{ opacity: 1, x:0 }}
          transition={{ duration: 0.6 }}>
            <MotionLink
            to="/"
            className="d-flex align-items-center gap-2 text-decoration-none secondary-color"
            whileHover={{scale: 1.05}}
            transition={{ type: "spring", stiffness: 300 }}>
              <FaCarAlt className="fs-5" />
              <h1 className="fs-5 mb-0 bold-900">K99X</h1>
            </MotionLink>
            <p className="mb-0 text-dark">Professional vehicle auction platform connecting dealers, vendors, and customers.</p>
        </motion.div>
        <motion.p className="mb-0 text-dark"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ delay: 0.3 }}>
          Copyright © 2025 Kars99 Private Limited. All Rights Reserved.
        </motion.p>
      </div>
    </motion.footer>
  )
}

export default FooterBuyer
