import { useRef, useState } from "react"
import { BsPlusLg } from "react-icons/bs"
import { FaTimes } from "react-icons/fa";

const FileUploadCard = ({ label, name, required, onChange }) => {
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleDivClick = () => {
        fileInputRef.current.click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/"))
    {
       const reader = new FileReader();
       reader.onloadend = () => {
        setPreviewUrl(reader.result);
        onChange && onChange(file); // send file to parent
       }  
       reader.readAsDataURL(file);
    }
    else
    {
      setPreviewUrl(null);
      onChange && onChange(null); // clear if invalid
    }
  }

  const handleRemove = () => {
    setPreviewUrl(null);
    fileInputRef.current.value = ""; // Clear file input value
     onChange && onChange(null);
  }

  return (
    <section className="sky-bg-50 shadow-sm rounded-2 p-4">
       <p className="fw-bold text-center">{label} 
        {required && <span className="ms-2 text-danger">*</span>}</p>

        {/* Upload Box */}
       <div className="p-4 pe-auto secondary-color position-relative
       d-flex flex-column align-items-center rounded-2"
           style={{ cursor:"pointer" }} onClick={handleDivClick}>
           {
            previewUrl ? (
              <>
              {/* Image Preview */}
              <img
                src={previewUrl}
                alt="Preview"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
              {/* Remove Icon */}
              <FaTimes
                className="position-absolute top-0 end-0 m-2 text-danger"
                style={{ cursor: "pointer" }}
                onClick={handleRemove}
              />
            </>
            ):
             <>
              <BsPlusLg className="fs-1 mb-2" />
              <p className="fw-bold mb-0 text-secondary">Upload Image</p>
             </>
           }
       </div>
       {/* Hidden Input */}
       <input type="file"
       accept=".jpg,.jpeg,.png"
       onChange={handleFileChange}
       ref={fileInputRef}
       className="d-none"/>
    </section>
  )
}

export default FileUploadCard
