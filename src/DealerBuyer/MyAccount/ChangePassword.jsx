import { FaKey, FaLock } from "react-icons/fa"

const ChangePassword = () => {
  return (
    <div className="card overflow-hidden">
           <div className="bg-light">
               <p className="fw-bold mb-0 d-flex align-items-center gap-2 fs-5 py-2 px-3">
                   <FaLock className="fs-5"/>
                   <span>Change Password</span>
               </p>
           </div>
           <div className="border-top border-2 "></div>
           {/* Profile Update - Form */}
           <form className="p-3">
             {/* Current Password */}
             <div className="mb-4">
            <label for="password" className="form-label">Current Password</label>
            <input type="password" className="form-control" id="password" placeholder='Enter Current Password'/>
             </div>
             {/*New Password - Row  */}
             <div className='row'>
            <div className='col-sm-6'>
            <div className="mb-4">
                <label for="newPassword" className="form-label">New Password</label>
                <input type="password" className="form-control" id="newPassword" placeholder='Enter New Password'/>
            </div>
            </div>
            <div className='col-sm-6'>
            <div className="mb-4">
                <label for="confirmPassword" className="form-label">Confirm New Password</label>
                <input type="password" className="form-control" id="confirmPassword" placeholder='Enter Confirm New Password'/>
            </div>
            </div>
             </div>
             {/* Update profile - Button */}
             <button className='btn btn-warning d-flex align-items-center gap-2'> <FaKey className='fs-5'/>Change Password</button>
           </form>
    </div>
  )
}

export default ChangePassword
