import { FaUserCircle } from "react-icons/fa"
import FileUploadCard from "./FileUploadCard"
import { NavLink, useNavigate } from "react-router-dom"
import { useFormik } from "formik";
import FooterBuyer from "../../FooterBuyer/FooterBuyer";
import { motion } from "framer-motion";
import NavProfile from "./NavProfile";
import FooterDashboard from "../../FooterBuyer/FooterDashboard";

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
     <NavProfile/>
     <section className="p-3 p-sm-4 p-md-5">
      {/* title */}
       <motion.h2 className="skyBlue-600 title mb-4 mb-lg-5"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
       >
        Update Your Profile</motion.h2>
      <form className="p-4 shadow rounded-4 card-bg" onSubmit={formik.handleSubmit}>
         <h5 className="fs-5 fw-bold green-color mb-1">Upload Documents</h5>
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
            <NavLink to="/update-details" className="px-5 py-2 sky-bg-600 text-white text-decoration-none rounded-4 border-0">Back</NavLink>
            <button type="submit" 
            className="px-5 py-2 green-darkBg text-white text-decoration-none rounded-4 border-0">
              Submit</button>
          </div>
      </form>
     </section>
     <FooterDashboard/>
    </>
  )
}

export default UploadDocuments
