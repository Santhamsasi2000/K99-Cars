import { FaUserCircle } from "react-icons/fa"
import FileUploadCard from "./FileUploadCard"
import { NavLink, useNavigate } from "react-router-dom"
import { useFormik } from "formik";
import NavLogin from "../NavLogin";
import FooterBuyer from "../../FooterBuyer/FooterBuyer";

const UploadDocuments = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      pancard: "",
    },
    onSubmit: (values) => {
      if (!values.pancard) 
      {
        alert("Please upload PAN card before submitting.");
        return;
      }
       navigate("/nav-dashboard/")
    }
  })
  return (
    <>
     <NavLogin/>
     <section className="p-3 p-sm-4 p-md-5">
      <div className="p-4 mb-4 bg-light d-flex justify-content-between align-items-center w-100">
        <p className="fw-bold mb-0 text-center">Please update your profile</p>
        <FaUserCircle className="text-secondary fs-4"/>
      </div>
      <form className="p-4 shadow rounded-2 card" onSubmit={formik.handleSubmit}>
         <h4 className="bold-900">Upload Documents</h4>
         <p className="text-secondary mb-4">Only JPEG and JPG formats are supported.</p>
         <div className="row gy-4">
           <div className="col-sm-6 col-md-4">
             <FileUploadCard label="PanCard" required 
             name="pancard"
             onChange={(file) => formik.setFieldValue("pancard", file)}/>
           </div>
           <div className="col-sm-6 col-md-4">
             <FileUploadCard label="Aadharcard Front"/>
           </div>
           <div className="col-sm-6 col-md-4">
             <FileUploadCard label="Aadharcard Back"/>
           </div>
           <div className="col-sm-6 col-md-4">
             <FileUploadCard label="Driving License Front"/>
           </div>
           <div className="col-sm-6 col-md-4">
             <FileUploadCard label="Driving License Back"/>
           </div>
         </div>
         {/* Submit and Back Button */}
          <div className="d-flex justify-content-center gap-3 mt-4">
            <NavLink to="/update-details" className="btn btn-primary px-5">Back</NavLink>
            <button type="submit" 
            className="btn btn-primary px-5"
            >
              Submit</button>
          </div>
      </form>
     </section>
     <FooterBuyer/>
    </>
  )
}

export default UploadDocuments
