import { FaInfoCircle } from "react-icons/fa"

const DescriptionLogin = () => {
  return (
    <section className="mt-3 d-flex flex-column align-items-center">
        <div className="card w-100 p-3" style={{maxWidth: "500px"}}>
            <h5 className="text-info fw-bold d-flex align-items-center gap-2"><FaInfoCircle/> Account Activation</h5>
            <p>New accounts require admin approval before accessing auction features.Check your email for activation instructions after registration.</p>
        </div>
    </section>
  )
}

export default DescriptionLogin
