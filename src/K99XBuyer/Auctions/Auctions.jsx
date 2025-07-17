import { FaGavel } from "react-icons/fa"
import FilterAuction from "./FilterAuction"
import LiveAuction from "./LiveAuction"

const Auctions = () => {
  return (
    <section className="p-3 p-sm-4 p-md-5">
      <header className='text-primary d-flex align-items-center gap-2 mb-3'>
        <FaGavel className='fs-3'/>
        <h2 className='fs-3 mb-0 fw-bold'>Live Auctions</h2>
      </header>
      <p className='text-secondary'>Browse and bid on available vehicles</p>
      {/* Choose the Car*/}
      <FilterAuction/>
      {/* Live Auction */}
      <LiveAuction/>
    </section>
  )
}

export default Auctions
