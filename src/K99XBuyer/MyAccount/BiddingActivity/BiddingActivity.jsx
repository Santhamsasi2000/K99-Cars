import { BsCalendarDateFill } from "react-icons/bs";
import { FaArrowRight, FaFileInvoice, FaGavel, FaHistory } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const BiddingActivity = () => {
  return (
     <div className="mt-5">
      <p className="mb-3 primary-second-title mb-0 
      d-flex align-items-center justify-content-center gap-2 fs-4">
        <FaHistory className="fs-5"/>
        Recent Bidding Activity
      </p>
      {/* Grid */}
      <div className="row gy-4">
        {
         recentBids.map(({ id, vehicle, vin, bid, status, date, action, actionIcon: Icon}) => (
          <div className="col-sm-6 col-lg-4" key={id}>
            <div className="card-bg p-3 h-100 rounded-2 shadow primary-border">
              <p className="secondary-color fw-bold d-flex align-items-center gap-1">
                <BsCalendarDateFill />
                {date}
              </p>
              <p className="primary-title fs-6 mb-2">{vehicle}</p>
              <p className="text-secondary text-center">Vin: {vin}</p>
              <div className="d-flex justify-content-between">
                <p className="fs-6 primary-second-title d-flex align-items-center gap-1">
                  <FaSackDollar />
                  {bid}
                </p>
                <p className="secondary-bg text-white px-2 rounded-1">{status}</p>
              </div>
              <div className="d-flex justify-content-center">
                <p className="d-inline-flex align-items-center gap-1
                secondary-color auction-border px-2 rounded-1"><Icon/> {action}</p>
              </div>
            </div>
          </div>
         ))
        }
      </div>
      {/* Button */}
      <div className="d-flex justify-content-center mt-4">
        <button className="primary-btn px-4 py-2 d-flex align-items-center gap-2">View All <FaArrowRight /></button>
      </div>
     </div>
  )
}

export default BiddingActivity;

const recentBids = [
  {
    id: 1,
    vehicle: "2022 Honda Civic LX",
    vin: "1HGBH41JXMN109186",
    bid: "$18,200",
    status: "Outbid",
    date: "Mar 20, 2024",
    action: "Rebid",
    actionIcon: FaGavel,
  },
  {
    id: 2,
    vehicle: "2021 Toyota Camry LE",
    vin: "4T1G11AK6MU123456",
    bid: "$22,300",
    status: "Won",
    date: "Mar 18, 2024",
    action: "Invoice",
    actionIcon: FaFileInvoice,
  },
  {
    id: 3,
    vehicle: "2020 Ford Explorer XLT",
    vin: "1FM5K8D8XLGA12345",
    bid: "$31,500",
    status: "Lost",
    date: "Mar 15, 2024",
    action: "Ended",
    actionIcon: IoMdClose,
  },
];
