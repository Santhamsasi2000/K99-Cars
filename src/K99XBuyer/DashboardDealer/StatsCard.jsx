import { FaGavel, FaHandHoldingUsd, FaTrophy, FaWallet } from "react-icons/fa";

const StatsCard = () => {
  return (
    <section className="row mt-4 mt-sm-5 gy-4">
      {
        DataStatsCard.map(({ id, bgColor, icon: Icon, iconColor, value, label}) => (
         <div className="col-sm-6 col-md-3" key={id}>
          <div 
          className={`p-3 rounded-3 shadow d-flex flex-column align-items-center ${bgColor}`}>
              <Icon className={`fs-3 mb-3 ${iconColor}`}/>
              <h5 className={`bold-900 fs-5 ${iconColor}`}>{value}</h5>
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
    "bgColor": "green-bg-50 green-border-200",
    "icon": FaGavel,
    "iconColor": "skyBlue-600",
    "value": "23",
    "label": "Active Auctions"
  },
  {
    "id": 2,
    "bgColor": "sky-bg-50 skyBlue-border-200",
    "icon": FaHandHoldingUsd, 
    "iconColor": "green-color",
    "value": "12",
    "label": "My Bids"
  },
  {
    "id": 3,
    "bgColor": "green-bg-50 green-border-200",
    "icon": FaTrophy, 
    "iconColor": "skyBlue-600",
    "value": "5",
    "label": "Won Auctions"
  },
  {
    "id": 4,
    "bgColor": "sky-bg-50 skyBlue-border-200",
    "icon": FaWallet,
    "iconColor": "green-color",
    "value": "$25000",
    "label": "Wallet Balance"
  }
]

