import { HiLightningBolt } from "react-icons/hi"
import { FaSearch, FaEye, FaPlus, FaDownload} from "react-icons/fa";
import { FaChartBar, FaCircleInfo } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const QuickActions = () => {
  const [showReports, setShowReports] = useState(false);

  return (
    <>
    <section className="border my-5 rounded-2 border-2">
      <div className="bg-light">
        <p className="fw-bold mb-0 py-2 px-3"><HiLightningBolt className="fs-5 me-1"/>Quick Actions</p>
        <div className="border-top border-2 "></div>
      </div>
      <div className="row p-3 gy-4">
        <div className="col-sm-6 col-md-3">
          <button className="d-block w-100 btn btn-outline-primary d-flex justify-content-center align-items-center gap-2">
            <FaSearch/>
            Browse Auctions
          </button>
        </div>
        <div className="col-sm-6 col-md-3">
          <button className="d-block w-100 btn btn-outline-success d-flex justify-content-center align-items-center gap-2">
              <FaEye />
            My Watchlist
          </button>
        </div>
        <div className="col-sm-6 col-md-3">
          <button className="d-block w-100 btn btn-outline-info d-flex justify-content-center align-items-center gap-2">
            <FaPlus />
            Add Funds
          </button>
        </div>
        <div className="col-sm-6 col-md-3">
          <button onClick={()=> setShowReports(true)} className="d-block w-100 btn btn-outline-secondary d-flex justify-content-center align-items-center gap-2">
            <FaChartBar />
            Reports
          </button>
        </div>
      </div>
    </section>

    {/* Show Reports */}
    {
      showReports && (
      <div className="pop-up">
        <div className="card shadow-sm pop-up-card">
          <div className="d-flex justify-content-between align-items-center p-3">
            <h6 className="mb-0 fw-bold fs-5">Download Reports</h6>
            <i className="text-secondary fs-5" onClick={()=>setShowReports(false)}><RxCross1/></i>
          </div>
          <div className="border-top border-2"></div>
          <div className="p-3"> 
            <div className="card">
                <p className="d-flex gap-2 align-items-center p-3 mb-0"><FaDownload />Bidding History</p>
                <div className="border-top border-2"></div>
                <p className="d-flex gap-2 align-items-center p-3 mb-0"><FaDownload />Won Auctions</p>
                <div className="border-top border-2"></div>
                <p className="d-flex gap-2 align-items-center p-3 mb-0"><FaDownload />Payment History</p>
            </div>
          </div>
        </div>
      </div>
      )
    }
    </>
       
      
      
       
      // My Watchlist
      //  <div className="card m-5 shadow-sm">
      //   <div className="d-flex justify-content-between align-items-center p-3">
      //     <h6 className="mb-0 fw-bold fs-5">My Watchlist</h6>
      //     <i className="text-secondary fs-5"><RxCross1/></i>
      //   </div>
      //   <div className="border-top border-2"></div>
      //   <div className="p-3">
      //     <p className="text-secondary">Track vehicles you're interested in bidding on.</p>
      //     <div className="card bg-info bg-opacity-25 border-info">
      //         <p className="d-flex gap-2 align-items-center p-3 mb-0">
      //           <FaCircleInfo />
      //           Your watchlist is empty. Browse auctions to add vehicles to your watchlist.
      //         </p>
      //     </div>
      //   </div>
      //  </div>
  )
}

export default QuickActions