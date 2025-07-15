import { FaArrowRight, FaStar } from "react-icons/fa";
import CarOfferForm from "../CarOfferForm/CarOfferForm";
import "./HeroSection.css";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const HeroSection = () => {
  return (
    <>
    <section className="hero-section">
      <div className="row justify-content-between gy-4 gx-0">
        <div className="col-lg-6">
            {/* Star Ratings */}
            {/* <div className="d-none d-md-flex flex-column flex-xl-row align-items-center gap-0 mb-5">
              <span><FaStar className="size-star me-1"/><FaStar className="size-star me-1"/><FaStar className="size-star me-1"/><FaStar className="size-star me-1"/><FaRegStarHalfStroke className="size-star"/></span>
              <span className="mt-1 text-center rating-text"> 
                <span className="fw-bold">4.7 stars </span> 
                 based on  
                <span className="text-decoration-underline fw-bold d-block d-md-inline">  1,62,465 customer reviews</span>
              </span>
            </div> */}
            <h1 className="hero-title mb-0 text-center text-lg-start">REAL TIME OFFER.</h1>
            {/* <h1 className="hero-title mb-0 text-center text-md-start">FREE PICKUP.</h1> */}
            <h1 className="hero-title mb-0 text-center text-lg-start">SAME DAY PAYMENT.</h1>
            <p className="mt-4 hero-subtitle fw-semibold text-center text-lg-start">Sell your used, damaged, or old car easily — no agents, no hassle, no hidden fees.</p>
        </div>
        <div className="col-lg-5">
            <CarOfferForm/>
        </div>
      </div>
    </section>
    <div className="row justify-content-end align-items-end offer-btn-row gx-0 ">
      <div className="col-lg-5">
        <NavLink className="offer-btn w-100 rounded-bottom-4 d-flex justify-content-center align-items-center">GET AN INSTANT OFFER
         <FaArrowRight className="ms-2"/>
        </NavLink>
        {/* to="/instant-offer" */}
      </div>
    </div>
    {/* Star Ratings */}
    {/* <div className="my-5 d-flex d-md-none flex-column flex-sm-row align-items-center justify-content-center gap-2 gap-sm-3">
      <span><FaStar className="size-star me-1"/><FaStar className="size-star me-1"/><FaStar className="size-star me-1"/><FaStar className="size-star me-1"/><FaRegStarHalfStroke className="size-star"/></span>
      <span className="mt-1 rating-text"> <span className="fw-bold">4.7 stars</span> based on <span className="text-decoration-underline fw-bold">1,62,465 customer reviews</span></span>
    </div> */}
    </>
  )
}

export default HeroSection
