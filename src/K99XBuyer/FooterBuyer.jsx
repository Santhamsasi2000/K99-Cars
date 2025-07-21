import { FaCarAlt } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const FooterBuyer = () => {
  return (
    <footer className="mt-5">
      <div className="border"></div>
      <div className="bg-light d-flex flex-column flex-xl-row gap-3 gap-xl-0 justify-content-around p-3 align-items-center">
        <div className="d-flex flex-column flex-sm-row flex-xl-column align-items-start gap-1 gap-sm-3 gap-xl-0">
            <NavLink to="/" className="d-flex align-items-center gap-2 text-decoration-none">
            <FaCarAlt className="fs-5" />
            <h1 className="fs-5 mb-0 fw-bold">K99X</h1>
            </NavLink>
            <p className="mb-0">Professional vehicle auction platform connecting dealers, vendors, and customers.</p>
        </div>
        <p className="text-secondary mb-0">Copyright © 2025 Kars99 Private Limited. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default FooterBuyer
