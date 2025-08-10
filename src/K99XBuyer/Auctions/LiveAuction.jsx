import { FaStar } from "react-icons/fa"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { NavLink } from "react-router-dom"

const LiveAuction = () => {
  return (
     <section className="col-8 shadow-sm m-5">
     <div className="row gy-5 gx-0">
      <div className="col-xl-8">
        <div className="row gy-4">
          {/* Car Image */}
          <div className="col-md-4">
            <LazyLoadImage  src="/Images/Become a K99 Buyer/2007-honda-CVIC, VXI, AT.jpg"
            className="w-100 border border-dark border-2" threshold={200} effect="blur"/>
          </div>
          {/* Car Details */}
          <div className="col-md-8">
             <h3 className="text-primary bold-900">2007 Honda CIVIC, VXI, AT</h3>
            {/* Car Details */}
            <div className="d-flex gap-3 mb-2 flex-wrap">
              <p className="fw-bold fs-5 mb-0">52531.KM</p>
              <p className="fw-bold fs-5 mb-0">Petrol</p>
              <p className="fw-bold fs-5 mb-0">Manual.</p>
              <p className="fw-bold fs-5 mb-0">White.</p>
              <p className="fw-bold fs-5 mb-0">TN 31 AB</p>
            </div>
            <p className="text-secondary fw-bold">Chennai</p>
            {/* Car Conditions */}
            <div className="row gy-4 mb-4">
                <div className="col-6 col-sm-4">
                  <div className="d-flex gap-2 align-items-center justify-content-center 
                  bg-success bg-opacity-25 py-1">
                    <span className="fw-bold">Engine</span>
                    <span className="d-flex align-items-center fw-bold gap-1">4 <FaStar className="text-success"/></span>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="d-flex gap-2 align-items-center justify-content-center 
                  bg-success bg-opacity-25 py-1">
                    <span className="fw-bold">Gear Box</span>
                    <span className="d-flex align-items-center fw-bold gap-1">4 <FaStar className="text-success"/></span>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="d-flex gap-2 align-items-center justify-content-center 
                  bg-success bg-opacity-25 py-1">
                    <span className="fw-bold">Exterior</span>
                    <span className="d-flex align-items-center fw-bold gap-1">4 <FaStar className="text-success"/></span>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="d-flex gap-2 align-items-center justify-content-center 
                  bg-success bg-opacity-25 py-1">
                    <span className="fw-bold">Interior</span>
                    <span className="d-flex align-items-center fw-bold gap-1">4 <FaStar className="text-success"/></span>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="d-flex gap-2 align-items-center justify-content-center 
                  bg-success bg-opacity-25 py-1">
                    <span className="fw-bold">Electrical</span>
                    <span className="d-flex align-items-center fw-bold gap-1">4 <FaStar className="text-success"/></span>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="d-flex gap-2 align-items-center justify-content-center 
                  bg-warning bg-opacity-25 py-1">
                    <span className="fw-bold">AC</span>
                    <span className="d-flex align-items-center fw-bold gap-1">3 <FaStar className="text-warning"/></span>
                  </div>
                </div>
            </div>
            {/* price */}
            <div className="row mb-4 justify-content-center w-100">
              <div className="col-sm-4 d-flex justify-content-center justify-content-sm-start">
                <div className="d-flex flex-sm-column align-items-center gap-2">
                  <p className="fw-bold text-primary mb-0">Fair Market:</p>
                  <p className="fw-bold text-primary mb-0">₹3,65,000</p> 
                </div>
              </div>
              <div className="col-sm-4 d-flex justify-content-center justify-content-sm-start">
                <div className="d-flex flex-sm-column align-items-center gap-2">
                  <p className="fw-bold text-primary mb-0">Avg Sold Price:</p>
                  <p className="fw-bold text-primary mb-0">₹3,45,000</p> 
                </div>
              </div>
              <div className="col-sm-4 d-flex justify-content-center justify-content-sm-start">
                <div className="d-flex flex-sm-column align-items-center gap-2">
                  <p className="fw-bold text-primary mb-0">Last Month Sold:</p>
                  <p className="fw-bold text-primary mb-0">₹3,35,000</p> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-3 gx-0 bg-light justify-content-center">
          <div className="col-sm-6 col-lg-4 col-xl-3 d-flex gap-4 gap-xl-2 justify-content-center">
            <p className="bold-900">K99 Score : 88</p>
          <div>
            <p className="mb-0 fw-bold">Similar</p>
            <p className="mb-0 fw-bold">Vehicle</p>
          </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 d-flex gap-4 justify-content-center">
            <div className="d-flex flex-column align-items-center">
              <p className="mb-0 bold-900">Owner's</p>
              <p className="mb-0 bold-900">3</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <p className="mb-0 bold-900">Accidents</p>
              <p className="mb-0 bold-900">0</p>
            </div>
          </div>
          <div className="col-lg-4 col-xl-6 d-flex gap-3 gap-xl-1 justify-content-center">
            <button className="btn btn-outline-info rounded-0 bold-900">WorkBook</button>
            <button className="btn btn-outline-success rounded-0 bold-900">Rank: 2</button>
            <button className="btn btn-outline-info rounded-0 bold-900">My History</button>
          </div>
        </div>
      </div>
      <div className="col-xl-4 bg-light">
        <div className="d-flex justify-content-between">
          <span className="bold-900">Time Remaining:</span>
          <span className="bold-900 text-secondary">JUNE 12 : 4:00 PM</span>
        </div>
        <p className="text-danger bold-900 fs-5">1 hrs : 33 mins. 52 secs</p>
        <div className="bg-white d-flex flex-column align-items-center">
          <p className="fw-bold text-secondary mb-0">Current Bid:</p>
          <p className="bold-900 fs-4 mb-0">Rs. 3,55,000</p>
          <p className="bold-900 text-success fs-5">Winning</p>
          <p className="text-danger mb-0">KUWY</p>
          <p className="text-primary fw-bold">Loan Available: 80%</p>
        </div>
        <h6 className="bg-primary bg-opacity-25 p-2 fw-bold fs-5 text-center">Rs.3,60,000</h6>
        <div className="d-flex gap-3 mt-4">
          <NavLink className="w-100 btn btn-primary fs-5 bold-900">AutoBid</NavLink>
          <NavLink to="/bid-now" className="w-100 btn btn-success fs-5 bold-900 ">Bid Now</NavLink>
        </div>
      </div>
     </div>
     </section>
  )
}

export default LiveAuction
