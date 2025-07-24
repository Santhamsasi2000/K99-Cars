import { FaArrowRight, FaEye, FaGavel, FaTrophy } from "react-icons/fa"
import { IoMdNotifications } from "react-icons/io"
import { MdOutlineAccessTimeFilled } from "react-icons/md"
import { FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

const RecentActivity = () => {
  return (
    <section className="row gy-5">
      <div className="col-lg-8">
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
            <div className="mb-4">
              <div className="d-flex flex-column flex-sm-row justify-content-between">
                <div>
                   <p className="primary-title text-start fs-6 mb-1 d-flex align-items-center gap-2"><FaGavel className="fs-5 secondary-color"/> Bid placed on 2022 Honda Civic</p>
                   <p className="text-secondary mb-2">Your bid: $18,500 – Currently leading</p>
                </div>
                <div>
                    <p className="d-inline fw-bold secondary-color px-2 rounded-2 secondary-border">2 hours ago</p>
                </div>
              </div>
              {/* <div className="border-top border-2 my-1"></div> */}
            </div>
            {/* Won Action */}
            <div className="mb-4">
              <div className="d-flex flex-column flex-sm-row justify-content-between">
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
              {/* <div className="border-top border-2"></div> */}
            </div>
            {/* Added 2023*/}
            <div className="mb-4">
              <div className="d-flex flex-column flex-sm-row justify-content-between">
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
            </div>
            {/* Button */}
            <div className="d-flex justify-content-center mt-4">
              <button className="primary-btn px-4 py-2 d-flex align-items-center gap-2">View All Activity <FaArrowRight /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        {/* Ending Soon */}
        <div className="mb-5 overflow-hidden shadow rounded-3">
            <p className="navbar-bg secondary-color py-2 px-3 fw-bold fs-5 mb-0 d-flex align-items-center">
                <MdOutlineAccessTimeFilled className="fs-4 me-1"/>
                Ending Soon
            </p>
          <div className="p-3 card-bg">
             {/* Red Color */}
             {
                endingSoon.map(({ id, car, price, timeleft, barPercentage })=>(
                <div className="mb-4" key={id}>
                   <p className="primary-title fs-6 text-start mb-1">{car}</p>
                   <div className="d-flex justify-content-between">
                        <p className="text-secondary mb-0">{price}</p>
                        <p className="mb-0 secondary-color">{timeleft}</p>
                   </div>
                   <div className="progress mt-1" style={{ height: '5px' }}>
                        <div
                        className="progress-bar secondary-bg"
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
            <div className="d-flex justify-content-center mt-4">
              <button className="primary-btn px-4 py-2 d-flex align-items-center gap-2">View All <FaArrowRight /></button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="overflow-hidden shadow rounded-3">
          {/* Title */}
          <h5 className="navbar-bg secondary-color py-2 px-3 fw-bold mb-0 d-flex align-items-center fs-5">
              <IoMdNotifications className="fs-4 me-1"/>
              Notifications
          </h5>
          {/* COntent */}
          <div className="p-3">
            {
                notifications.map(({ id, icon: Icon, content}) => (
                 <div key={id} className="py-2 px-3 rounded-2 mb-3" style={{backgroundColor: "#dcfce7"}}>
                    <p className="mb-0 small d-flex align-items-center gap-2"><Icon className="secondary-color"/>{content}</p>
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
        barPercentage: "80%",
    },
    {
        id: 2,
        car: "2019 Audi A6",
        price: "Current: $28,900",
        timeleft: "4h 32m left",
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
