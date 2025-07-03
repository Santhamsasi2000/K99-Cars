import { LazyLoadImage } from "react-lazy-load-image-component"
import "./Milege.css";

const Milege = () => {
  return (
    <>
    <section className="textBox-card shadow d-flex flex-column align-items-center">
        <div className="d-flex justify-content-center align-items-center w-100 mb-5">
             <LazyLoadImage style={{width: "200px",height: "100px"}}
         src="/Instant Offer/car-milege.jpeg" threshold={200} effect="blur"/>
        </div>
        <p className="fs-5">just making sure</p>
        <h2 className="fw-bold mb-4">is the milege correct?</h2>
        <p className="text-secondary mb-3">We just want to double-check that your milege entry is correct, since cars that age tend to clock in higher. And this will obviously impact your offer.</p>
        <button className="mb-4 w-100 text-center fs-5 border-0 fw-bold d-flex align-items-center justify-content-center"
         style={{backgroundColor: " #ffd94f", borderRadius: "28px", padding:"0 24px", minHeight:"56px"}}>Yep, this is correct</button>
        <button className="w-100 text-center fs-5 border-0 fw-bold d-flex align-items-center justify-content-center"
         style={{borderRadius: "28px", padding:"0 24px", minHeight:"56px"}}>Re-enter my mileage</button>
    </section>
    <section className="textBox-card shadow d-flex flex-column align-items-center">
        <div className="d-flex justify-content-center align-items-center w-100 mb-5">
             <LazyLoadImage style={{width: "200px",height: "100px"}}
         src="/Instant Offer/car-milege.jpeg" threshold={200} effect="blur"/>
        </div>
        <p className="fs-5">just double checkin'</p>
        <h2 className="fw-bold mb-4">can't verify the mileage?</h2>
        <p className="text-secondary mb-3">You're sure you can't verify your milege?This may affect your offer because we'll have to estimate it.</p>
        <button className="mb-4 w-100 text-center fs-5 border-0 fw-bold d-flex align-items-center justify-content-center"
         style={{backgroundColor: " #ffd94f", borderRadius: "28px", padding:"0 24px", minHeight:"56px"}}>I can't see my mileage</button>
        <button className="w-100 text-center fs-5 border-0 fw-bold d-flex align-items-center justify-content-center"
         style={{borderRadius: "28px", padding:"0 24px", minHeight:"56px"}}>Re-enter my mileage</button>
    </section>
    
    </>
  )
}

export default Milege
