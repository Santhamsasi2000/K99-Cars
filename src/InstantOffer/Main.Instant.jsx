import { IoReload } from "react-icons/io5";
import "./Main.Instant.css";
import QuestionWithOptions from "./QuestionAnswer/QuestionWithOptions";
const MainInstant = () => {
  return (
    <section className='main-instant'>
      <div className="px-sm-3">
        <div className="instant-border">
          <div className="row justify-content-between gx-0">
            <div className="col-lg-4 d-none d-lg-block p-3 p-sm-4 p-md-5">
            <h2 className="fw-bold fs-3">get an instant offer</h2>
            <p className="small mb-5">We'll keep track of your answers over here. You can jump back to a previous question any time.</p>
            <p className="headings-instant text-dark">Vehicle</p>
            <hr className="underline-instant mt-3"/>
            <p className="headings-instant">Ownership</p>
            <hr className="underline-instant mt-3"/>
            <p className="headings-instant">Condition</p>
            {/* Start Over - Button */}
            <button className="startover-btn fw-bold border-0 px-3 py-2 rounded-pill d-flex align-items-center gap-2"><IoReload className="fs-4"/>Start over</button>
            </div>
            <div className="col-lg-1 border-end">

            </div>
            <div className="col-lg-7">
                <QuestionWithOptions/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainInstant
