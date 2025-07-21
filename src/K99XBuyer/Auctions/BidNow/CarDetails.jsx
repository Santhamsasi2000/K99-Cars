import { FaCircle } from "react-icons/fa"
import { LazyLoadImage } from "react-lazy-load-image-component"

const CarDetails = () => {
  return (
    <div className="border p-2 mt-3 rounded-2 mb-5">
        <div className="row gy-4 justify-content-between align-items-center w-100">
            <div className="col-md-3 d-flex justify-content-center">
              <LazyLoadImage className="w-100" src="/Images/Become a K99 Buyer/2007-honda-CVIC, VXI, AT.jpg" 
              threshold={200} effect="blur"/>
            </div>
            <div className="col-md-6 d-flex flex-column align-items-center">
               <h3 className="text-primary fs-4 text-start text-lg-start">2022 Honda Civic LX</h3>
               <div className="d-flex flex-column flex-lg-row gap-lg-5">
                <div>
                    <p className="mb-1"><span className="fw-bold">VIN: </span>1HGBH41JXMN109186</p>
                    <p className="mb-1"><span className="fw-bold">Mileage: </span> 25,000 miles</p>
                    <p className="mb-1"><span className="fw-bold">Location: </span>Los Angeles, CA</p>
                </div>
                <div className="me-4">
                    <p className="mb-1"><span className="fw-bold">Condition: </span>Excellent</p>
                    <p className="mb-1"><span className="fw-bold">Color: </span>Silver</p>
                    <p className="mb-1"><span className="fw-bold">Transmission: </span>Automatic</p>
                </div>
               </div>
            </div>
            <div className="col-md-3 d-flex flex-column align-items-center align-items-md-center">
                <p className="bg-success bg-opacity-75 text-white
                 fw-bold rounded-2 d-inline-flex p-2
                 align-items-center gap-2 justify-content-center mb-2"><FaCircle />LIVE AUCTION
                </p>
                <p className="text-danger fw-bold fs-5 mb-2">02: 15: 30</p>
                <p className="text-secondary">Time Remaining</p>
            </div>
        </div>
    </div>
  )
}

export default CarDetails
