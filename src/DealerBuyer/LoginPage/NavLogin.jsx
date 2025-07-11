import { FaCarAlt, FaCaretDown, FaUser } from "react-icons/fa"

const NavLogin = () => {
  return (
    <nav className="d-flex justify-content-between px-5 py-3 bg-light">
       <div className="d-flex align-items-center gap-2">
         <FaCarAlt className="fs-5"/>
         <h1 className="fs-5 mb-0">AutoAuction Pro</h1>
         <p className="text-secondary mb-0 ms-3">Home</p>
       </div>
       <div className="d-flex gap-2 align-items-center">
         <FaUser />
         <p className="mb-0">Login</p>
         <FaCaretDown />
       </div>
    </nav>
  )
}

export default NavLogin
