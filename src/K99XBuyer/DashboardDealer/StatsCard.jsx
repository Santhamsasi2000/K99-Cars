import { FaGavel, FaHandHoldingUsd, FaTrophy, FaWallet } from "react-icons/fa";

const StatsCard = () => {
  return (
    <section className="row mt-4 mt-sm-5 gy-4">
      {
        DataStatsCard.map(({ id, borderColor, icon: Icon, iconColor, value, label}) => (
        <div className="col-sm-6 col-md-3" key={id}>
            <div className={`p-3 card d-flex flex-column align-items-center border-2 ${borderColor}`}>
                <Icon className={`fs-3 mb-3 ${iconColor}`}/>
                <h5 className="fw-bold fs-5">{value}</h5>
                <p className="text-secondary">{label}</p>
            </div>
        </div>
        ))
      }
    </section>
  )
}

export default StatsCard

const DataStatsCard = [
  {
    "id": 1,
    "borderColor": "border-primary",
    "icon": FaGavel,
    "iconColor": "text-primary",
    "value": "23",
    "label": "Active Auctions"
  },
  {
    "id": 2,
    "borderColor": "border-success",
    "icon": FaHandHoldingUsd, 
    "iconColor": "text-success",
    "value": "12",
    "label": "My Bids"
  },
  {
    "id": 3,
    "borderColor": "border-warning",
    "icon": FaTrophy, 
    "iconColor": "text-warning",
    "value": "5",
    "label": "Won Auctions"
  },
  {
    "id": 4,
    "borderColor": "border-info",
    "icon": FaWallet,
    "iconColor": "text-info",
    "value": "$25000",
    "label": "Wallet Balance"
  }
]

