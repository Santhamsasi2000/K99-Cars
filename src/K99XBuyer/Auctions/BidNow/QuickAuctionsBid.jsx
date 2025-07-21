import { BsLightningChargeFill } from "react-icons/bs"
import { FaEye, FaShare } from "react-icons/fa"

const QuickAuctionsBid = () => {
  return (
     <section className="border rounded-2 overflow-hidden mb-5">
        <div className="bg-light">
        <p className="fw-bold mb-0 d-flex align-items-center gap-2 fs-5 py-2 px-3">
            <BsLightningChargeFill className="fs-5"/>
            <span>Quick Auctions</span>
        </p>
        </div>
        <div className="border-top border-2 "></div>
        <div className="p-3">
          <button className="btn btn-outline-warning w-100 mb-2 border-2">Set Auto Bid Limit</button>
          <button className="btn btn-outline-info w-100 mb-2 border-2"><FaEye className="me-1"/>Add to Watchlist</button>
          <button className="btn btn-outline-secondary w-100 mb-2 border-2"><FaShare className="me-1"/>Share Auction</button>
        </div>
    </section>
  )
}

export default QuickAuctionsBid
