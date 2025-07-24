import { HiLightningBolt } from "react-icons/hi"
import { FaSearch, FaEye, FaPlus, FaDownload} from "react-icons/fa";
import { FaChartBar, FaCircleInfo } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const QuickActions = () => {
  const [showReports, setShowReports] = useState(false);
  const [showWatchlist, setShowWatchlist] = useState(false);

  return (
    <>
    <section className="my-5 rounded-2 shadow overflow-hidden">
      <p className="navbar-bg secondary-color fw-bold mb-0 py-2 px-3 fs-5">
        <HiLightningBolt className="fs-4 me-1"/>
        Quick Actions
      </p>
      <div className="card-bg p-3">
        <div className="row gy-4">
          <div className="col-sm-6 col-md-3">
            <NavLink to="/nav-dashboard/auctions" 
            className="w-100 d-flex justify-content-center 
            align-items-center gap-2 secondary-outline-btn">
              <FaSearch/>
              Browse Auctions
            </NavLink>
          </div>
          <div className="col-sm-6 col-md-3">
            <button onClick={()=> setShowWatchlist(true)}
             className="w-100 secondary-outline-btn d-flex justify-content-center align-items-center gap-2">
                <FaEye />
              My Watchlist
            </button>
          </div>
          <div className="col-sm-6 col-md-3">
            <NavLink to="/nav-dashboard/my-account" 
            className="w-100 secondary-outline-btn d-flex 
            justify-content-center align-items-center gap-2 py-2">
              <FaPlus />
              Add Funds
            </NavLink>
          </div>
          <div className="col-sm-6 col-md-3">
            <button onClick={()=> setShowReports(true)} className="secondary-outline-btn w-100 d-flex justify-content-center align-items-center gap-2">
              <FaChartBar />
              Reports
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Show Reports */}
    {
      showReports && (
      <div className="pop-up" onClick={()=>setShowReports(false)}>
        <div className="card shadow-sm pop-up-card" onClick={(e) => e.stopPropagation()}>
          <div className="d-flex justify-content-between align-items-center p-3">
            <h6 className="mb-0 fw-bold fs-5">Download Reports</h6>
            <i className="text-secondary fs-5" onClick={()=>setShowReports(false)}><RxCross1/></i>
          </div>
          <div className="border-top border-2"></div>
          <div className="p-3"> 
            <div className="card">
                <p className="d-flex gap-2 align-items-center p-3 mb-0"><FaDownload />Bidding History</p>
                <div className="border-top border-2"></div>
                <p className="d-flex gap-2 align-items-center p-3 mb-0"><FaDownload />Won Auctions</p>
                <div className="border-top border-2"></div>
                <p className="d-flex gap-2 align-items-center p-3 mb-0"><FaDownload />Payment History</p>
            </div>
          </div>
        </div>
      </div>
      )
    }

    {/* Show Reports */}
    {
      showWatchlist && (
      <div className="pop-up" onClick={()=>setShowWatchlist(false)}>
        <div className="card shadow-sm pop-up-card" onClick={(e) => e.stopPropagation()}>
          <div className="d-flex justify-content-between align-items-center p-3">
          <h6 className="mb-0 fw-bold fs-5">My Watchlist</h6>
          <i className="text-secondary fs-5" onClick={()=>setShowWatchlist(false)}><RxCross1/></i>
          </div>
          <div className="border-top border-2"></div>
          <div className="p-3">
            <p className="text-secondary">Track vehicles you're interested in bidding on.</p>
            <div className="card bg-info bg-opacity-25 border-info">
                <p className="d-flex gap-2 align-items-center p-3 mb-0">
                  <FaCircleInfo />
                  Your watchlist is empty. Browse auctions to add vehicles to your watchlist.
                </p>
            </div>
          </div>
        </div>
      </div>
      )
    }
    </>
  )
}

export default QuickActions