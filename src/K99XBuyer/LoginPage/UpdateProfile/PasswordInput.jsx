import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ placeholder, name, value, onChange, onBlur }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="position-relative">
      <input
        type={showPassword ? "text" : "password"}
        className="form-control"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span
        className="position-absolute top-50 end-0 translate-middle-y me-3"
        style={{ cursor: "pointer" }}
        onClick={togglePassword}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
  );
};

export default PasswordInput;
