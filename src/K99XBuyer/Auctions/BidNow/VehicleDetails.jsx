import { FaFileAlt, FaInfoCircle } from "react-icons/fa"

const VehicleDetails = () => {
  return (
    <section className="border rounded-2 overflow-hidden mb-5">
      <div className="bg-light">
        <p className="fw-bold mb-0 d-flex align-items-center gap-2 fs-5 py-2 px-3">
            <FaInfoCircle className="fs-5"/>
            <span>Vehicle Details & Inspection Report</span>
        </p>
      </div>
     <div className="border-top border-2 "></div>
     <div className="p-3">
       <div className="row gy-4">
        <div className="col-sm-6">
            <h6 className="fw-bold text-primary fs-5">Specifications</h6>
            <p className="mb-1"><span className="bold-900">Engine: </span>2.0L 4-Cylinder</p>
            <p className="mb-1"><span className="bold-900">Fuel Type: </span>Gasoline</p>
            <p className="mb-1"><span className="bold-900">Drive Type: </span>FWD</p>
            <p className="mb-1"><span className="bold-900">Exterior: </span>Lunar Silver Metallic</p>
            <p className="mb-1"><span className="bold-900">Interior: </span>Black Cloth</p>
        </div>
        <div className="col-sm-6">
            <h6 className="fw-bold text-primary fs-5 mb-3">Inspection Report</h6>
            <p className="mb-3"><span className="text-white bold-900 px-2 py-1 rounded-2 me-2 bg-success">Excellent</span>Engine</p>
            <p className="mb-3"><span className="text-white bold-900 px-2 py-1 rounded-2 me-2 bg-success">Excellent</span>Transmission</p>
            <p className="mb-3"><span className="text-white bold-900 px-2 py-1 rounded-2 me-2 bg-warning">Good</span>Tires</p>
            <p className="mb-3"><span className="text-white bold-900 px-2 py-1 rounded-2 me-2 bg-success">Excellent</span>Interior</p>
            <p className="mb-3"><span className="text-white bold-900 px-2 py-1 rounded-2 me-2 bg-success">Excellent</span>Exterior</p>
        </div>
       </div>
       <button className="btn btn-outline-info fw-bold 
       d-flex align-items-center gap-1 border-2 mt-3"><FaFileAlt />
       View Full Inspection Report</button>
     </div>
    </section>
  )
}

export default VehicleDetails
 