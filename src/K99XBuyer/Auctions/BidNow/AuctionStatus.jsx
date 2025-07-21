import { BsLightningChargeFill } from "react-icons/bs"
import { FaGavel, FaInfoCircle } from "react-icons/fa"

const AuctionStatus = () => {
  return (
   <section className="border rounded-2 overflow-hidden mb-5">
     <div className="bg-primary text-white">
        <p className="fw-bold mb-0 d-flex align-items-center gap-2 fs-5 py-2 px-3">
            <FaGavel className="fs-5"/>
            <span>Current Auction Status</span>
        </p>
     </div>
     <div className="p-3">
        <div className="d-flex flex-column flex-sm-row justify-content-between">
          <div className="d-flex flex-column align-items-center">
            <h6 className="fw-bold fs-4 text-success">$19,447</h6>
            <p className="text-secondary">Current Highest Bid</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <h6 className="fw-bold fs-4 text-info">23</h6>
            <p className="text-secondary">Total Bids</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <h6 className="fw-bold fs-4 text-warning">8</h6>
            <p className="text-secondary">Active Bidders</p>
          </div>
        </div>
         <div className="border border-primary rounded-2 overflow-hidden">
          <div className="bg-light">
            <p className="fw-bold mb-0 py-2 px-3">
                Place Your Bid
            </p>
          </div>
          <div className="border-top border-2 "></div>
          <form className="p-3 row gy-3">
            <div className="col-xl-6">
                <label for="bidAmount" class="form-label fw-semibold">Bid Amount ($)</label>
                <input type="email" class="form-control" id="bidAMount" placeholder="Enter bid amount"/>
                <small className="text-secondary">Minimum bid: $18,600</small>
            </div>
            <div className="col-xl-6">
               <div className="d-flex flex-column flex-sm-row gap-3 align-items-xl-end h-100 ">
                <button className="btn btn-success"><FaGavel className="me-1"/>Place Bid</button>
                <button className="btn btn-outline-primary"><BsLightningChargeFill className="me-1"/>Quick Bid + $500</button>
               </div>
            </div>
            <div className="mt-3 p-3 bg-info border-info bg-opacity-25 border rounded-2">
                <p className="mb-0">
                 <FaInfoCircle className="me-1 mb-1"/> 
                 <span className="fw-bold ">Your Current highest bid: </span>
                 $17,800 (You are currently outbid)
                </p>
            </div>
          </form>
         </div>
     </div>
    </section>
  )
}

export default AuctionStatus
