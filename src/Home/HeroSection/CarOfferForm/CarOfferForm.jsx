import TabButtons from "./TabButtons/TabButtons";
import "./CarOfferForm.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CarOfferForm = () => {
  return (
    <section className="d-flex flex-column align-items-center justify-content-end w-100 h-100"> 
      <LazyLoadImage src="Images/Home/car-image-5.jpeg" className="mb-3 car-img d-none d-md-block"/> 
      <TabButtons/>
    </section>
  )
}

export default CarOfferForm
