import { FaArrowRight, FaStar } from "react-icons/fa";
import CarOfferForm from "../CarOfferForm/CarOfferForm";
import "./HeroSection.css";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const HeroSection = () => {
  return (
    <section>
      <div className="row gx-0 h-100">
        <div className="col-6 h-100">
          <div className="card-bg p-3 h-100">
            <h1 className="hero-title primary-title-color">Real Time Offer</h1>
            <h1 className="hero-title primary-title-color">Same Day Payment</h1>
            <CarOfferForm/>
             {/* Acheivments */}
            <div className="d-flex justify-content-center gap-4 gap-sm-5">
              <div className="d-flex flex-column align-items-center">
                 <span className="fw-bold">500+</span>
                 <span className="text-secondary">Live Auctions</span>
              </div>
              <div className="d-flex flex-column align-items-center">
                 <span className="fw-bold">4.9</span>
                 <span className="text-secondary">Buyer rating</span>
              </div>
              <div className="d-flex flex-column align-items-center">
                 <span className="fw-bold">500+</span>
                 <span className="text-secondary">Avg.Savings</span>
              </div>
            </div>
            
          </div>
        </div>
        <div className="col-6 h-100">
          <div className="card-bg-secondary p-3 h-100">
            <h1 className="hero-title secondary-color">Real Time Auctions</h1>
            <h1 className="hero-title secondary-color">Verified Cars Only</h1>
            {/* CTA Button */}
            <div className=" my-3 d-flex gap-3 justify-content-center">
              <NavLink className="secondary-btn px-4 py-2">Buy Used Car</NavLink>
              <NavLink className="secondary-btn px-4 py-2">Explore Auctions</NavLink>
            </div>
            {/* Acheivments */}
            <div className="d-flex justify-content-center gap-4 gap-sm-5">
              <div className="d-flex flex-column align-items-center">
                 <span className="fw-bold">500+</span>
                 <span className="text-secondary">Live Auctions</span>
              </div>
              <div className="d-flex flex-column align-items-center">
                 <span className="fw-bold">4.9</span>
                 <span className="text-secondary">Buyer rating</span>
              </div>
              <div className="d-flex flex-column align-items-center">
                 <span className="fw-bold">500+</span>
                 <span className="text-secondary">Avg.Savings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
