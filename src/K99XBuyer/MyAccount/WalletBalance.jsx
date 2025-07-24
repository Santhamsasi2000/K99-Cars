import { useState } from "react"
import { FaCircleInfo, FaWallet } from "react-icons/fa6"
import { FiMinus } from "react-icons/fi"
import { IoMdAdd } from "react-icons/io"
import { RxCross1 } from "react-icons/rx"

const WalletBalance = () => {
  const [addFunds, setAddFunds]= useState(false);
  const [withdraw, setWithdraw]= useState(false);

  return (
    <>
     <section className="rounded-3 overflow-hidden shadow mb-5">
      <div className="navbar-bg secondary-color">
        <p className="fw-bold fs-5 mb-0 py-2 px-3 d-flex align-items-center gap-2">
            <FaWallet className="fs-5"/>
            Wallet Balance
        </p>
      </div>
      <div className="p-3 d-flex flex-column align-items-center w-100 card-bg shadow ">
         <h4 className="primary-title">$ 25,000.00</h4>
         <p className="text-secondary">Available for bidding</p>
         <button onClick={()=> setAddFunds(true)} className="primary-btn py-2 mb-3 d-flex align-items-center w-100 justify-content-center gap-1"><IoMdAdd className="fs-5"/>Add Funds</button>
         <button onClick={()=> setWithdraw(true)}  className="primary-btn py-2 d-flex align-items-center w-100 justify-content-center gap-1"><FiMinus className="fs-5"/> Withdraw</button>
      </div>
     </section>

     {/* Add Funds */}
      {
          addFunds && (
          <div className="pop-up" onClick={()=>setAddFunds(false)}>
            <div className="card shadow-sm pop-up-card" onClick={(e) => e.stopPropagation()}>
              <div className="d-flex justify-content-between align-items-center p-3">
                <h6 className="mb-0 fw-bold fs-5">Add Funds to Wallet</h6>
                <i className="text-secondary fs-5" onClick={()=>setAddFunds(false)}><RxCross1/></i>
              </div>
              <div className="border"></div>
              <form>
                <div className="p-3">
                  <div class="mb-3">
                    <label for="amount" class="form-label">Amount ($)</label>
                    <input type="email" class="form-control" id="amount" placeholder="Enter amount"/>
                  </div>
                  <div class="mb-3">
                    <label for="amount" class="form-label">Payment Method</label>
                    <select class="form-select" id="amount">
                      <option selected>Bank Transfer</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="card bg-info bg-opacity-25 border-info">
                    <p className="d-flex gap-3 align-items-center p-3 mb-0">
                      <FaCircleInfo />
                      Funds typically arrive within 1-2 business days.
                    </p>
                  </div>
                </div>
                <div className="border"></div>
                <div className="d-flex gap-3 justify-content-end p-3">
                  <button className="btn btn-secondary">Cancel</button>
                  <button className="btn btn-success">Add Funds</button>
                </div>
              </form>
            </div>
          </div>
           )
      }

     {/* Withdraw Funds */}
      {
          withdraw && (
          <div className="pop-up" onClick={()=>setWithdraw(false)}>
            <div className="card shadow-sm pop-up-card" onClick={(e) => e.stopPropagation()}>
              <div className="d-flex justify-content-between align-items-center p-3">
                <h6 className="mb-0 fw-bold fs-5">Withdraw Funds</h6>
                <i className="text-secondary fs-5" onClick={()=>setWithdraw(false)}><RxCross1/></i>
              </div>
              <div className="border"></div>
              <form>
                <div className="p-3">
                  <div class="mb-3">
                    <label for="amount" class="form-label">Amount ($)</label>
                    <input type="email" class="form-control" id="amount" placeholder="Enter amount"/>
                  </div>
                  <div class="mb-3">
                    <label for="amount" class="form-label">Withdrawl Method</label>
                    <select class="form-select" id="amount">
                      <option selected>Check</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="border"></div>
                <div className="d-flex gap-3 justify-content-end p-3">
                  <button className="btn btn-secondary">Cancel</button>
                  <button className="btn btn-warning">Request Withdrawl</button>
                </div>
              </form>
            </div>
          </div>
           )
      }
    </>
  )
}

export default WalletBalance
