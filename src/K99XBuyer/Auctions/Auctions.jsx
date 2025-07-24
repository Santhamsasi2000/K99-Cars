import { FaGavel } from "react-icons/fa"
import FilterAuction from "./FilterAuction"
import LiveAuction from "./LiveAuction"

const Auctions = () => {
  return (
    <section className="p-3 p-sm-4 p-md-5">
      <header className='d-flex align-items-center gap-2 mb-2'>
        <FaGavel className='primary-title'/>
        <h2 className='mb-0 primary-title'>Live Auctions</h2>
      </header>
      <p className='text-secondary'>Browse and bid on available vehicles</p>
      {/* Choose the Car*/}
      <div className="pb-5">
        <FilterAuction/>
      </div>
      {/* Live Auction */}
      <div className="pt-5">
        <LiveAuction/>
      </div>
    </section>
  )
}

export default Auctions
