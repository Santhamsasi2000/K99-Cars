import { MdManageAccounts, MdOutlineAccessTimeFilled } from 'react-icons/md';
import './MyAccount.css';
import { FaUser } from 'react-icons/fa';
import AccountInformation from './AccountInformation';
import ChangePassword from './ChangePassword';
import BiddingActivity from './BiddingActivity/BiddingActivity';
import WalletBalance from './WalletBalance';
import AccountStatus from './AccountStatus';
import MyStatistics from './MyStatistics';

const MyAccount = () => {
  return (
    <section className='p-3 p-sm-4 p-md-5'>
      <header className='text-primary d-flex align-items-center gap-1'>
        <MdManageAccounts className='fs-1'/>
        <h2 className='fs-3 mb-0 fw-bold'>My Account & Wallet</h2>
      </header>
      <p className='text-secondary'>Manage your profile, wallet, and auction activity</p>
      
      {/* Account Information */}
      <div className="row gy-4 gy-sm-5 mb-5">
        <div className="col-lg-8">
           <AccountInformation/>
        </div>
        <div className='col-lg-4'>
          <div className='row gy-4 gy-sm-5'>
            <div className='col-sm-6 col-lg-12'>
                <WalletBalance/>
            </div>
            <div className='col-sm-6 col-lg-12'>
                <AccountStatus/>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password*/}
      <div className="row gy-4 gy-sm-5">
        <div className="col-lg-8">
           <ChangePassword/>
        </div>
        <div className='col-lg-4'>
          <MyStatistics/>
        </div>
      </div>

      {/* Recent Bidding Activity*/}
      <div className="row gy-5">
        <div className="col-lg-8">
           <BiddingActivity/>
        </div>
      </div>
    </section>
  )
}

export default MyAccount
