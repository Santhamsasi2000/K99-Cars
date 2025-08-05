import { FaArrowRight, FaEye, FaGavel, FaTrophy } from "react-icons/fa"
import { MdOutlineAccessTimeFilled } from "react-icons/md"
const RecentActivity = () => {
  return (
    <div className="overflow-hidden shadow rounded-3">
      <div className="navbar-bg d-flex align-items-center justify-content-between py-2 px-3">
            <p className="secondary-color fw-bold mb-0 d-flex align-items-center fs-5">
                <MdOutlineAccessTimeFilled className="fs-4 me-1"/>
                Recent Activity
            </p>
            <p className="mb-0 fw-semibold">Last 7 days</p>
      </div>
      
      <div className="p-3 card-bg">
        {/* Bid Placed */}
          <div className="mb-4 d-flex flex-column flex-sm-row justify-content-between">
            <div>
                <p className="primary-title text-start fs-6 mb-1 d-flex align-items-center gap-2"><FaGavel className="fs-5 secondary-color"/> Bid placed on 2022 Honda Civic</p>
                <p className="text-secondary mb-2">Your bid: $18,500 – Currently leading</p>
            </div>
            <div>
                <p className="d-inline fw-bold secondary-color px-2 rounded-2 secondary-border">2 hours ago</p>
            </div>
          </div>

        {/* Won Action */}
          <div className="mb-4 d-flex flex-column flex-sm-row justify-content-between">
            <div>
                <p className="primary-title text-start fs-6 mb-1 d-flex align-items-center gap-2">
                <FaTrophy className="fs-5 secondary-color"/> 
                  Won auction for 2021 Toyota Camry
              </p>
                <p className="text-secondary mb-2">Final bid: $22,300</p>
            </div>
            <div>
                <p className="d-inline fw-bold secondary-color px-2 rounded-2 secondary-border">1 day ago</p>
            </div>
          </div>

        {/* Added 2023*/}
          <div className="mb-4 d-flex flex-column flex-sm-row justify-content-between">
            <div>
                <p className="primary-title text-start fs-6 mb-1 d-flex align-items-center gap-2">
                  <FaEye className="fs-5 secondary-color"/> 
                  Added 2023 Ford F-150 to watchlist
                </p>
                <p className="text-secondary mb-2">Auction starts tomorrow</p>
            </div>
            <div>
                <p className="d-inline fw-bold secondary-color px-2 rounded-2 secondary-border">2 days ago</p>
            </div>
          </div>

        {/* Button */}
        <div className="d-flex justify-content-center mt-4">
          <button className="primary-btn px-4 py-2 d-flex align-items-center gap-2">View All Activity <FaArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default RecentActivity
