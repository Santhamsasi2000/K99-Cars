import { GiBackwardTime } from "react-icons/gi"

const LiveBidHistory = () => {
  return (
     <div className="card overflow-hidden mb-5">
        <div className="bg-light">
        <div className="d-flex align-items-lg-center justify-content-between py-2 px-3">
            <p className="fw-bold mb-0 d-flex align-items-center fs-5">
                <GiBackwardTime className="fs-4 me-1"/>
                Live Bid History
            </p>
            <p className="bg-primary text-white fw-bold px-3 py-1 rounded-2 mb-0">Live</p>
        </div>
            <div className="border-top border-2 "></div>
        </div>
        <div style={{maxHeight: "350px", overflowY: "auto",}}>
          {/* First 5 entries - show normally */}
          {
            bidHistory.map(({ amount, bidder, time },index) => (
              <>
                <div className="p-3 d-flex justify-content-between align-items-center" 
                key={index}>
                    <div>
                        <p className="mb-1 fw-bold fs-5">{amount}</p>
                        <p className="mb-0 text-secondary">{bidder}</p>
                    </div>
                    <p className="text-secondary">{time}</p>
                </div>
                <div className="border-top border-2"></div>
              </>
            ))
          }

          {/* Remaining Entries -Scrollable
          <div style={{overflowY: "auto", maxHeight: "200px"}}>
          {
            remaining.map(({ amount, bidder, time },index) => (
              <div key={index + 5}>
                <div className="p-3 d-flex justify-content-between align-items-center">
                    <div>
                        <p className="mb-1 fw-bold fs-5">{amount}</p>
                        <p className="mb-0 text-secondary">{bidder}</p>
                    </div>
                    <p className="text-secondary">{time}</p>
                </div>
                <div className="border-top border-2"></div>
              </div>
            ))
          }
          </div> */}
        </div>
      </div>
  )
}

export default LiveBidHistory

const bidHistory = [
  {
    amount: "$19,447",
    bidder: "Bidder #953",
    time: "just now",
  },
  {
    amount: "$18,641",
    bidder: "Bidder #662",
    time: "just now",
  },
  {
    amount: "$18,500",
    bidder: "Bidder #127",
    time: "2 min ago",
  },
  {
    amount: "$18,200",
    bidder: "You",
    time: "5 min ago",
  },
  {
    amount: "$18,000",
    bidder: "Bidder #089",
    time: "8 min ago",
  },
  {
    amount: "$17,800",
    bidder: "Bidder #201",
    time: "10 min ago",
  },
  {
    amount: "$17,600",
    bidder: "Bidder #344",
    time: "13 min ago",
  },
  {
    amount: "$17,300",
    bidder: "Bidder #012",
    time: "15 min ago",
  },
  {
    amount: "$17,000",
    bidder: "Bidder #709",
    time: "18 min ago",
  },
  {
    amount: "$16,800",
    bidder: "Bidder #888",
    time: "20 min ago,"
  }
]

