import TabButtons from "./TabButtons/TabButtons";
import "./CarOfferForm.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CarOfferForm = () => {
  return (
    <section className="d-flex flex-column align-items-center w-100">
       {/* <h2 className="caroffer-title mb-3 mb-md-4">Get a Real Offer In Minutes</h2> */}
      <LazyLoadImage src="/Home/car-image-new.jpg" className="car-img mb-4 d-none d-md-block"/> 
      <TabButtons/>
    </section>
  )
}

export default CarOfferForm
