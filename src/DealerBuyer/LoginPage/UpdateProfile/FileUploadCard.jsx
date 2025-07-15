// FileUploadCard.jsx
import { useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";   // lightweight feather‑style icon        // custom styles (see below)

export default function FileUploadCard({ label = "PanCard", required = true }) {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleSelect = e => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show image preview
    const reader = new FileReader();
    reader.onload = ev => setPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="upload-card rounded-3 p-3 text-center">
      {/* label */}
      <p className="fw-bold mb-2">
        {label}
        {required && <span className="text-danger ms-1">*</span>}
      </p>

      {/* clickable drop zone */}
      <div
        className="upload-dropzone d-flex flex-column justify-content-center align-items-center rounded-3 mx-auto"
        onClick={() => fileInputRef.current?.click()}
      >
        {preview ? (
          // if an image is chosen, show the preview
          <img src={preview} alt="preview" className="img-fluid h-100 w-100 object-fit-cover rounded-3" />
        ) : (
          <>
            <FiPlus size={32} className="text-secondary" />
            <small className="text-secondary mt-1">Upload Image</small>
          </>
        )}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="d-none"
          onChange={handleSelect}
        />
      </div>
    </div>
  );
}

