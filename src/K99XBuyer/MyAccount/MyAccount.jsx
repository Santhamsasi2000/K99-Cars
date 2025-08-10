import { MdManageAccounts, MdOutlineAccessTimeFilled } from 'react-icons/md';
import './MyAccount.css';
import { FaUserCircle } from 'react-icons/fa';
import AccountInformation from './AccountInformation';
import ChangePassword from './ChangePassword';
import BiddingActivity from './BiddingActivity/BiddingActivity';
import WalletBalance from './WalletBalance';
import AccountStatus from './AccountStatus';
import MyStatistics from './MyStatistics';

const MyAccount = () => {
  return (
    <section className='p-3 p-sm-4 p-md-5'>
      <header className='d-flex align-items-center gap-2'>
        <FaUserCircle className='buyer-title green-color mb-2'/>
        <h2 className='buyer-title green-color'>My Account & Wallet</h2>
      </header>
      <p className='text-secondary'>Manage your profile, wallet, and auction activity</p>
      
      {/* Grid layout */}
      <div className="row gy-5 mb-5">
        <div className="col-lg-8">
          {/* Account Information */}
           <AccountInformation/>
           {/* Change Password*/}
           <ChangePassword/>
        </div>
        <div className='col-lg-4'>
          <div className='row gy-4 gy-sm-5'>
            <div className='col-sm-6 col-lg-12'>
              {/* Wallet Balance */}
              <WalletBalance/>
              {/* Account Status */}
              <AccountStatus/>
              {/* My Statistics */}
              <MyStatistics/>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Bidding Activity*/}
      <BiddingActivity/>
    </section>
  )
}

export default MyAccount
