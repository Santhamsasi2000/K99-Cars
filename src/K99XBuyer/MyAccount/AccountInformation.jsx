import { FaUser } from 'react-icons/fa'
import { IoMdSave } from 'react-icons/io'

const AccountInformation = () => {
  return (
     <section className='mb-5'>
       {/* Title */}
        <h5 className="skyBlue-600 fw-bold mb-2 d-flex align-items-center gap-2 py-2 px-3">
            <FaUser className="fs-5"/>
            <span>Account Information</span>
        </h5>
        {/* Profile Update - Form */}
        <form className="p-4 green-bg-50 rounded-3 shadow">
            {/*Name Row  */}
            <div className='row'>
            <div className='col-sm-6'>
            <div class="mb-4">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstName" placeholder='Enter Your First Name'/>
            </div>
            </div>
            <div className='col-sm-6'>
            <div class="mb-4">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" placeholder='Enter Your Last Name'/>
            </div>
            </div>
            </div>
            {/* Email and Phone  */}
            <div className='row'>
            <div className='col-sm-6'>
            <div class="mb-4">
                <label for="email" class="form-label">Email</label>
                <input type="text" class="form-control" id="email" placeholder='Enter Your First Name'/>
            </div>
            </div>
            <div className='col-sm-6'>
            <div class="mb-4">
                <label for="mobileNo" class="form-label">Phone</label>
                <input type="text" class="form-control" id="mobileNo" placeholder='Enter Your Phone Number'/>
            </div>
            </div>
            </div>
            {/* Business Name */}
            <div className="mb-4">
            <label for="businessName" className="form-label">Business Name</label>
            <input type="text" className="form-control" id="businessName" placeholder='Enter Your Business Name'/>
            </div>
            {/* Dealer License Number */}
            <div className="mb-4">
            <label for="licenseNo" className="form-label">Dealer License Number</label>
            <input type="text" className="form-control" id="licenseNo" placeholder='Enter Your License Number'/>
            </div>
            {/* Update profile - Button */}
            <button className='green-bg text-white rounded-4 border-0 px-4 py-2 d-flex align-items-center gap-2'><IoMdSave className='fs-5'/>Update Profile</button>
        </form>
     </section>
  )
}

export default AccountInformation
