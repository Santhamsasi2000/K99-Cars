import { FaUserCircle } from "react-icons/fa"
import FileUploadCard from "./FileUploadCard"

const UploadDocuments = () => {
  return (
    <section className="p-3 p-sm-4 p-md-5 d-flex flex-column align-items-center w-100">
      <div className="p-4 mb-4 bg-light d-flex justify-content-between align-items-center w-100">
        <p className="fw-bold mb-0 text-center">Please update your profile</p>
        <FaUserCircle className="text-secondary fs-4"/>
      </div>
      <form className="p-4 shadow rounded-2 card">
         <h4 className="bold-900">Upload Documents</h4>
         <p className="text-secondary">Only JPEG and JPG formats are supported.</p>
         <div className="row">
           <div className="col-4">
             <FileUploadCard label="PanCard" />
           </div>
         </div>

      </form>
      <div className="d-flex gap-3 mt-4">
        <button className="btn btn-primary px-5">Back</button>
        <button className="btn btn-primary px-5">Submit</button>
      </div>
    </section>
  )
}

export default UploadDocuments
