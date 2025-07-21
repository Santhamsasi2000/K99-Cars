import { FaInfoCircle } from "react-icons/fa"

const DescriptionLogin = () => {
  return (
    <section className="p-3 p-sm-4 p-md-5 d-flex flex-column align-items-center">
        <div className="shadow w-100 p-4 p-sm-5 rounded-3" style={{ maxWidth: "600px"}}>
            <h5 className="text-info fw-bold d-flex align-items-center gap-2"><FaInfoCircle/> Account Activation</h5>
            <p>New accounts require admin approval before accessing auction features.Check your email for activation instructions after registration.</p>
        </div>
    </section>
  )
}

export default DescriptionLogin
