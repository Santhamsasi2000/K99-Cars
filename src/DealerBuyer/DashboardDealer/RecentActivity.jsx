import { FaEye, FaGavel, FaTrophy } from "react-icons/fa"
import { IoMdNotifications } from "react-icons/io"
import { MdOutlineAccessTimeFilled } from "react-icons/md"
import { FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

const RecentActivity = () => {
  return (
    <section className="row gy-5">
      <div className="col-lg-8">
        <div className="card overflow-hidden">
          <div className="bg-light">
            <div className="d-flex align-items-center justify-content-between py-2 px-3">
                <p className="fw-bold mb-0 d-flex align-items-center fs-5">
                    <MdOutlineAccessTimeFilled className="fs-4 me-1"/>
                    Recent Activity
                </p>
                <p className="text-secondary mb-0 fw-semibold">Last 7 days</p>
            </div>
                <div className="border-top border-2 "></div>
          </div>
          <div className="p-3">
            {/* Bid Placed */}
            <div>
              <div className="d-flex flex-column flex-md-row justify-content-between">
                <div>
                   <p className="bold-900 mb-1 d-flex align-items-center gap-2"><FaGavel className="fs-5 text-success"/> Bid placed on 2022 Honda Civic</p>
                   <p className="text-secondary">Your bid: $18,500 – Currently leading</p>
                </div>
                <div>
                    <p className="btn btn-success rounded-pill fw-bold py-1">2 hours ago</p>
                </div>
              </div>
              <div className="border-top border-2 my-1"></div>
            </div>
            {/* Won Action */}
            <div className="mt-2">
              <div className="d-flex flex-column flex-md-row justify-content-between">
                <div>
                   <p className="bold-900 mb-1 d-flex align-items-center gap-2">
                    <FaTrophy className="fs-5 text-warning"/> 
                     Won auction for 2021 Toyota Camry
                  </p>
                   <p className="text-secondary">Final bid: $22,300</p>
                </div>
                <div>
                    <p className="btn btn-warning rounded-pill fw-bold py-1 text-white">1 day ago</p>
                </div>
              </div>
              <div className="border-top border-2"></div>
            </div>
            {/* Added 2023*/}
            <div className="mt-2">
              <div className="d-flex flex-column flex-md-row justify-content-between">
                <div>
                   <p className="bold-900 mb-1 d-flex align-items-center gap-2">
                     <FaEye className="text-info fs-5"/> 
                     Added 2023 Ford F-150 to watchlist
                   </p>
                   <p className="text-secondary">Auction starts tomorrow</p>
                </div>
                <div>
                    <p className="btn btn-info rounded-pill fw-bold py-1 text-white">2 days ago</p>
                </div>
              </div>
            </div>
            {/* Button */}
            <div className="text-center mt-3">
                <button className="btn btn-outline-primary fw-semibold">View All Activity</button>
            </div >
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        {/* Ending Soon */}
        <div className="card mb-5 overflow-hidden">
          <div className="bg-light">
            <p className="py-2 px-3 fw-bold mb-0 d-flex align-items-center">
                <MdOutlineAccessTimeFilled className="fs-5 me-1 text-danger"/>
                Ending Soon
            </p>
            <div className="border-top border-2 "></div>
          </div>
          <div className="p-3">
             {/* Red Color */}
             {
                endingSoon.map(({ id, car, price, timeleft, timeColor, barBackground, barPercentage })=>(
                <div className="mb-4" key={id}>
                   <p className="bold-900 mb-1">{car}</p>
                   <div className="d-flex justify-content-between">
                        <p className="text-secondary mb-0">{price}</p>
                        <p className={`mb-0 ${timeColor}`}>{timeleft}</p>
                   </div>
                   <div className="progress mt-1" style={{ height: '5px' }}>
                        <div
                        className={`progress-bar ${barBackground}`}
                        role="progressbar"
                        style={{ width: barPercentage}} // adjust percentage based on time
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        ></div>
                   </div>
                </div>
                ))
             }
             {/* Button */}
             <div className="text-center mt-3">
                <button className="btn btn-outline-primary fw-semibold">View All</button>
             </div >
          </div>
        </div>

        {/* Notifications */}
        <div className="card overflow-hidden">
          <div className="bg-light">
            <p className="py-2 px-3 fw-bold mb-0 d-flex align-items-center fs-5">
                <IoMdNotifications className="fs-4 me-1 text-primary"/>
                Notifications
            </p>
            <div className="border-top border-2 "></div>
          </div>
          <div className="p-3">
            {
                notifications.map(({ id, icon: Icon, content, borderColor, bgColor }) => (
                 <div key={id} className={`${borderColor, bgColor} py-2 px-3 rounded-2 mb-3`}>
                    <p className="mb-0 small d-flex align-items-center gap-2"><Icon/>{content}</p>
                 </div>
                ))
            }
          </div>
        <div/>
        </div>
      </div>
    </section>
  )
}

export default RecentActivity

const endingSoon = [
    {
        id: 1,
        car: "2020 BMW X5",
        price: "Current: $35,200",
        timeleft: "2h 15m left",
        timeColor: "text-danger",
        barBackground: "bg-danger",
        barPercentage: "80%",
    },
    {
        id: 2,
        car: "2019 Audi A6",
        price: "Current: $28,900",
        timeleft: "4h 32m left",
        timeColor: "text-warning",
        barBackground: "bg-warning",
        barPercentage: "60%",
    },
];

const notifications = [
    {
        id: 1,
        icon: FaExclamationTriangle,
        content: "Payment required for recent auction win",
        borderColor: "border-warning",
        bgColor: "bg-warning bg-opacity-25",
    },
    {
        id: 2,
        icon: FaInfoCircle,
        content: "New vehicles matching your preferences",
        borderColor: "border-info ",
        bgColor: "bg-info bg-opacity-25",
    },
];
