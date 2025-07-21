import { NavLink } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6"
import VehicleDetails from "./VehicleDetails"
import CarDetails from "./CarDetails"
import AuctionStatus from "./AuctionStatus"
import QuickAuctionsBid from "./QuickAuctionsBid"
import LiveBidHistory from "./LiveBidHistory"
import NavLogin from "../../LoginPage/NavLogin"
import FooterBuyer from "../../FooterBuyer"

const BidNow = () => {
  return (
    <>
     <NavLogin/>
     <section className="p-3 p-sm-4 p-md-5">
      <NavLink to="/nav-dashboard/auctions"><button type="button" className="btn btn-outline-secondary"><FaArrowLeftLong className="me-2"/>Back to Auctions</button></NavLink>
      {/* Car Details */}
      <CarDetails/>
   
      <div className="row">
        <div className="col-lg-8">
          {/* Current Auction Status */}
          <AuctionStatus/>
          {/* Vehicle Details */}
          <VehicleDetails/>
        </div>
        <div className="col-lg-4">
          {/* Live Bid History */}
          <LiveBidHistory/>
          {/* Quick Auctions */}
          <QuickAuctionsBid/>
        </div>
      </div>
     </section>
     <FooterBuyer/>
    </>
  )
}

export default BidNow
