import { FaArrowRight, FaEye, FaGavel, FaTrophy } from "react-icons/fa"
import { MdOutlineAccessTimeFilled } from "react-icons/md"
const RecentActivity = () => {
  return (
    <div className="overflow-hidden shadow rounded-3">
      <div className="green-bg-200 skyBlue-600 d-flex align-items-center justify-content-between py-2 px-3">
            <p className="green-color fw-bold mb-0 d-flex align-items-center fs-5">
                <MdOutlineAccessTimeFilled className="fs-4 me-1"/>
                Recent Activity
            </p>
            <p className="mb-0 fw-semibold">Last 7 days</p>
      </div>
      
      <div className="p-3 green-bg-50">
        {/* Bid Placed */}
          <div className="mb-4 d-flex flex-column flex-sm-row justify-content-between">
            <div>
                <p className="fw-bold text-start mb-1 d-flex align-items-center gap-2"><FaGavel className="fs-5 green-color"/> Bid placed on 2022 Honda Civic</p>
                <p className="text-secondary mb-2">Your bid: $18,500 – Currently leading</p>
            </div>
            <div>
                <p className="sky-bg-600 text-white d-inline fw-bold px-2 py-1 rounded-4">2 hours ago</p>
            </div>
          </div>

        {/* Won Action */}
          <div className="mb-4 d-flex flex-column flex-sm-row justify-content-between">
            <div>
                <p className="fw-bold text-start mb-1 d-flex align-items-center gap-2">
                <FaTrophy className="fs-5 green-color"/> 
                  Won auction for 2021 Toyota Camry
              </p>
                <p className="text-secondary mb-2">Final bid: $22,300</p>
            </div>
            <div>
                <p className="sky-bg-600 text-white d-inline fw-bold px-2 py-1 rounded-4">1 day ago</p>
            </div>
          </div>

        {/* Added 2023*/}
          <div className="mb-4 d-flex flex-column flex-sm-row justify-content-between">
            <div>
                <p className="fw-bold text-start mb-1 d-flex align-items-center gap-2">
                  <FaEye className="fs-5 green-color"/> 
                  Added 2023 Ford F-150 to watchlist
                </p>
                <p className="text-secondary mb-2">Auction starts tomorrow</p>
            </div>
            <div>
                <p className="sky-bg-600 text-white d-inline fw-bold px-2 py-1 rounded-4">2 days ago</p>
            </div>
          </div>

        {/* Button */}
        <div className="d-flex justify-content-center mt-4">
          <button className="green-darkBg border-0 rounded-4 text-white fw-bold px-4 py-2 d-flex align-items-center gap-2">View All Activity <FaArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default RecentActivity
