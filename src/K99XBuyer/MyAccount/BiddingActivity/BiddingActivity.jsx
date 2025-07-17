import { FaFileInvoice, FaGavel, FaHistory } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const BiddingActivity = () => {
  return (
     <div className="card overflow-hidden mt-5">
      <div className="bg-light">
        <div className="d-flex flex-column flex-sm-row gap-3 gap-sm-0 align-items-start 
        align-items-sm-center justify-content-between py-2 px-3">
            <p className="fw-bold mb-0 d-flex align-items-center gap-2 fs-5">
                <FaHistory className="fs-4"/>
                Recent Bidding Activity
            </p>
            <button className="btn btn-outline-primary border-2">View All</button>
        </div>
        <div className="border-top border-2 "></div>
      </div>
      <div className="table-responsive d-md-none">
       <table className="table mx-3 my-4">
        <thead>
            <tr>
                <th className="bold-900">Vehicle</th>
                <th className="bold-900">My Bid</th>
                <th className="bold-900">Status</th>
                <th className="bold-900">Date</th>
                <th className="bold-900">Action</th>
            </tr>
        </thead>
        
        {
            recentBids.map(({id, vehicle, vin, bid, status, statusBg, date, action, actionIcon: Icon, actionStyle}) => (
            <tbody>
                <tr key={id} className="mb-2 ">
                    <td>
                        <p className="bold-900 mb-1">{vehicle}</p>
                        <p className="text-secondary">VIN: {vin}</p>
                    </td>
                    <td className="text-success fw-bold">{bid}</td>
                    <td>
                        <span className={`text-white fw-bold rounded-2 d-inline-block ${statusBg} py-1 px-3`}>{status}</span>
                    </td>
                    <td>{date}</td>
                    <td>
                        <span className={`border border-2 ${actionStyle} d-inline-flex py-1 px-3 rounded-2 gap-1 align-items-center`}><Icon/>{action}</span>
                    </td>
                </tr>
                {/* <div className="border-top border-2 w-100"></div> */}
            </tbody>
            ))
        }
       </table>
      </div>
      <div className="d-none d-md-block">
       <table className="table mx-3 my-4">
        <thead>
            <tr>
                <th className="bold-900">Vehicle</th>
                <th className="bold-900">My Bid</th>
                <th className="bold-900">Status</th>
                <th className="bold-900">Date</th>
                <th className="bold-900">Action</th>
            </tr>
        </thead>
        
        {
            recentBids.map(({id, vehicle, vin, bid, status, statusBg, date, action, actionIcon: Icon, actionStyle}) => (
            <tbody>
                <tr key={id} className="mb-2 ">
                    <td>
                        <p className="bold-900 mb-1">{vehicle}</p>
                        <p className="text-secondary">VIN: {vin}</p>
                    </td>
                    <td className="text-success fw-bold">{bid}</td>
                    <td>
                        <span className={`text-white fw-bold rounded-2 d-inline-block ${statusBg} py-1 px-3`}>{status}</span>
                    </td>
                    <td>{date}</td>
                    <td>
                        <span className={`border border-2 ${actionStyle} d-inline-flex py-1 px-3 rounded-2 gap-1 align-items-center`}><Icon/>{action}</span>
                    </td>
                </tr>
                {/* <div className="border-top border-2 w-100"></div> */}
            </tbody>
            ))
        }
       </table>
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
    statusBg: "bg-warning",
    date: "Mar 20, 2024",
    action: "Rebid",
    actionIcon: FaGavel,
    actionStyle: "border-primary text-primary"
  },
  {
    id: 2,
    vehicle: "2021 Toyota Camry LE",
    vin: "4T1G11AK6MU123456",
    bid: "$22,300",
    status: "Won",
    statusBg: "bg-success",
    date: "Mar 18, 2024",
    action: "Invoice",
    actionIcon: FaFileInvoice,
    actionStyle: "border-info text-info"
  },
  {
    id: 3,
    vehicle: "2020 Ford Explorer XLT",
    vin: "1FM5K8D8XLGA12345",
    bid: "$31,500",
    status: "Lost",
    statusBg: "bg-danger",
    date: "Mar 15, 2024",
    action: "Ended",
    actionIcon: IoMdClose,
    actionStyle: "border-secondary text-secondary"
  },
];
