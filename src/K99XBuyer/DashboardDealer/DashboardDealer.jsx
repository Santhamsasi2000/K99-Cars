import { FaCheckCircle, FaTachometerAlt } from "react-icons/fa";
import "./DashboardDealer.css";
import { FaGaugeHigh } from "react-icons/fa6";
import StatsCard from "./StatsCard";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";
import EndingSoon from "./EndingSoon";
import Notifications from "./Notifications";

const DashboardDealer = () => {
  return (
    <section className="p-3 p-sm-4 p-md-5">
      <header className="d-flex align-items-center gap-2 mb-2">
        <FaGaugeHigh className="buyer-title green-color"/>
        <h2 className="mb-0 green-color buyer-title">Dealer Dashboard</h2>
      </header>
      <p className="text-secondary mb-4">Welcome back! Here's what's happening with your account.</p>
       {/* Account Activated Message */}
       <div className="sky-bg-50 shadow-sm rounded-2 p-3 d-flex flex-column flex-md-row align-items-center gap-2">
          <span className="d-flex align-items-center gap-2"> 
            <FaCheckCircle className="fs-5 green-color"/>
            <span className="fw-bold fs-5 green-color">Account Activated!</span> 
          </span>
          <span>You can now participate in auctions and place bids.</span>
       </div>
       {/* Statscard */}
       <StatsCard/>
       {/* Quick Actions */}
       <QuickActions/>
       <div className="row gy-5">
          <div className="col-lg-8">
            <RecentActivity/>
          </div>
          <div className="col-lg-4">
            {/* Ending Soon */}
            <EndingSoon/>
            {/* Notifications */}
            <Notifications/>
          </div>
       </div>
    </section>
  )
}

export default DashboardDealer
