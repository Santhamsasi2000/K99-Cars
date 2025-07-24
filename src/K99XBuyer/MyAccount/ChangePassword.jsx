import { FaKey, FaLock } from "react-icons/fa"

const ChangePassword = () => {
  return (
    <>
      {/* title */}
      <h5 className="primary-second-title mb-3 d-flex align-items-center gap-2">
        <FaLock className="fs-5"/>
        <span>Change Password</span>
      </h5>
      {/* Profile Update - Form */}
      <form className="p-4 card-bg rounded-3 shadow">
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
        <button className='primary-btn px-4 py-2 d-flex align-items-center gap-2'> <FaKey className='fs-5'/>Change Password</button>
      </form>
    </>
  )
}

export default ChangePassword
