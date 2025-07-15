import { FaChartBar } from "react-icons/fa6"

const MyStatistics = () => {
  return (
   <section className="card overflow-hidden">
           <div className="bg-light">
               <p className="fw-bold mb-0 d-flex align-items-center gap-2 fs-5 py-2 px-3">
                   <FaChartBar className="fs-5"/>
                   <span>My Statistics</span>
               </p>
           </div>
           <div className="border-top border-2 "></div>
           <div className="p-3">
             <div className="d-flex justify-content-around mb-4">
                <div className="d-flex flex-column align-items-center mb-3">
                    <span className=" fs-4 fw-bold text-primary">47</span>
                    <span className="text-secondary fw-bold">Total Bids</span>
                </div>
                <div className="d-flex flex-column align-items-center mb-3">
                    <span className="fs-4 fw-bold text-success">12</span>
                    <span className="text-secondary fw-bold">Won Auctions</span>
                </div>
             </div>
              <div className="d-flex justify-content-around">
                <div className="d-flex flex-column align-items-center mb-3">
                    <span className="fs-4 fw-bold text-info">25%</span>
                    <span className="text-secondary fw-bold">Win Rate</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <span className="fs-4 fw-bold text-warning">$185K</span>
                    <span className="text-secondary fw-bold">Total Spent</span>
                </div>
              </div>
           </div>
   </section>
  )
}

export default MyStatistics
