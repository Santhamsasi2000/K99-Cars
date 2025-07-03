import "./RegistrationNumber.css";
const RegistrationNo = () => {
  return (
    <div className="d-flex flex-column align-items-center gap-3 p-3 mb-0 h-100">
       <input placeholder="Registartion No" className="registration-input"/>
       <input placeholder="Pincode" className="registration-input"/>
    </div>
  )
}

export default RegistrationNo
