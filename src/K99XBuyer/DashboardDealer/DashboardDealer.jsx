import { FaCheckCircle, FaTachometerAlt } from "react-icons/fa";
import "./DashboardDealer.css";
import { FaGaugeHigh } from "react-icons/fa6";
import StatsCard from "./StatsCard";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";
const DashboardDealer = () => {
  return (
    <section className="p-3 p-sm-4 p-md-5">
      <header className="text-primary d-flex align-items-center gap-1 mb-2">
        <FaGaugeHigh className="fs-2"/>
        <h2 className="mb-0 fw-bold">Dealer Dashboard</h2>
      </header>
      <p className="text-secondary mb-4">Welcome back! Here's what's happening with your account.</p>
       {/* Account Activated Message */}
       <div className="d-flex align-items-center gap-3 border border-success 
            rounded-2 p-3 bg-success bg-opacity-25">
          <FaCheckCircle className="fs-5"/>
          <p className="mb-0"><span className="fw-bold fs-5">Account Activated! </span> <span className="d-block d-md-inline"> You can now participate in auctions and place bids.</span></p>
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
