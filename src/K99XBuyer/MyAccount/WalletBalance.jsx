import { FaWallet } from "react-icons/fa6"
import { FiMinus } from "react-icons/fi"
import { IoMdAdd } from "react-icons/io"

const WalletBalance = () => {
  return (
     <section className="border rounded-2">
      <div className="bg-success text-white rounded-top-2">
        <p className="fw-bold mb-0 py-2 px-3 d-flex align-items-center gap-2">
            <FaWallet className="fs-5"/>
            Wallet Balance
        </p>
      </div>
      <div className="p-3 d-flex flex-column align-items-center w-100">
         <h4 className="text-success fw-bold fs-3">$25,000.00</h4>
         <p className="text-secondary">Available for bidding</p>
         <button className="btn btn-success mb-3 d-flex align-items-center w-100 justify-content-center gap-1"><IoMdAdd className="fs-5"/>Add Funds</button>
         <button className="btn btn-outline-secondary d-flex align-items-center w-100 justify-content-center gap-1"><FiMinus className="fs-5"/> Withdraw</button>
      </div>
    </section>
  )
}

export default WalletBalance
