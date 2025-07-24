import { FaCheckCircle, FaTachometerAlt } from "react-icons/fa";
import "./DashboardDealer.css";
import { FaGaugeHigh } from "react-icons/fa6";
import StatsCard from "./StatsCard";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";
const DashboardDealer = () => {
  return (
    <section className="p-3 p-sm-4 p-md-5">
      <header className="d-flex align-items-center gap-2 mb-2">
        <FaGaugeHigh className="primary-title"/>
        <h2 className="mb-0 primary-title">Dealer Dashboard</h2>
      </header>
      <p className="text-secondary mb-4">Welcome back! Here's what's happening with your account.</p>
       {/* Account Activated Message */}
       <div className="shadow-sm rounded-2 p-3 card-bg d-flex flex-column flex-md-row align-items-center gap-1">
          <span className="d-flex align-items-center gap-2"> 
            <FaCheckCircle className="fs-5 primary-second-title"/>
            <span className="fw-bold fs-5 primary-second-title">Account Activated!</span> 
          </span>
          <span>You can now participate in auctions and place bids.</span>
       </div>
       {/* Statscard */}
       <StatsCard/>
       {/* Quick Actions */}
       <QuickActions/>
       {/* Recent Activity */}
       <RecentActivity/>
    </section>
  )
}

export default DashboardDealer
