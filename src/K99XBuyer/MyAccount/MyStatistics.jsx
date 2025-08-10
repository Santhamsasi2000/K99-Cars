import { FaChartBar } from "react-icons/fa6"

const MyStatistics = () => {
  return (
   <section className="rounded-3 overflow-hidden shadow-sm">
     {/* Title */}
     <p className="green-bg-200 skyBlue-600 fw-bold mb-0 d-flex align-items-center gap-2 fs-5 py-2 px-3">
        <FaChartBar className="fs-5"/>
        <span>My Statistics</span>
     </p>
    <div className="p-3 green-bg-50">
        <div className="d-flex justify-content-around mb-4">
        <div className="d-flex flex-column align-items-center mb-3">
            <span className=" fs-4 fw-bold green-color">47</span>
            <span className="text-secondary fw-bold">Total Bids</span>
        </div>
        <div className="d-flex flex-column align-items-center mb-3">
            <span className="fs-4 fw-bold green-color">12</span>
            <span className="text-secondary fw-bold">Won Auctions</span>
        </div>
        </div>
        <div className="d-flex justify-content-around">
        <div className="d-flex flex-column align-items-center mb-3">
            <span className="fs-4 fw-bold green-color">25%</span>
            <span className="text-secondary fw-bold">Win Rate</span>
        </div>
        <div className="d-flex flex-column align-items-center">
            <span className="fs-4 fw-bold green-color">$185K</span>
            <span className="text-secondary fw-bold">Total Spent</span>
        </div>
        </div>
    </div>
   </section>
  )
}

export default MyStatistics
